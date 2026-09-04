import { levels } from '../data/levels.js';

export function renderLessonScreen(container, navigateTo, params) {
  const levelId = params.levelId;
  const level = levels.find(l => l.id === levelId);

  if (!level) {
    container.innerHTML = '<p>Mission data corrupted.</p>';
    return;
  }

  container.innerHTML = `
    <div class="lesson-screen fade-in">
      <div class="glass-panel p-2 rounded mx-auto max-w-500">
        <h2 class="gradient-text mb-1">Planet ${level.planet}</h2>
        <h3 class="mb-2">${level.title}</h3>
        
        <div class="lesson-content text-left mb-3">
          ${level.lesson}
        </div>
        
        <button id="start-mission-btn" class="btn btn-primary w-100 glow-effect">ENGAGE EXERCISES</button>
      </div>
    </div>
  `;

  document.getElementById('start-mission-btn').addEventListener('click', () => {
    navigateTo('exercise', { levelId });
  });
}
