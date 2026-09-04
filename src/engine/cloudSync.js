import { gameState } from './gameState.js';
import { mergeProgress } from './mergeProgress.js';

// Vite substitutes these at build time; the fallback keeps the module safe to
// import outside a Vite build (tests, tooling).
const ENV = import.meta.env || {};
const SUPABASE_URL = ENV.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = ENV.VITE_SUPABASE_ANON_KEY;

// Without credentials the game runs exactly as before, on localStorage alone.
export const isConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// Loaded as its own chunk rather than up front: the auth client is larger
// than the whole game, and nothing on the first screen needs it.
let supabase = null;
async function client() {
    if (!supabase) {
        const { createClient } = await import('@supabase/supabase-js');
        supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return supabase;
}

const PUSH_DEBOUNCE_MS = 1500;

// Where the provider sends the browser back to. Vite rewrites BASE_URL to the
// deployed sub-path, so this is correct on localhost and in production alike.
// Whatever this resolves to must be listed in Supabase's Redirect URLs.
function appUrl() {
    return new URL(ENV.BASE_URL || '/', window.location.origin).href;
}

let status = isConfigured ? 'signed-out' : 'disabled';
let email = null;
let userId = null;
let pushTimer = null;
let pendingPush = false;
const watchers = [];

export function getSyncState() {
    return { status, email, isConfigured };
}

export function onSyncChange(cb) {
    watchers.push(cb);
}

function setStatus(next, nextEmail = email) {
    status = next;
    email = nextEmail;
    watchers.forEach(cb => cb(getSyncState()));
}

async function pull() {
    const { data, error } = await (await client())
        .from('saves')
        .select('state')
        .eq('user_id', userId)
        .maybeSingle();
    if (error) throw error;
    return data ? data.state : null;
}

async function push() {
    const { error } = await (await client())
        .from('saves')
        .upsert(
            { user_id: userId, state: gameState.state, updated_at: new Date().toISOString() },
            { onConflict: 'user_id' }
        );
    if (error) throw error;
}

function schedulePush() {
    if (!userId) return;
    pendingPush = true;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(flush, PUSH_DEBOUNCE_MS);
}

async function flush() {
    if (!userId || !pendingPush) return;
    clearTimeout(pushTimer);
    pendingPush = false;
    setStatus('syncing');
    try {
        await push();
        setStatus('synced');
    } catch (err) {
        pendingPush = true;
        setStatus('error');
        console.warn('[sync] push failed, will retry on next change', err);
    }
}

async function adoptSession(session) {
    if (!session) {
        userId = null;
        setStatus('signed-out', null);
        return;
    }
    userId = session.user.id;
    setStatus('syncing', session.user.email || null);
    try {
        const remote = await pull();
        const merged = mergeProgress(gameState.state, remote);
        gameState.replaceState(merged);
        // Push unconditionally: the merge may have carried local-only progress
        // that the remote row has never seen.
        await push();
        setStatus('synced');
    } catch (err) {
        setStatus('error');
        console.warn('[sync] initial sync failed', err);
    }
}

export function initCloudSync() {
    if (!isConfigured) return;

    // A local change queues a push; applying a remote merge must not bounce back.
    gameState.addListener((_state, meta) => {
        if (meta && meta.fromRemote) return;
        schedulePush();
    });

    // Don't lose the last few seconds of play when the tab goes away.
    const flushNow = () => { if (pendingPush) flush(); };
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') flushNow();
    });
    window.addEventListener('pagehide', flushNow);

    client().then(async (sb) => {
        sb.auth.onAuthStateChange((_event, session) => { adoptSession(session); });
        const { data } = await sb.auth.getSession();
        if (data.session) adoptSession(data.session);
    }).catch(err => console.warn('[sync] could not load auth client', err));
}

// Primary path: no email is sent, so it needs no domain and no SMTP.
export async function signInWithGoogle() {
    if (!isConfigured) throw new Error('Cloud save is not configured.');
    const { error } = await (await client()).auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: appUrl() }
    });
    if (error) throw error;
}

// Fallback for anyone without a Google account. Needs custom SMTP configured
// in Supabase before it will deliver to addresses other than the project owner's.
export async function sendSignInLink(address) {
    if (!isConfigured) throw new Error('Cloud save is not configured.');
    const { error } = await (await client()).auth.signInWithOtp({
        email: address,
        options: { emailRedirectTo: appUrl() }
    });
    if (error) throw error;
}

export async function signOut() {
    if (!isConfigured) return;
    await flush();
    await (await client()).auth.signOut();
    userId = null;
    setStatus('signed-out', null);
}
