import { gameState } from './engine/gameState.js';
import { initCloudSync, onSyncChange, getSyncState, signInWithGoogle, sendSignInLink, signOut } from './engine/cloudSync.js';
import { renderGalaxyMap } from './screens/galaxyMap.js';
import { renderLessonScreen } from './screens/lessonScreen.js';
import { renderExerciseScreen } from './screens/exerciseScreen.js';
import { renderBossScreen } from './screens/bossScreen.js';
import { renderResultsScreen } from './screens/resultsScreen.js';
import { renderVocabularyScreen } from './screens/vocabularyScreen.js';

const SYNC_BADGE = {
  'signed-out': { icon: '☁️', title: 'Sign in to save your progress' },
  'syncing': { icon: '🔄', title: 'Syncing…' },
  'synced': { icon: '✅', title: 'Progress saved to the cloud' },
  'error': { icon: '⚠️', title: 'Sync problem — progress is still saved on this device' }
};

export function initApp(container) {
  const context = {
    currentScreen: 'map',
    params: {}
  };

  const navigateTo = (screen, params = {}) => {
    context.currentScreen = screen;
    context.params = params;
    render();
  };

  gameState.addListener((_state, meta) => {
    updateHeader();
    // A cloud merge can unlock sectors. Redraw the map so they appear at once,
    // but never redraw mid-run: that would restart an exercise or boss fight.
    if (meta && meta.fromRemote && context.currentScreen === 'map') render();
  });

  function updateHeader() {
    const xpDisplay = document.getElementById('xp-display');
    const livesDisplay = document.getElementById('lives-display');
    if (xpDisplay) xpDisplay.textContent = `${gameState.state.xp} XP`;
    if (livesDisplay) livesDisplay.textContent = gameState.state.lives;
  }

  function renderHeader() {
    const sync = getSyncState();
    const badge = SYNC_BADGE[sync.status];
    return `
      <header class="app-header glass-panel">
        <button class="icon-btn" id="home-btn">🪐</button>
        <div class="stat-pill"><span class="icon">⭐</span> <span id="xp-display">${gameState.state.xp} XP</span></div>
        <div class="stat-pill"><span class="icon">❤️</span> <span id="lives-display">${gameState.state.lives}</span></div>
        ${badge ? `<button class="icon-btn sync-btn" id="sync-btn" title="${badge.title}">${badge.icon}</button>` : ''}
        <div class="sync-panel glass-panel hidden" id="sync-panel"></div>
      </header>
    `;
  }

  function renderSyncPanel() {
    const panel = document.getElementById('sync-panel');
    if (!panel) return;
    const sync = getSyncState();

    if (sync.email) {
      panel.innerHTML = `
        <p class="sync-line">Signed in as <strong>${sync.email}</strong></p>
        <p class="sync-line secondary-text">${sync.status === 'error'
          ? 'Could not reach the server. Progress is safe on this device and will sync when you are back online.'
          : 'Your progress is saved to your account.'}</p>
        <button id="sync-signout" class="btn btn-secondary btn-sm w-100">SIGN OUT</button>
      `;
      panel.querySelector('#sync-signout').onclick = async () => {
        await signOut();
        renderSyncPanel();
      };
      return;
    }

    panel.innerHTML = `
      <p class="sync-line">Save your progress so it survives on any device.</p>
      <button id="sync-google" class="btn btn-primary btn-sm w-100">CONTINUE WITH GOOGLE</button>
      <div class="sync-divider"><span>or</span></div>
      <input type="email" id="sync-email" class="text-input mb-1" placeholder="you@example.com" autocomplete="email">
      <button id="sync-send" class="btn btn-secondary btn-sm w-100">EMAIL ME A LINK</button>
      <p class="sync-line secondary-text" id="sync-msg"></p>
    `;

    const googleBtn = panel.querySelector('#sync-google');
    const emailEl = panel.querySelector('#sync-email');
    const sendBtn = panel.querySelector('#sync-send');
    const msgEl = panel.querySelector('#sync-msg');

    googleBtn.onclick = async () => {
      googleBtn.disabled = true;
      msgEl.textContent = 'Redirecting to Google…';
      try {
        // On success the browser navigates away, so nothing after this runs.
        await signInWithGoogle();
      } catch (err) {
        googleBtn.disabled = false;
        msgEl.textContent = err.message || 'Could not start Google sign-in.';
      }
    };

    const send = async () => {
      const address = emailEl.value.trim();
      if (!address) return;
      sendBtn.disabled = true;
      msgEl.textContent = 'Sending…';
      try {
        await sendSignInLink(address);
        msgEl.textContent = 'Check your email for a sign-in link.';
      } catch (err) {
        sendBtn.disabled = false;
        msgEl.textContent = err.message || 'Could not send the link. Try again.';
      }
    };

    sendBtn.onclick = send;
    emailEl.onkeypress = (e) => { if (e.key === 'Enter') send(); };
  }

  function wireSyncButton() {
    const btn = document.getElementById('sync-btn');
    const panel = document.getElementById('sync-panel');
    if (!btn || !panel) return;
    btn.onclick = () => {
      const opening = panel.classList.contains('hidden');
      panel.classList.toggle('hidden', !opening);
      if (opening) renderSyncPanel();
    };
  }

  // Reflect sync status in the header without disturbing the screen below it.
  onSyncChange((sync) => {
    const btn = document.getElementById('sync-btn');
    const badge = SYNC_BADGE[sync.status];
    if (btn && badge) {
      btn.textContent = badge.icon;
      btn.title = badge.title;
    }
    const panel = document.getElementById('sync-panel');
    if (panel && !panel.classList.contains('hidden')) renderSyncPanel();
  });

  function render() {
    container.innerHTML = renderHeader();

    const main = document.createElement('main');
    main.className = 'app-main';
    const contentContainer = document.createElement('div');
    contentContainer.className = 'screen-container';
    main.appendChild(contentContainer);
    container.appendChild(main);

    document.getElementById('home-btn').addEventListener('click', () => {
      if (context.currentScreen !== 'boss') navigateTo('map');
    });
    wireSyncButton();

    switch (context.currentScreen) {
      case 'map': renderGalaxyMap(contentContainer, navigateTo); break;
      case 'lesson': renderLessonScreen(contentContainer, navigateTo, context.params); break;
      case 'exercise': renderExerciseScreen(contentContainer, navigateTo, context.params); break;
      case 'boss': renderBossScreen(contentContainer, navigateTo, context.params); break;
      case 'vocab': renderVocabularyScreen(contentContainer, navigateTo, context.params); break;
      case 'results': renderResultsScreen(contentContainer, navigateTo, context.params); break;
      default: contentContainer.innerHTML = 'Screen not found';
    }
  }

  initCloudSync();
  render();
}
