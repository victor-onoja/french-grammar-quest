import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';

export function renderVocabularyScreen(container, navigateTo, params) {
    const levelId = params.levelId;
    const level = levels.find(l => l.id === levelId);
    const vocab = level.vocabulary;

    if (!vocab || vocab.length === 0) {
        navigateTo('map');
        return;
    }

    let mode = 'learn'; // 'learn' or 'test'
    let currentWordIndex = 0;
    let testScore = 0;
    let shuffledVocab = [];

    function render() {
        if (mode === 'learn') {
            renderLearnMode();
        } else {
            renderTestMode();
        }
    }

    function renderLearnMode() {
        const word = vocab[currentWordIndex];
        const progress = ((currentWordIndex + 1) / vocab.length) * 100;

        container.innerHTML = `
            <div class="vocab-screen learn-mode fade-in max-w-500 mx-auto">
                <div class="boss-header mb-2 glass-panel p-2 text-center">
                    <h2 class="gradient-text">${level.planet} Supply Dock</h2>
                    <p>Memorize these translations for your mission.</p>
                    <div class="progress-bar-container mt-1">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="flashcard glass-panel p-4 text-center mb-2" id="flashcard">
                    <div class="vocab-french mb-1">${word.french}</div>
                    <div class="vocab-english secondary-text">${word.english}</div>
                </div>

                <div class="controls d-flex gap-1">
                    <button id="prev-btn" class="btn btn-secondary w-100" ${currentWordIndex === 0 ? 'disabled' : ''}>PREV</button>
                    <button id="next-btn" class="btn btn-primary w-100">${currentWordIndex === vocab.length - 1 ? 'START DRILL' : 'NEXT'}</button>
                </div>
            </div>
        `;

        document.getElementById('next-btn').onclick = () => {
            if (currentWordIndex === vocab.length - 1) {
                mode = 'test';
                currentWordIndex = 0;
                shuffledVocab = [...vocab].sort(() => Math.random() - 0.5);
                render();
            } else {
                currentWordIndex++;
                render();
            }
        };

        document.getElementById('prev-btn').onclick = () => {
            if (currentWordIndex > 0) {
                currentWordIndex--;
                render();
            }
        };
    }

    function renderTestMode() {
        if (currentWordIndex >= shuffledVocab.length) {
            renderResults();
            return;
        }

        const word = shuffledVocab[currentWordIndex];
        const progress = (currentWordIndex / shuffledVocab.length) * 100;

        container.innerHTML = `
            <div class="vocab-screen test-mode fade-in max-w-500 mx-auto">
                <div class="boss-header mb-2 glass-panel p-2 text-center">
                    <h2 class="danger-text">Supply Drill</h2>
                    <div class="progress-bar-container mt-1">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="glass-panel p-4 text-center mb-2">
                    <h3 class="mb-2">How do you say:</h3>
                    <div class="vocab-target mb-2 text-glow">${word.english}</div>
                    
                    <input type="text" id="vocab-input" class="text-input mb-1" placeholder="Type in French..." autocomplete="off">
                    <button id="vocab-submit" class="btn btn-primary w-100">SUBMIT</button>
                    <div id="vocab-feedback" class="mt-1 hidden"></div>
                </div>
            </div>
        `;

        const inputEl = document.getElementById('vocab-input');
        const submitBtn = document.getElementById('vocab-submit');
        const feedbackEl = document.getElementById('vocab-feedback');

        const checkAnswer = () => {
            const val = inputEl.value.trim().toLowerCase();
            const correct = word.french.toLowerCase().replace(/[.,!]/g, '');
            const isCorrect = val === correct;

            inputEl.disabled = true;
            submitBtn.disabled = true;
            feedbackEl.classList.remove('hidden');

            if (isCorrect) {
                testScore++;
                feedbackEl.innerHTML = '<div class="success-text">Correct!</div>';
                setTimeout(() => {
                    currentWordIndex++;
                    render();
                }, 800);
            } else {
                feedbackEl.innerHTML = `<div class="error-text">Incorrect. It is: <strong>${word.french}</strong></div>`;
                setTimeout(() => {
                    currentWordIndex++;
                    render();
                }, 2000);
            }
        };

        submitBtn.onclick = checkAnswer;
        inputEl.onkeypress = (e) => { if (e.key === 'Enter') checkAnswer(); };
        setTimeout(() => inputEl.focus(), 100);
    }

    function renderResults() {
        const passed = testScore >= shuffledVocab.length * 0.8;
        const xpGained = testScore * 5;
        if (passed) gameState.addXP(xpGained);

        container.innerHTML = `
            <div class="vocab-results fade-in text-center max-w-500 mx-auto">
                <div class="glass-panel p-4">
                    <h2 class="${passed ? 'success-text' : 'error-text'}">${passed ? 'DRILL COMPLETED' : 'DRILL FAILED'}</h2>
                    <p class="mb-2">You mastered ${testScore} out of ${shuffledVocab.length} supplies.</p>
                    
                    <div class="stat-pill mb-2 d-inline-block">
                        <span class="icon">⭐</span> +${xpGained} XP
                    </div>

                    <button id="finish-vocab" class="btn btn-primary w-100">RETURN TO GALAXY</button>
                </div>
            </div>
        `;

        document.getElementById('finish-vocab').onclick = () => {
            navigateTo('map');
        };
    }

    render();
}
