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

  /**
   * @param {object} opts
   * @param {string} [opts.title]
   * @param {string} [opts.body]
   * @param {string} [opts.button]
   * @param {Array<{label,value}>} [opts.stats]
   * @param {Array<{name,score,level}>} [opts.leaderboard]  — renders top-5 table
   * @param {{onSubmit: (name:string)=>void}} [opts.nameEntry]  — renders name input + submit
   */
  showOverlay({ title, body, button = 'Tap to Play', stats = null, leaderboard = null, nameEntry = null }) {
    const statHtml = stats
      ? `<div class="stat-row">${stats.map(s => `
          <div class="stat">
            <div class="stat-label">${s.label}</div>
            <div class="stat-value">${s.value}</div>
          </div>`).join('')}</div>`
      : '';

    const lbHtml = leaderboard && leaderboard.length
      ? `<div class="lb">
          <div class="lb-title">Top Scores</div>
          ${leaderboard.map((e, i) => `
            <div class="lb-row">
              <span class="lb-rank">${i + 1}</span>
              <span class="lb-name">${this.#esc(e.name)}</span>
              <span class="lb-score">${String(e.score).padStart(5, '0')}</span>
            </div>`).join('')}
        </div>`
      : '';

    const nameHtml = nameEntry
      ? `<div class="name-entry">
           <input id="player-name" class="name-input" type="text" maxlength="12"
             placeholder="Enter name…" autocomplete="off" spellcheck="false" />
           <button class="btn" id="start-btn">${button}</button>
         </div>`
      : `<button class="btn" id="start-btn">${button}</button>`;

    this.overlayEl.innerHTML = `
      ${title ? `<h2>${title}</h2>` : ''}
      ${body ? `<p>${body}</p>` : ''}
      ${statHtml}
      ${lbHtml}
      ${nameHtml}
      ${!nameEntry ? '<div class="hint">Drag or ← → to move • Tap or Space to launch</div>' : ''}
    `;

    this.overlayEl.classList.remove('hidden');
    this.startBtn = document.getElementById('start-btn');

    if (nameEntry) {
      const input = document.getElementById('player-name');
      input?.focus();
      // Enter key in the input also submits
      input?.addEventListener('keydown', e => {
        if (e.key === 'Enter') this.startBtn?.click();
      });
      this.startBtn?.addEventListener('click', () => {
        const name = input?.value.trim() || 'ANON';
        nameEntry.onSubmit(name);
      }, { once: true });
    }
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

  #esc(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
}
