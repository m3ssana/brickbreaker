import { STARTING_LIVES } from './Constants.js';

export class HUD {
  constructor() {
    this.scoreEl = document.getElementById('score');
    this.levelEl = document.getElementById('level');
    this.livesEl = document.getElementById('lives');
    this.toastEl = document.getElementById('toast');
    this.overlayEl = document.getElementById('overlay');
    this.startBtn = document.getElementById('start-btn');

    this._toastTimer = null;
  }

  setScore(n) {
    this.scoreEl.textContent = String(n).padStart(5, '0');
  }

  setLevel(n) {
    this.levelEl.textContent = String(n);
  }

  setLives(n, max = STARTING_LIVES) {
    const pips = [];
    for (let i = 0; i < max; i++) {
      pips.push(`<span class="life-pip ${i < n ? '' : 'spent'}"></span>`);
    }
    this.livesEl.innerHTML = pips.join('');
  }

  showOverlay({ title, body, button = 'Tap to Play', stats = null }) {
    const stat = stats
      ? `<div class="stat-row">${stats.map(s => `
          <div class="stat">
            <div class="stat-label">${s.label}</div>
            <div class="stat-value">${s.value}</div>
          </div>`).join('')}</div>`
      : '';
    this.overlayEl.innerHTML = `
      ${title ? `<h1>${title}</h1>` : ''}
      ${body ? `<p>${body}</p>` : ''}
      ${stat}
      <button class="btn" id="start-btn">${button}</button>
      <div class="hint">Drag or ← → to move • Tap or Space to launch</div>
    `;
    this.overlayEl.classList.remove('hidden');
    this.startBtn = document.getElementById('start-btn');
  }

  hideOverlay() {
    this.overlayEl.classList.add('hidden');
  }

  showToast(text, ms = 1100) {
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, ms);
  }

  bindStart(handler) {
    if (this.startBtn) this.startBtn.addEventListener('click', handler, { once: true });
  }
}
