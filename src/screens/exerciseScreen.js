import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';
import { checkAnswer } from '../engine/answerUtils.js';

export function renderExerciseScreen(container, navigateTo, params) {
  const levelId = params.levelId;
  const level = levels.find(l => l.id === levelId);

  if (!level || !level.exercises) return;

  let currentExerciseIndex = 0;
  let sessionExercises = [...level.exercises];

  sessionExercises.forEach(ex => {
    if (ex.type === 'mcq') {
      const correctOption = ex.options[ex.answer];
      ex.displayOptions = [...ex.options].sort(() => Math.random() - 0.5);
      ex.correctDisplayIndex = ex.displayOptions.indexOf(correctOption);
    }
  });

  function renderCurrentExercise() {
    if (gameState.state.lives <= 0) {
      navigateTo('results', { levelId, success: false, reason: 'lives' });
      return;
    }

    if (currentExerciseIndex >= sessionExercises.length) {
      navigateTo('boss', { levelId });
      return;
    }

    const ex = sessionExercises[currentExerciseIndex];
    const progressPercent = (currentExerciseIndex / sessionExercises.length) * 100;

    container.innerHTML = `
      <div class="exercise-screen fade-in w-100 max-w-500 mx-auto">
        <div class="progress-bar-container mb-2">
          <div class="progress-bar" style="width: ${progressPercent}%"></div>
        </div>
        
        <div class="glass-panel pad-2 rounded mb-2 text-center">
          <h3 class="mb-2">${ex.question}</h3>
          <div id="interactive-area" class="mb-2"></div>
          <div id="feedback-area" class="feedback-area hidden"></div>
        </div>
      </div>
    `;

    const interactiveArea = document.getElementById('interactive-area');

    if (ex.type === 'mcq') {
      const grid = document.createElement('div');
      grid.className = 'options-grid';
      ex.displayOptions.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn text-left option-btn';
        btn.innerHTML = opt;
        btn.onclick = () => handleAnswer(idx === ex.correctDisplayIndex, btn);
        grid.appendChild(btn);
      });
      interactiveArea.appendChild(grid);
    }
    else if (ex.type === 'fill-blank' || ex.type === 'translation') {
      interactiveArea.innerHTML = `
        <input type="text" id="answer-input" class="text-input mb-1" placeholder="Type your answer..." autocomplete="off">
        <button id="submit-btn" class="btn btn-primary w-100">SUBMIT</button>
      `;

      const submitBtn = document.getElementById('submit-btn');
      const inputEl = document.getElementById('answer-input');

      const checkTypeAnswer = () => {
        handleAnswer(checkAnswer(inputEl.value, ex.answer), null, ex.answer);
      };

      submitBtn.onclick = checkTypeAnswer;
      inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkTypeAnswer();
      });
      setTimeout(() => inputEl.focus(), 100);
    }
  }

  function handleAnswer(isCorrect, selectedBtn, correctAnswerText = '') {
    const feedback = document.getElementById('feedback-area');
    feedback.classList.remove('hidden');

    document.querySelectorAll('.option-btn, .text-input, #submit-btn').forEach(el => {
      el.disabled = true;
      if (el.classList.contains('option-btn')) el.classList.add('disabled');
    });

    if (isCorrect) {
      if (selectedBtn) selectedBtn.classList.add('correct');
      feedback.innerHTML = `<div class="success-text">Correct! +10 XP</div>`;
      gameState.addXP(10);

      setTimeout(() => {
        currentExerciseIndex++;
        renderCurrentExercise();
      }, 1500);
    } else {
      if (selectedBtn) selectedBtn.classList.add('wrong');
      const ex = sessionExercises[currentExerciseIndex];
      const correctStr = Array.isArray(ex.answer) ? ex.answer[0] : (ex.type === 'mcq' ? ex.displayOptions[ex.correctDisplayIndex] : ex.answer);

      let hintHtml = ex.hint ? `<p class="hint-text text-sm">${ex.hint}</p>` : '';

      feedback.innerHTML = `
        <div class="error-text mb-1">Incorrect.</div>
        <div class="correction-box">Correct: <strong>${correctStr}</strong></div>
        ${hintHtml}
        <button id="next-btn" class="btn btn-primary mt-1">CONTINUE</button>
      `;

      sessionExercises.push({ ...ex });
      gameState.loseLife();

      document.getElementById('next-btn').onclick = () => {
        currentExerciseIndex++;
        renderCurrentExercise();
      };
    }
  }

  renderCurrentExercise();
}
