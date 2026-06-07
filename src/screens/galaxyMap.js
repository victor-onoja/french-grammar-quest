import { levels } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';

export function renderGalaxyMap(container, navigateTo) {
  const { unlockedLevels, stars } = gameState.state;

  container.innerHTML = `
    <div class="galaxy-map text-center">
      <h1 class="gradient-text">Galaxie Française</h1>
      <p class="subtitle">Select a planetary mission.</p>
      <div class="planets-container"></div>
    </div>
  `;

  const planetsContainer = container.querySelector('.planets-container');

  levels.forEach((level, index) => {
    const isUnlocked = unlockedLevels.includes(level.id);
    const starCount = stars[level.id] || 0;
    const levelBeaten = gameState.isLevelBeaten(level.id);
    const vocabDone = gameState.isVocabCompleted(level.id);
    const hasVocab = level.vocabulary && level.vocabulary.length > 0;

    // Dock state: required (beaten but vocab not done), done, or default
    const dockRequired = levelBeaten && !vocabDone && hasVocab && level.id < 27;
    const dockClass = vocabDone ? 'dock-done' : (dockRequired ? 'dock-required' : '');
    const dockIcon = vocabDone ? '✓' : '⚓';
    const dockTitle = vocabDone
      ? 'Supply Dock complete!'
      : (dockRequired ? 'Complete Supply Dock to unlock next sector!' : 'Supply Dock (Vocabulary)');

    const planetEl = document.createElement('div');
    planetEl.className = `planet-card glass-panel ${isUnlocked ? 'unlocked glow-effect' : 'locked'}`;

    const offset = (index % 2 === 0) ? '20px' : '-20px';
    planetEl.style.transform = `translateX(${offset})`;

    planetEl.innerHTML = `
      <div class="planet-icon">${isUnlocked ? '🌍' : '🔒'}</div>
      <div class="planet-info">
        <h3>Lv ${level.id}: ${level.planet}</h3>
        <p>${level.title}</p>
        <div class="stars">
          ${Array(3).fill(0).map((_, i) => `<span class="star ${i < starCount ? 'earned' : 'empty'}">★</span>`).join('')}
        </div>
      </div>
      ${isUnlocked && hasVocab ? `
        <div class="planet-actions">
          <button class="btn btn-sm dock-btn ${dockClass}" title="${dockTitle}">${dockIcon}</button>
        </div>
      ` : ''}
    `;

    if (isUnlocked) {
      planetEl.addEventListener('click', (e) => {
        if (e.target.closest('.dock-btn')) {
          navigateTo('vocab', { levelId: level.id });
        } else {
          navigateTo('lesson', { levelId: level.id });
        }
      });
      planetEl.style.cursor = 'pointer';
    }

    planetsContainer.appendChild(planetEl);
  });
}
