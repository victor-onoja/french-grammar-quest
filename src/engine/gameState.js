export class GameState {
    constructor() {
        this.state = this.loadState() || this.getInitialState();
        this.listeners = [];
    }

    getInitialState() {
        return {
            currentLevel: 1,
            unlockedLevels: [1],
            xp: 0,
            lives: 3,
            stars: {},       // levelId -> 1,2,3
            streaks: 0,
            vocabCompleted: {}, // levelId -> true
            vocabMissed: {}     // levelId -> [{french, english}, ...]
        };
    }

    loadState() {
        const saved = localStorage.getItem('frenchQuestState');
        return saved ? JSON.parse(saved) : null;
    }

    saveState() {
        localStorage.setItem('frenchQuestState', JSON.stringify(this.state));
        this.notifyListeners();
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(cb => cb(this.state));
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
        this.state.lives = 3;
        this.saveState();
    }

    completeLevel(levelId, stars) {
        this.state.stars[levelId] = Math.max(this.state.stars[levelId] || 0, stars);
        this._tryUnlockNext(levelId);
        this.saveState();
    }

    completeVocab(levelId) {
        this.state.vocabCompleted = this.state.vocabCompleted || {};
        this.state.vocabCompleted[levelId] = true;
        this._tryUnlockNext(levelId);
        this.saveState();
    }

    isVocabCompleted(levelId) {
        return !!(this.state.vocabCompleted && this.state.vocabCompleted[levelId]);
    }

    saveMissedVocab(levelId, words) {
        this.state.vocabMissed = this.state.vocabMissed || {};
        this.state.vocabMissed[levelId] = words;
        this.saveState();
    }

    getMissedVocab(levelId) {
        return (this.state.vocabMissed && this.state.vocabMissed[levelId]) || [];
    }

    clearMissedVocab(levelId) {
        if (this.state.vocabMissed) {
            delete this.state.vocabMissed[levelId];
            this.saveState();
        }
    }

    isLevelBeaten(levelId) {
        return (this.state.stars[levelId] || 0) > 0;
    }

    _tryUnlockNext(levelId) {
        if (levelId >= 27) return;
        const levelBeaten = this.isLevelBeaten(levelId);
        const vocabDone = this.isVocabCompleted(levelId);
        if (levelBeaten && vocabDone && !this.state.unlockedLevels.includes(levelId + 1)) {
            this.state.unlockedLevels.push(levelId + 1);
        }
    }
}

export const gameState = new GameState();
