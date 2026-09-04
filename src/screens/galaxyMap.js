import { levels, lastLevelId } from '../data/levels.js';
import { gameState } from '../engine/gameState.js';

export function renderGalaxyMap(container, navigateTo) {
  const { unlockedLevels, stars } = gameState.state;

  container.innerHTML = `
    <div class="galaxy-map text-center">
      <h1 class="gradient-text">Galaxie Française</h1>
      <p class="subtitle">Select a planetary mission.</p>
      <div class="planets-container"></div>
      <footer class="site-credit">
        <p>Lessons and vocabulary adapted from <em>Practice Makes Perfect: Complete French Grammar</em> by Annie Heminway (McGraw-Hill, 2008).</p>
        <p>An independent study project, not affiliated with or endorsed by the author or publisher.</p>
        <p><a href="privacy.html">Privacy</a> &middot; <a href="terms.html">Terms</a></p>
      </footer>
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
    const dockRequired = levelBeaten && !vocabDone && hasVocab && level.id < lastLevelId;
    const dockClass = vocabDone ? 'dock-done' : (dockRequired ? 'dock-required' : '');
    const dockIcon = vocabDone ? '✓' : '⚓';
    const dockTitle = vocabDone
      ? 'Supply Dock complete!'
      : (dockRequired ? 'Complete Supply Dock to unlock next sector!' : 'Supply Dock (Vocabulary)');

    const planetEl = document.createElement('div');
    planetEl.className = `planet-card glass-panel ${isUnlocked ? 'unlocked glow-effect' : 'locked'}`;

    // Staggered with margins, not transform: the hover rule animates transform
    // and would otherwise snap the card back to centre on mouseover.
    const stagger = '2.5rem';
    if (index % 2 === 0) planetEl.style.marginLeft = stagger;
    else planetEl.style.marginRight = stagger;

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
