import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';
import { checkVocabAnswer } from '../engine/answerUtils.js';
import { shuffle } from '../engine/shuffle.js';

const TARGET_CHUNK = 7;
const PASS_RATIO = 0.8;

// Even sets rather than fixed-size ones: 29 words split 8/7/7/7 instead of
// 7/7/7/7/1, which left a checkpoint with a single card to match.
function buildChunks(words) {
    const count = Math.max(1, Math.round(words.length / TARGET_CHUNK));
    const chunks = [];
    let start = 0;
    for (let i = 0; i < count; i++) {
        const size = Math.ceil((words.length - start) / (count - i));
        chunks.push(words.slice(start, start + size));
        start += size;
    }
    return chunks;
}

export function renderVocabularyScreen(container, navigateTo, params) {
    const levelId = params.levelId;
    const level = levels.find(l => l.id === levelId);

    if (!level || !level.vocabulary || level.vocabulary.length === 0) {
        navigateTo('map');
        return;
    }

    const fullVocab = level.vocabulary;
    const chunks = buildChunks(fullVocab);

    let currentChunkIndex = 0;
    let mode = 'learn'; // 'learn', 'chunk-check', 'final-test'
    let currentWordIndex = 0; // within chunk
    let testScore = 0;
    let shuffledVocab = []; // for final test
    let missedWords = []; // spaced repetition: words missed this session

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

    function wordsBeforeCurrentChunk() {
        return chunks.slice(0, currentChunkIndex).reduce((sum, c) => sum + c.length, 0);
    }

    function startFinalTest() {
        // Words missed on a previous attempt come first, then everything else.
        // They must be filtered out of the remainder or they would be asked
        // twice and inflate the score needed to pass.
        const prevMissed = gameState.getMissedVocab(levelId);
        const missedKeys = new Set(prevMissed.map(w => w.french));
        const rest = fullVocab.filter(w => !missedKeys.has(w.french));
        shuffledVocab = [...shuffle(prevMissed), ...shuffle(rest)];
        currentWordIndex = 0;
        testScore = 0;
        missedWords = [];
        mode = 'final-test';
    }

    function renderLearnMode() {
        const chunk = chunks[currentChunkIndex];
        const word = chunk[currentWordIndex];
        const totalProgress = (wordsBeforeCurrentChunk() + currentWordIndex + 1) / fullVocab.length * 100;

        container.innerHTML = `
            <div class="vocab-screen learn-mode fade-in max-w-500 mx-auto">
                <div class="boss-header mb-2 glass-panel p-1 text-center">
                    <h2 class="gradient-text">${level.planet} Supply Dock</h2>
                    <p>Training Set ${currentChunkIndex + 1} of ${chunks.length}</p>
                    <div class="progress-bar-container mt-1">
                        <div class="progress-bar" style="width: ${totalProgress}%"></div>
                    </div>
                </div>

                <div class="flashcard glass-panel p-2 text-center mb-2">
                    <div class="vocab-french mb-1">${word.french}</div>
                    <div class="vocab-english secondary-text">${word.english}</div>
                </div>

                <div class="controls d-flex gap-1">
                    <button id="prev-btn" class="btn btn-secondary w-100" ${currentWordIndex === 0 ? 'disabled' : ''}>PREV</button>
                    <button id="next-btn" class="btn btn-primary w-100">${currentWordIndex === chunk.length - 1 ? 'CHECKPOINT' : 'NEXT'}</button>
                </div>
            </div>
        `;

        container.querySelector('#next-btn').onclick = () => {
            if (currentWordIndex === chunk.length - 1) {
                mode = 'chunk-check';
                render();
            } else {
                currentWordIndex++;
                render();
            }
        };

        container.querySelector('#prev-btn').onclick = () => {
            if (currentWordIndex > 0) {
                currentWordIndex--;
                render();
            }
        };
    }

    function renderChunkCheckMode() {
        const chunk = chunks[currentChunkIndex];
        const pairs = chunk.map((w, i) => ({ ...w, id: String(i) }));
        const frenchOptions = shuffle(pairs);
        const englishOptions = shuffle(pairs);

        container.innerHTML = `
            <div class="vocab-screen check-mode fade-in max-w-600 mx-auto">
                <div class="boss-header mb-2 glass-panel p-1 text-center">
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
        let locked = false;

        const items = container.querySelectorAll('.match-item');
        items.forEach(item => {
            item.onclick = () => {
                if (locked || item.classList.contains('matched')) return;

                const type = item.dataset.type;
                const id = item.dataset.id;

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
                            locked = true;
                            container.querySelector('#check-feedback').innerHTML = '<div class="success-text">Sector Secured! Moving to next set...</div>';
                            setTimeout(() => {
                                if (currentChunkIndex === chunks.length - 1) {
                                    startFinalTest();
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
                        locked = true;
                        selected.french.el.classList.add('wrong-shake');
                        selected.english.el.classList.add('wrong-shake');
                        container.querySelector('#check-feedback').innerHTML = '<div class="error-text">Systems Mismatch! Retry Set.</div>';

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
                <div class="boss-header mb-2 glass-panel p-1 text-center">
                    <h2 class="danger-text">Final Flight Drill</h2>
                    <p>Translate all supplies to finish mission.</p>
                    <div class="progress-bar-container mt-1">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="glass-panel p-2 text-center mb-2">
                    <h3 class="mb-2">How do you say:</h3>
                    <div class="vocab-target mb-2 text-glow">${word.english}</div>

                    <input type="text" id="vocab-input" class="text-input mb-1" placeholder="Type in French..." autocomplete="off">
                    <button id="vocab-submit" class="btn btn-primary w-100">SUBMIT</button>
                    <div id="vocab-feedback" class="feedback-area hidden"></div>
                </div>
            </div>
        `;

        const inputEl = container.querySelector('#vocab-input');
        const submitBtn = container.querySelector('#vocab-submit');
        const feedbackEl = container.querySelector('#vocab-feedback');

        const submitAnswer = () => {
            // An empty submission is a stray Enter, not a wrong answer.
            if (!inputEl.value.trim()) return;
            const isCorrect = checkVocabAnswer(inputEl.value, word.french);

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
                missedWords.push(word);
                feedbackEl.innerHTML = `<div class="error-text">Incorrect. It is: <strong>${word.french}</strong></div>`;
                setTimeout(() => {
                    currentWordIndex++;
                    render();
                }, 2000);
            }
        };

        submitBtn.onclick = submitAnswer;
        inputEl.onkeypress = (e) => { if (e.key === 'Enter') submitAnswer(); };
        setTimeout(() => inputEl.focus(), 100);
    }

    function renderResults() {
        const needed = Math.ceil(shuffledVocab.length * PASS_RATIO);
        const passed = testScore >= needed;
        const xpGained = passed ? testScore * 5 : 0;

        if (passed) {
            gameState.addXP(xpGained);
            gameState.completeVocab(levelId);
            gameState.clearMissedVocab(levelId);
        } else {
            // Deduplicate missed words before saving (same word may appear from prev + this session)
            const seen = new Set();
            const unique = missedWords.filter(w => {
                if (seen.has(w.french)) return false;
                seen.add(w.french);
                return true;
            });
            if (unique.length > 0) gameState.saveMissedVocab(levelId, unique);
        }

        container.innerHTML = `
            <div class="vocab-results fade-in text-center max-w-500 mx-auto">
                <div class="glass-panel p-2 rounded">
                    <h2 class="${passed ? 'success-text' : 'error-text'}">${passed ? 'MISSION SUCCESS' : 'DRILL FAILED'}</h2>
                    <p class="mb-2">You mastered ${testScore} out of ${shuffledVocab.length} supplies.</p>

                    ${passed ? `
                        <div class="stat-pill mb-2 d-inline-block">
                            <span class="icon">⭐</span> +${xpGained} XP
                        </div>
                    ` : `
                        <div class="dock-prompt mb-2">
                            <p>You need ${needed} correct to secure the dock. The words you missed come first next time.</p>
                        </div>
                        <button id="retry-vocab" class="btn btn-primary w-100 mb-2 glow-effect">RUN DRILL AGAIN</button>
                    `}

                    <button id="finish-vocab" class="btn ${passed ? 'btn-primary' : 'btn-secondary'} w-100">RETURN TO GALAXY</button>
                </div>
            </div>
        `;

        if (!passed) {
            container.querySelector('#retry-vocab').onclick = () => {
                startFinalTest();
                render();
            };
        }

        container.querySelector('#finish-vocab').onclick = () => {
            navigateTo('map');
        };
    }

    render();
}
