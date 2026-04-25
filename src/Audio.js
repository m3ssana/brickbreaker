/**
 * Synthesised SFX using the WebAudio API. No assets, no network.
 * iOS Safari/Chrome require the AudioContext to be created/resumed
 * inside a user gesture — call unlock() from a tap handler.
 */
export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return;
    this.ctx = new Ctor();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);
  }

  setMuted(m) { this.muted = m; }

  #env(node, attack, decay, peak = 1, sustain = 0) {
    const t = this.ctx.currentTime;
    node.gain.cancelScheduledValues(t);
    node.gain.setValueAtTime(0.0001, t);
    node.gain.exponentialRampToValueAtTime(peak, t + attack);
    node.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain), t + attack + decay);
    return t + attack + decay;
  }

  #beep(freq, dur, type = 'square', peak = 0.4, slide = 0) {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    if (slide) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), this.ctx.currentTime + dur);
    }
    osc.connect(gain).connect(this.master);
    this.#env(gain, 0.005, dur, peak, 0.0001);
    osc.start();
    osc.stop(this.ctx.currentTime + dur + 0.05);
  }

  paddleHit() {
    if (!this.ctx) return;
    this.#beep(440 + Math.random() * 60, 0.06, 'square', 0.32);
  }

  wallHit() {
    if (!this.ctx) return;
    this.#beep(220 + Math.random() * 30, 0.05, 'triangle', 0.22);
  }

  brickHit(broke) {
    if (!this.ctx) return;
    if (broke) {
      // Crunch: short noise burst + descending square
      const noise = this.#noiseBurst(0.16, 0.5);
      this.#beep(660, 0.09, 'sawtooth', 0.32, -300);
      noise.connect(this.master);
    } else {
      this.#beep(520, 0.05, 'square', 0.25);
    }
  }

  loseLife() {
    if (!this.ctx) return;
    this.#beep(220, 0.18, 'sawtooth', 0.4, -160);
    setTimeout(() => this.#beep(120, 0.4, 'sawtooth', 0.35, -80), 90);
  }

  levelClear() {
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => setTimeout(() => this.#beep(f, 0.15, 'triangle', 0.35), i * 90));
  }

  launch() {
    if (!this.ctx) return;
    this.#beep(330, 0.12, 'square', 0.3, 220);
  }

  #noiseBurst(dur, peak) {
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const gain = this.ctx.createGain();
    gain.gain.value = peak;
    src.connect(gain);
    src.start();
    return gain;
  }
}
