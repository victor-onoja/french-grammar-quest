// Progress in this game only ever moves forward: you cannot un-earn a star or
// re-lock a sector. So two saves are reconciled by taking the best of each
// field rather than by letting the newer timestamp win outright — otherwise
// opening the game on a stale device, or signing in after playing signed out,
// would quietly throw work away.
export function mergeProgress(local, remote) {
    if (!remote) return { ...local };
    if (!local) return { ...remote };

    const stars = { ...(remote.stars || {}) };
    for (const [levelId, count] of Object.entries(local.stars || {})) {
        stars[levelId] = Math.max(Number(count) || 0, Number(stars[levelId]) || 0);
    }

    const vocabCompleted = { ...(remote.vocabCompleted || {}) };
    for (const [levelId, done] of Object.entries(local.vocabCompleted || {})) {
        if (done) vocabCompleted[levelId] = true;
    }

    const unlockedLevels = [...new Set([
        ...(Array.isArray(remote.unlockedLevels) ? remote.unlockedLevels : []),
        ...(Array.isArray(local.unlockedLevels) ? local.unlockedLevels : [])
    ])].sort((a, b) => a - b);

    // Missed words are a retry queue, not an achievement. A level that has
    // since been passed on either device has no queue left to restore.
    const vocabMissed = {};
    const missedKeys = new Set([
        ...Object.keys(remote.vocabMissed || {}),
        ...Object.keys(local.vocabMissed || {})
    ]);
    for (const levelId of missedKeys) {
        if (vocabCompleted[levelId]) continue;
        const words = (local.vocabMissed || {})[levelId] || (remote.vocabMissed || {})[levelId];
        if (Array.isArray(words) && words.length) vocabMissed[levelId] = words;
    }

    return {
        // lives, streaks and currentLevel belong to the run in front of you,
        // not to the account, so the local values stand.
        ...local,
        xp: Math.max(Number(local.xp) || 0, Number(remote.xp) || 0),
        unlockedLevels: unlockedLevels.length ? unlockedLevels : [1],
        stars,
        vocabCompleted,
        vocabMissed
    };
}
