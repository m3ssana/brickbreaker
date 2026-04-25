import { LEADERBOARD } from './Constants.js';

/**
 * Thin async client for the leaderboard API.
 * Network errors are swallowed — the leaderboard must never break the game.
 */
export class Leaderboard {
  constructor() {
    this._cache = [];
    this._fetchPromise = null;
  }

  /** Kick off a background fetch. Call from Game.init() to warm the cache. */
  prefetch() {
    this._fetchPromise = this.fetchTop().then(scores => {
      this._cache = scores;
      return scores;
    });
    return this._fetchPromise;
  }

  /** Return latest top-5. Returns cached list immediately; resolves to refreshed list. */
  async fetchTop() {
    try {
      const res = await fetch(`${LEADERBOARD.apiBase}/scores`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this._cache = Array.isArray(data) ? data : [];
    } catch {
      // network/parse failure — return stale cache
    }
    return this._cache;
  }

  /** Current cached top-5 (synchronous). */
  getCached() {
    return this._cache;
  }

  /**
   * Returns the minimum score needed to make the top-5.
   * If there are fewer than 5 entries, any score qualifies.
   */
  qualifyingScore() {
    if (this._cache.length < 5) return 0;
    return this._cache[this._cache.length - 1].score;
  }

  /**
   * Submit a score. Returns { qualified: bool, scores: [...] }.
   * Returns { qualified: false, scores: cached } on network error.
   */
  async submit({ name, score, level }) {
    try {
      const res = await fetch(`${LEADERBOARD.apiBase}/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score, level })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this._cache = data.scores ?? this._cache;
      return data;
    } catch {
      return { qualified: false, scores: this._cache };
    }
  }
}
