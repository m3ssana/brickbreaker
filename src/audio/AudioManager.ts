/**
 * Procedural Web Audio API — zero audio assets.
 * Supports spatial audio via PannerNode and doppler pitch shifting.
 */
export class AudioManager {
  private _ctx: AudioContext | null = null
  private _master: GainNode | null = null
  private _vol = 0.5
  get volume() { return this._vol }
  set volume(v: number) {
    this._vol = Math.max(0, Math.min(1, v))
    if (this._master) this._master.gain.value = this._vol
  }

  // Listener position (synced from camera/paddle each frame)
  private _listenerX = 0
  private _listenerY = 7
  private _listenerZ = 22

  private _ensure(): AudioContext {
    if (!this._ctx) {
      this._ctx = new AudioContext()
      this._master = this._ctx.createGain()
      this._master.gain.value = this._vol
      this._master.connect(this._ctx.destination)
    }
    return this._ctx
  }

  /** Update listener position to match the camera. */
  setListenerPosition(x: number, y: number, z: number) {
    this._listenerX = x; this._listenerY = y; this._listenerZ = z
    if (!this._ctx) return
    const l = this._ctx.listener
    if (l.positionX) {
      l.positionX.setValueAtTime(x, this._ctx.currentTime)
      l.positionY.setValueAtTime(y, this._ctx.currentTime)
      l.positionZ.setValueAtTime(z, this._ctx.currentTime)
    }
  }

  /** Create a PannerNode positioned at (x,y,z) in the arena. */
  private _panner(x: number, y: number, z: number): PannerNode {
    const ctx     = this._ensure()
    const panner  = ctx.createPanner()
    panner.panningModel  = 'HRTF'
    panner.distanceModel = 'inverse'
    panner.refDistance   = 5
    panner.maxDistance   = 40
    panner.rolloffFactor = 1
    panner.positionX.setValueAtTime(x, ctx.currentTime)
    panner.positionY.setValueAtTime(y, ctx.currentTime)
    panner.positionZ.setValueAtTime(z, ctx.currentTime)
    panner.connect(this._master!)
    return panner
  }

  private _destination(x?: number, y?: number, z?: number): AudioNode {
    if (x !== undefined && y !== undefined && z !== undefined) return this._panner(x, y, z)
    const ctx = this._ensure()
    const g = ctx.createGain()
    g.connect(this._master!)
    return g
  }

  private _tone(
    freq: number, type: OscillatorType,
    attack: number, decay: number, vol: number,
    pitchEnd?: number,
    dest?: AudioNode
  ) {
    const ctx = this._ensure()
    const osc = ctx.createOscillator()
    const g   = ctx.createGain()
    osc.connect(g)
    g.connect(dest ?? this._master!)
    osc.type = type
    const t = ctx.currentTime
    osc.frequency.setValueAtTime(freq, t)
    if (pitchEnd !== undefined) osc.frequency.exponentialRampToValueAtTime(pitchEnd, t + decay)
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(vol, t + attack)
    g.gain.exponentialRampToValueAtTime(0.001, t + attack + decay)
    osc.start(t); osc.stop(t + attack + decay + 0.02)
  }

  private _noise(durationSec: number, filterFreq: number, vol: number, dest?: AudioNode) {
    const ctx = this._ensure()
    const len = Math.ceil(ctx.sampleRate * durationSec)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = ctx.createBufferSource(); src.buffer = buf
    const flt = ctx.createBiquadFilter(); flt.type = 'bandpass'; flt.frequency.value = filterFreq; flt.Q.value = 1.5
    const g = ctx.createGain()
    src.connect(flt); flt.connect(g)
    g.connect(dest ?? this._master!)
    g.gain.setValueAtTime(vol, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec)
    src.start()
  }

  // ── Sound events ─────────────────────────────────────────────────────────────

  paddleHit() {
    this._tone(900, 'sine', 0.002, 0.08, 0.18)
    this._tone(1400, 'triangle', 0.001, 0.04, 0.08)
  }

  brickBreak(row = 0, x?: number, y?: number, z?: number) {
    const freq = 800 + row * 120
    const dest = (x !== undefined) ? this._panner(x, y ?? 5, z ?? -10) : undefined
    this._noise(0.09, freq, 0.22, dest)
    this._tone(freq * 0.6, 'sawtooth', 0.001, 0.07, 0.12, freq * 0.2, dest)
  }

  armoredHit(x?: number, y?: number, z?: number) {
    const dest = (x !== undefined) ? this._panner(x, y ?? 5, z ?? -10) : undefined
    this._tone(300, 'square', 0.001, 0.12, 0.15, 250, dest)
    this._noise(0.06, 1200, 0.1, dest)
  }

  explosion(x?: number, y?: number, z?: number) {
    const dest = (x !== undefined) ? this._panner(x, y ?? 5, z ?? -10) : undefined
    this._tone(80, 'sawtooth', 0.005, 0.5, 0.4, 30, dest)
    this._tone(55, 'sine', 0.01, 0.8, 0.3, undefined, dest)
    this._noise(0.3, 500, 0.35, dest)
  }

  /** Staggered booms for chain explosions — each link fires a boom with a small delay. */
  chainExplosion(chainLength: number, x?: number, y?: number, z?: number) {
    for (let i = 0; i < Math.min(chainLength, 5); i++) {
      setTimeout(() => this.explosion(x, y, z), i * 80)
    }
  }

  ballLost() {
    this._tone(440, 'sine', 0.005, 0.9, 0.3, 110)
    this._tone(330, 'sine', 0.01, 0.6, 0.15, 90)
  }

  levelClear() {
    const notes = [523, 659, 784, 1047, 1319]
    notes.forEach((f, i) => setTimeout(() => this._tone(f, 'triangle', 0.01, 0.2, 0.25), i * 90))
  }

  comboMilestone(combo: number) {
    const f = 400 + Math.min(combo, 40) * 20
    this._tone(f, 'square', 0.004, 0.06, 0.15)
    this._tone(f * 1.5, 'sine', 0.002, 0.05, 0.08)
  }

  menuSelect() { this._tone(660, 'sine', 0.003, 0.07, 0.12) }

  /** Pleasant ascending chime — troll brick healed neighbours. */
  trollHeal() {
    const notes = [523, 659, 784, 1047]  // C E G C (major arpeggio)
    notes.forEach((f, i) => setTimeout(() => this._tone(f, 'triangle', 0.01, 0.15, 0.18), i * 60))
  }

  /**
   * Apply doppler pitch shift to paddle-hit sound based on ball speed.
   * Higher speed → higher pitch.
   */
  paddleHitWithDoppler(ballSpeed: number) {
    const baseFreq  = 900
    const maxSpeed  = 25
    const pitchMult = 1 + (ballSpeed / maxSpeed) * 0.5  // up to 1.5× pitch at max speed
    this._tone(baseFreq * pitchMult, 'sine', 0.002, 0.08, 0.18)
    this._tone(1400 * pitchMult, 'triangle', 0.001, 0.04, 0.08)
  }
}
