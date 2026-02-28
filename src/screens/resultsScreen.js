import { gameState } from '../engine/gameState.js';

export function renderResultsScreen(container, navigateTo, params) {
  const { levelId, success, reason } = params;

  let title, message, stars = 0;

  if (success) {
    if (gameState.state.lives === 3) stars = 3;
    else if (gameState.state.lives === 2) stars = 2;
    else stars = 1;

    gameState.completeLevel(levelId, stars);

    title = 'MISSION ACCOMPLISHED';
    message = `You've conquered Sector ${levelId}.`;
  } else {
    title = 'MISSION FAILED';
    if (reason === 'lives') message = 'Your ship sustained too much damage (lost all hearts).';
    if (reason === 'time') message = 'You ran out of time during the boss encounter!';
  }

  gameState.recoverLives();

  container.innerHTML = `
    <div class="results-screen fade-in text-center mx-auto" style="max-width: 500px">
      <div class="glass-panel pad-2 rounded">
        <h1 class="${success ? 'gradient-text text-glow' : 'error-text'}">${title}</h1>
        <p class="mb-2">${message}</p>
        
        ${success ? `
          <div class="stars big-stars mb-2">
            ${Array(3).fill(0).map((_, i) =>
    `<span class="star ${i < stars ? 'earned' : 'empty'}">★</span>`
  ).join('')}
          </div>
        ` : ''}

        <button id="map-btn" class="btn btn-primary w-100">RETURN TO GALAXY MAP</button>
      </div>
    </div>
  `;

  document.getElementById('map-btn').addEventListener('click', () => {
    navigateTo('map');
  });
}
