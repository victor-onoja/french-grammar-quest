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
            stars: {}, // levelId -> 1,2,3
            streaks: 0
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
        if (!this.state.unlockedLevels.includes(levelId + 1) && levelId < 27) {
            this.state.unlockedLevels.push(levelId + 1);
        }
        this.saveState();
    }
}

export const gameState = new GameState();
