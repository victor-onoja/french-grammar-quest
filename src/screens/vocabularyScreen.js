import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';
import { checkAnswer } from '../engine/answerUtils.js';

export function renderVocabularyScreen(container, navigateTo, params) {
    const levelId = params.levelId;
    const level = levels.find(l => l.id === levelId);
    const fullVocab = level.vocabulary;

    if (!fullVocab || fullVocab.length === 0) {
        navigateTo('map');
        return;
    }

    const CHUNK_SIZE = 7;
    const chunks = [];
    for (let i = 0; i < fullVocab.length; i += CHUNK_SIZE) {
        chunks.push(fullVocab.slice(i, i + CHUNK_SIZE));
    }

    let currentChunkIndex = 0;
    let mode = 'learn'; // 'learn', 'chunk-check', 'final-test'
    let currentWordIndex = 0; // within chunk
    let testScore = 0;
    let shuffledVocab = []; // for final test

    function render() {
        container.innerHTML = ''; // Clear
        if (mode === 'learn') {
            renderLearnMode();
        } else if (mode === 'chunk-check') {
            renderChunkCheckMode();
        } else {
            renderFinalTestMode();
        }
    }

    function renderLearnMode() {
        const chunk = chunks[currentChunkIndex];
        const word = chunk[currentWordIndex];
        const totalProgress = ((currentChunkIndex * CHUNK_SIZE) + currentWordIndex + 1) / fullVocab.length * 100;

        container.innerHTML = `
            <div class="vocab-screen learn-mode fade-in max-w-500 mx-auto">
                <div class="boss-header mb-2 glass-panel p-2 text-center">
                    <h2 class="gradient-text">${level.planet} Supply Dock</h2>
                    <p>Training Set ${currentChunkIndex + 1} of ${chunks.length}</p>
                    <div class="progress-bar-container mt-1">
                        <div class="progress-bar" style="width: ${totalProgress}%"></div>
                    </div>
                </div>

                <div class="flashcard glass-panel p-4 text-center mb-2">
                    <div class="vocab-french mb-1">${word.french}</div>
                    <div class="vocab-english secondary-text">${word.english}</div>
                </div>

                <div class="controls d-flex gap-1">
                    <button id="prev-btn" class="btn btn-secondary w-100" ${currentWordIndex === 0 ? 'disabled' : ''}>PREV</button>
                    <button id="next-btn" class="btn btn-primary w-100">${currentWordIndex === chunk.length - 1 ? 'CHECKPOINT' : 'NEXT'}</button>
                </div>
            </div>
        `;

        document.getElementById('next-btn').onclick = () => {
            if (currentWordIndex === chunk.length - 1) {
                mode = 'chunk-check';
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

    function renderChunkCheckMode() {
        const chunk = chunks[currentChunkIndex];
        // For matching game, we need pairs
        const pairs = chunk.map(w => ({ ...w, id: Math.random() }));
        const frenchOptions = [...pairs].sort(() => Math.random() - 0.5);
        const englishOptions = [...pairs].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="vocab-screen check-mode fade-in max-w-600 mx-auto">
                <div class="boss-header mb-2 glass-panel p-2 text-center">
                    <h2 class="primary-cyan-text">Checkpoint Challenge</h2>
                    <p>Match the pairs to secure this sector.</p>
                </div>

                <div class="matching-grid">
                    <div class="matching-column" id="french-cols">
                        ${frenchOptions.map(w => `<div class="match-item glass-panel" data-id="${w.id}" data-type="french">${w.french}</div>`).join('')}
                    </div>
                    <div class="matching-column" id="english-cols">
                        ${englishOptions.map(w => `<div class="match-item glass-panel" data-id="${w.id}" data-type="english">${w.english}</div>`).join('')}
                    </div>
                </div>
                
                <div id="check-feedback" class="mt-2 text-center h-2"></div>
            </div>
        `;

        let selected = { french: null, english: null };
        let matchesFound = 0;

        const items = container.querySelectorAll('.match-item');
        items.forEach(item => {
            item.onclick = () => {
                const type = item.dataset.type;
                const id = item.dataset.id;

                if (item.classList.contains('matched')) return;

                // Deselect current of same type
                container.querySelectorAll(`.match-item[data-type="${type}"]`).forEach(el => el.classList.remove('selected'));
                
                item.classList.add('selected');
                selected[type] = { id, el: item };

                if (selected.french && selected.english) {
                    if (selected.french.id === selected.english.id) {
                        // Match!
                        selected.french.el.classList.add('matched');
                        selected.english.el.classList.add('matched');
                        selected.french.el.classList.remove('selected');
                        selected.english.el.classList.remove('selected');
                        selected.french = null;
                        selected.english = null;
                        matchesFound++;

                        if (matchesFound === chunk.length) {
                            document.getElementById('check-feedback').innerHTML = '<div class="success-text">Sector Secured! Moving to next set...</div>';
                            setTimeout(() => {
                                if (currentChunkIndex === chunks.length - 1) {
                                    mode = 'final-test';
                                    shuffledVocab = [...fullVocab].sort(() => Math.random() - 0.5);
                                    currentWordIndex = 0;
                                } else {
                                    currentChunkIndex++;
                                    currentWordIndex = 0;
                                    mode = 'learn';
                                }
                                render();
                            }, 1500);
                        }
                    } else {
                        // Wrong Match
                        const f = selected.french.el;
                        const e = selected.english.el;
                        f.classList.add('wrong-shake');
                        e.classList.add('wrong-shake');
                        document.getElementById('check-feedback').innerHTML = '<div class="error-text">Systems Mismatch! Retry Set.</div>';
                        
                        setTimeout(() => {
                            // Back to learn mode for this chunk
                            mode = 'learn';
                            currentWordIndex = 0;
                            render();
                        }, 1200);
                    }
                }
            };
        });
    }

    function renderFinalTestMode() {
        if (currentWordIndex >= shuffledVocab.length) {
            renderResults();
            return;
        }

        const word = shuffledVocab[currentWordIndex];
        const progress = (currentWordIndex / shuffledVocab.length) * 100;

        container.innerHTML = `
            <div class="vocab-screen test-mode fade-in max-w-500 mx-auto">
                <div class="boss-header mb-2 glass-panel p-2 text-center">
                    <h2 class="danger-text">Final Flight Drill</h2>
                    <p>Translate all supplies to finish mission.</p>
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

        const checkAnswer_ = () => {
            const isCorrect = checkAnswer(inputEl.value, word.french);

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

        submitBtn.onclick = checkAnswer_;
        inputEl.onkeypress = (e) => { if (e.key === 'Enter') checkAnswer_(); };
        setTimeout(() => inputEl.focus(), 100);
    }

    function renderResults() {
        const passed = testScore >= shuffledVocab.length * 0.8;
        const xpGained = testScore * 5;
        if (passed) {
            gameState.addXP(xpGained);
            gameState.completeVocab(levelId);
        }

        container.innerHTML = `
            <div class="vocab-results fade-in text-center max-w-500 mx-auto">
                <div class="glass-panel p-4">
                    <h2 class="${passed ? 'success-text' : 'error-text'}">${passed ? 'MISSION SUCCESS' : 'DRILL FAILED'}</h2>
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
