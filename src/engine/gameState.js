import { lastLevelId } from '../data/levels.js';

const STORAGE_KEY = 'frenchQuestState';
const MAX_LIVES = 3;

export class GameState {
    constructor() {
        this.listeners = [];
        this._applyingRemote = false;
        this.state = this.loadState();
    }

    getInitialState() {
        return {
            currentLevel: 1,
            unlockedLevels: [1],
            xp: 0,
            lives: MAX_LIVES,
            stars: {},       // levelId -> 1,2,3
            streaks: 0,
            vocabCompleted: {}, // levelId -> true
            vocabMissed: {}     // levelId -> [{french, english}, ...]
        };
    }

    // Runs at module import, before any UI exists: a parse error or a save
    // written by an older build must not take the whole app down, so fall back
    // to defaults for anything missing or malformed.
    loadState() {
        const base = this.getInitialState();
        let saved;
        try {
            saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        } catch {
            saved = null;
        }
        if (!saved || typeof saved !== 'object') return base;

        return {
            ...base,
            ...saved,
            unlockedLevels: Array.isArray(saved.unlockedLevels) && saved.unlockedLevels.length
                ? saved.unlockedLevels
                : base.unlockedLevels,
            stars: (saved.stars && typeof saved.stars === 'object') ? saved.stars : base.stars,
            vocabCompleted: (saved.vocabCompleted && typeof saved.vocabCompleted === 'object')
                ? saved.vocabCompleted
                : base.vocabCompleted,
            vocabMissed: (saved.vocabMissed && typeof saved.vocabMissed === 'object')
                ? saved.vocabMissed
                : base.vocabMissed,
            xp: Number.isFinite(saved.xp) ? saved.xp : base.xp,
            lives: Number.isFinite(saved.lives) ? saved.lives : base.lives,
            streaks: Number.isFinite(saved.streaks) ? saved.streaks : base.streaks
        };
    }

    saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch {
            // Private browsing or a full quota: the run continues in memory.
        }
        this.notifyListeners();
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(cb => cb(this.state, { fromRemote: this._applyingRemote }));
    }

    // Used by cloud sync after merging a remote save. Flagged so the sync
    // listener can tell this apart from a local change and not echo it back.
    replaceState(nextState) {
        this._applyingRemote = true;
        try {
            this.state = nextState;
            this.saveState();
        } finally {
            this._applyingRemote = false;
        }
    }

    addXP(amount) {
        this.state.xp += amount;
        this.state.streaks += 1;
        // Bonus XP for streaks
        if (this.state.streaks > 3) this.state.xp += Math.floor(amount * 0.5);
        this.saveState();
    }

    resetStreak() {
        this.state.streaks = 0;
    }

    loseLife() {
        this.state.lives = Math.max(0, this.state.lives - 1);
        this.resetStreak();
        this.saveState();
        return this.state.lives > 0; // return true if alive
    }

    recoverLives() {
        this.state.lives = MAX_LIVES;
        this.saveState();
    }

    completeLevel(levelId, stars) {
        this.state.stars[levelId] = Math.max(this.state.stars[levelId] || 0, stars);
        this._tryUnlockNext(levelId);
        this.saveState();
    }

    completeVocab(levelId) {
        this.state.vocabCompleted[levelId] = true;
        this._tryUnlockNext(levelId);
        this.saveState();
    }

    isVocabCompleted(levelId) {
        return !!this.state.vocabCompleted[levelId];
    }

    saveMissedVocab(levelId, words) {
        this.state.vocabMissed[levelId] = words;
        this.saveState();
    }

    getMissedVocab(levelId) {
        return this.state.vocabMissed[levelId] || [];
    }

    clearMissedVocab(levelId) {
        delete this.state.vocabMissed[levelId];
        this.saveState();
    }

    isLevelBeaten(levelId) {
        return (this.state.stars[levelId] || 0) > 0;
    }

    _tryUnlockNext(levelId) {
        if (levelId >= lastLevelId) return;
        const levelBeaten = this.isLevelBeaten(levelId);
        const vocabDone = this.isVocabCompleted(levelId);
        if (levelBeaten && vocabDone && !this.state.unlockedLevels.includes(levelId + 1)) {
            this.state.unlockedLevels.push(levelId + 1);
        }
    }
}

export const gameState = new GameState();
