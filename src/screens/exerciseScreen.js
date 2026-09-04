import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';
import { checkAnswer } from '../engine/answerUtils.js';
import { shuffle } from '../engine/shuffle.js';

export function renderExerciseScreen(container, navigateTo, params) {
  const levelId = params.levelId;
  const level = levels.find(l => l.id === levelId);

  if (!level || !level.exercises) {
    container.innerHTML = '<p>Mission data corrupted.</p>';
    return;
  }

  // A level attempt is a fresh run: hearts spent on an earlier sector (or on an
  // attempt the player walked out of) must not cap the stars available here,
  // since the star rating is derived from the hearts left at the end.
  gameState.recoverLives();

  let currentExerciseIndex = 0;
  // Copy each exercise: display state is written onto these objects, and
  // `level.exercises` is shared module data that would otherwise be mutated.
  let sessionExercises = level.exercises.map(ex => ({ ...ex }));

  function prepareOptions(ex) {
    if (ex.type !== 'mcq' || ex.displayOptions) return;
    const correctOption = ex.options[ex.answer];
    ex.displayOptions = shuffle(ex.options);
    ex.correctDisplayIndex = ex.displayOptions.indexOf(correctOption);
  }

  const ruleHtml = level.rule ? `
    <details class="rule-card glass-panel mb-2">
      <summary class="rule-summary">📖 Grammar Rule</summary>
      <ul class="rule-list">
        ${level.rule.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </details>
  ` : '';

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
    prepareOptions(ex);
    const progressPercent = (currentExerciseIndex / sessionExercises.length) * 100;

    container.innerHTML = `
      <div class="exercise-screen fade-in w-100 max-w-500 mx-auto">
        <div class="progress-bar-container mb-2">
          <div class="progress-bar" style="width: ${progressPercent}%"></div>
        </div>
        ${ruleHtml}
        <div class="glass-panel p-2 rounded mb-2 text-center">
          <h3 class="mb-2">${ex.question}</h3>
          <div id="interactive-area" class="mb-2"></div>
          <div id="feedback-area" class="feedback-area hidden"></div>
        </div>
      </div>
    `;

    const interactiveArea = container.querySelector('#interactive-area');

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

      const submitBtn = container.querySelector('#submit-btn');
      const inputEl = container.querySelector('#answer-input');

      const checkTypeAnswer = () => {
        // An empty submission is a stray Enter, not a wrong answer.
        if (!inputEl.value.trim()) return;
        handleAnswer(checkAnswer(inputEl.value, ex.answer), null);
      };

      submitBtn.onclick = checkTypeAnswer;
      inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkTypeAnswer();
      });
      setTimeout(() => inputEl.focus(), 100);
    }
  }

  function handleAnswer(isCorrect, selectedBtn) {
    const feedback = container.querySelector('#feedback-area');
    feedback.classList.remove('hidden');

    container.querySelectorAll('.option-btn, .text-input, #submit-btn').forEach(el => {
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
      const correctStr = ex.type === 'mcq'
        ? ex.displayOptions[ex.correctDisplayIndex]
        : (Array.isArray(ex.answer) ? ex.answer[0] : ex.answer);

      let hintHtml = ex.hint ? `<p class="hint-text text-sm">${ex.hint}</p>` : '';
      let explanationHtml = ex.explanation ? `<p class="explanation-text text-sm mt-1">💡 ${ex.explanation}</p>` : '';

      feedback.innerHTML = `
        <div class="error-text mb-1">Incorrect.</div>
        <div class="correction-box">Correct: <strong>${correctStr}</strong></div>
        ${hintHtml}
        ${explanationHtml}
        <button id="next-btn" class="btn btn-primary mt-1">CONTINUE</button>
      `;

      // Re-ask it later, without the shuffle it was just shown in.
      const retry = { ...ex };
      delete retry.displayOptions;
      delete retry.correctDisplayIndex;
      sessionExercises.push(retry);
      gameState.loseLife();

      container.querySelector('#next-btn').onclick = () => {
        currentExerciseIndex++;
        renderCurrentExercise();
      };
    }
  }

  renderCurrentExercise();
}
