import { gameState } from './engine/gameState.js';
import { renderGalaxyMap } from './screens/galaxyMap.js';
import { renderLessonScreen } from './screens/lessonScreen.js';
import { renderExerciseScreen } from './screens/exerciseScreen.js';
import { renderBossScreen } from './screens/bossScreen.js';
import { renderResultsScreen } from './screens/resultsScreen.js';
import { renderVocabularyScreen } from './screens/vocabularyScreen.js';

export function initApp(container) {
  const context = {
    currentScreen: 'map',
    params: {}
  };

  const navigateTo = (screen, params = {}) => {
    context.currentScreen = screen;
    context.params = params;
    render();
  };

  gameState.addListener(() => {
    updateHeader();
  });

  function updateHeader() {
    const xpDisplay = document.getElementById('xp-display');
    const livesDisplay = document.getElementById('lives-display');
    if (xpDisplay) xpDisplay.textContent = `${gameState.state.xp} XP`;
    if (livesDisplay) livesDisplay.textContent = gameState.state.lives;
  }

  function renderHeader() {
    return `
      <header class="app-header glass-panel">
        <button class="icon-btn" id="home-btn">🪐</button>
        <div class="stat-pill"><span class="icon">⭐</span> <span id="xp-display">${gameState.state.xp} XP</span></div>
        <div class="stat-pill"><span class="icon">❤️</span> <span id="lives-display">${gameState.state.lives}</span></div>
      </header>
    `;
  }

  function render() {
    container.innerHTML = renderHeader();

    const main = document.createElement('main');
    main.className = 'app-main';
    const contentContainer = document.createElement('div');
    contentContainer.className = 'screen-container';
    main.appendChild(contentContainer);
    container.appendChild(main);

    document.getElementById('home-btn').addEventListener('click', () => {
      if (context.currentScreen !== 'boss') navigateTo('map');
    });

    switch (context.currentScreen) {
      case 'map': renderGalaxyMap(contentContainer, navigateTo); break;
      case 'lesson': renderLessonScreen(contentContainer, navigateTo, context.params); break;
      case 'exercise': renderExerciseScreen(contentContainer, navigateTo, context.params); break;
      case 'boss': renderBossScreen(contentContainer, navigateTo, context.params); break;
      case 'vocab': renderVocabularyScreen(contentContainer, navigateTo, context.params); break;
      case 'results': renderResultsScreen(contentContainer, navigateTo, context.params); break;
      default: contentContainer.innerHTML = 'Screen not found';
    }
  }

  render();
}
