import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';
import { checkAnswer } from '../engine/answerUtils.js';

export function renderBossScreen(container, navigateTo, params) {
    const levelId = params.levelId;
    const level = levels.find(l => l.id === levelId);

    if (!level) {
        container.innerHTML = '<p>Mission data corrupted.</p>';
        return;
    }

    const boss = level.boss;
    if (!boss) { navigateTo('results', { levelId, success: true }); return; }

    let timeLeft = boss.timeLimit;
    let currentQIndex = 0;
    let timerId = null;
    let feedbackTimer = null;
    let finished = false;

    // Every exit runs through here. Without it, the countdown reaching zero
    // navigates to the results screen while an answer's feedback timeout is
    // still pending — that timeout then repaints the battle over the results,
    // leaving the fight running with no clock and handing the player a win.
    const endBattle = (results) => {
        if (finished) return;
        finished = true;
        clearInterval(timerId);
        clearTimeout(feedbackTimer);
        navigateTo('results', results);
    };

    const updateTimerDisplay = () => {
        const timerDisplay = container.querySelector('.timer-display');
        if (timerDisplay) {
            timerDisplay.textContent = `${timeLeft}s`;
            if (timeLeft <= 10) timerDisplay.classList.add('danger', 'text-blink');
            else timerDisplay.classList.remove('danger', 'text-blink');
        }
    };

    function renderBattle() {
        if (finished) return;

        if (gameState.state.lives <= 0) {
            endBattle({ levelId, success: false, reason: 'lives' });
            return;
        }

        if (currentQIndex >= boss.questions.length) {
            endBattle({ levelId, success: true });
            return;
        }

        const q = boss.questions[currentQIndex];

        container.innerHTML = `
      <div class="boss-screen fade-in text-center mx-auto max-w-500">
        <div class="boss-header mb-2 glass-panel p-1">
            <h2 class="boss-title">${boss.intro}</h2>
            <div class="timer-display ${timeLeft <= 10 ? 'danger text-blink' : ''}">${timeLeft}s</div>
        </div>

        <div class="glass-panel p-2 rounded mb-2">
            <h3 class="mb-2">${q.question}</h3>

            <div id="boss-interaction">
               <input type="text" id="boss-input" class="text-input mb-1" placeholder="Type answer FAST..." autocomplete="off">
               <button id="boss-submit" class="btn btn-primary w-100">STRIKE</button>
            </div>
            <div id="boss-feedback" class="feedback-area hidden"></div>
        </div>
      </div>
    `;

        const inputEl = container.querySelector('#boss-input');
        const submitBtn = container.querySelector('#boss-submit');

        const handleBossAnswer = (isCorrect) => {
            const feedback = container.querySelector('#boss-feedback');
            feedback.classList.remove('hidden');
            inputEl.disabled = true;
            submitBtn.disabled = true;

            if (isCorrect) {
                container.querySelector('.boss-title').classList.add('shake');
                timeLeft = Math.min(timeLeft + 10, boss.timeLimit);
                updateTimerDisplay();
                feedback.innerHTML = '<div class="success-text">Direct Hit! +50 XP ⏱️ +10s</div>';
                gameState.addXP(50);
                feedbackTimer = setTimeout(() => {
                    currentQIndex++;
                    renderBattle();
                }, 1000);
            } else {
                const correctStr = Array.isArray(q.answer) ? q.answer[0] : q.answer;
                feedback.innerHTML = `<div class="error-text">Missed! Correct: ${correctStr}</div>`;
                gameState.loseLife();
                timeLeft = Math.max(0, timeLeft - 5);
                updateTimerDisplay();
                feedbackTimer = setTimeout(() => {
                    currentQIndex++;
                    renderBattle();
                }, 1500);
            }
        };

        const checkTypeAnswer = () => {
            // An empty submission is a stray Enter, not a wrong answer.
            if (!inputEl.value.trim()) return;
            handleBossAnswer(checkAnswer(inputEl.value, q.answer));
        };

        submitBtn.onclick = checkTypeAnswer;
        inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkTypeAnswer();
        });
        setTimeout(() => inputEl.focus(), 100);
    }

    function startTimer() {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                endBattle({ levelId, success: false, reason: 'time' });
            }
        }, 1000);
    }

    renderBattle();
    startTimer();
}
