/**
 * MusicSystem — layered procedural music using Web Audio oscillators.
 *
 * Layers:
 *   drums   — always on when active (filtered noise rhythm)
 *   bass    — on when game is active
 *   lead    — on when combo ≥ 5
 *   choir   — on when combo ≥ 15
 *
 * Tempo BPM scales with ball speed: 90 BPM (speed×1.0) → 140 BPM (speed×1.6+).
 */
export class MusicSystem {
  private _ctx: AudioContext | null = null
  private _master: GainNode | null = null
  private _active = false
  private _started = false
  private _combo = 0
  private _speedMult = 1.0
  private _vol = 0.35

  // Layer gain nodes
  private _drumGain:  GainNode | null = null
  private _bassGain:  GainNode | null = null
  private _leadGain:  GainNode | null = null
  private _choirGain: GainNode | null = null

  // Oscillators (recreated each start)
  private _bassOsc:  OscillatorNode | null = null
  private _leadOsc:  OscillatorNode | null = null
  private _choirOsc: OscillatorNode | null = null
  private _drumOsc:  OscillatorNode | null = null

  get volume() { return this._vol }
  set volume(v: number) {
    this._vol = Math.max(0, Math.min(1, v))
    if (this._master) this._master.gain.value = this._vol
  }

  start() {
    if (this._started) return
    this._started = true
    try {
      this._ctx = new AudioContext()
      this._master = this._ctx.createGain()
      this._master.gain.value = this._vol
      this._master.connect(this._ctx.destination)
      this._buildLayers()
    } catch { /* no audio support */ }
  }

  stop() {
    this._stopOscillators()
    this._started = false
  }

  /** Call when game becomes active (playing) or inactive (menu/pause). */
  setActive(active: boolean) {
    if (!this._ctx || !this._master) return
    this._active = active
    const t = this._ctx.currentTime
    this._fadeGain(this._drumGain, active ? 0.4 : 0, t)
    this._fadeGain(this._bassGain, active ? 0.3 : 0, t)
    this._applyLayerGains()
  }

  setCombo(combo: number) {
    this._combo = combo
    this._applyLayerGains()
  }

  /** ballSpeedMultiplier from level def (1.0–1.6) */
  setBallSpeed(mult: number) {
    this._speedMult = mult
    if (!this._ctx) return
    const bpm = 90 + (mult - 1.0) / 0.6 * 50  // 90–140 BPM
    const beatHz = bpm / 60
    if (this._drumOsc) this._drumOsc.frequency.value = beatHz * 2
    if (this._bassOsc) this._bassOsc.frequency.value = 55 + (mult - 1) * 20 // A1–D2 ish
  }

  // ── Event stingers ────────────────────────────────────────────────────────────

  /** Sad descending wah-wah on ball lost (~1.2 s) */
  stingBallLost() {
    const ctx = this._ctx; if (!ctx) return
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(this._master ?? ctx.destination)
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(220, t)
    osc.frequency.linearRampToValueAtTime(110, t + 0.4)
    osc.frequency.linearRampToValueAtTime(55, t + 1.0)
    gain.gain.setValueAtTime(0.18, t)
    gain.gain.linearRampToValueAtTime(0, t + 1.2)
    osc.start(t); osc.stop(t + 1.2)
  }

  /** Bass drop on explosive chain: LFO-swept low-pass over 0.5 s */
  stingBassDrop() {
    const ctx = this._ctx; if (!ctx) return
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    const filter = ctx.createBiquadFilter()
    const gain = ctx.createGain()
    osc.connect(filter); filter.connect(gain); gain.connect(this._master ?? ctx.destination)
    osc.type = 'sawtooth'; osc.frequency.value = 55
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(4000, t)
    filter.frequency.linearRampToValueAtTime(80, t + 0.5)
    gain.gain.setValueAtTime(0.25, t)
    gain.gain.linearRampToValueAtTime(0, t + 0.6)
    osc.start(t); osc.stop(t + 0.6)
  }

  /** Ascending major arpeggio on level clear */
  stingVictory() {
    const ctx = this._ctx; if (!ctx) return
    const notes = [261.63, 329.63, 392, 523.25] // C4 E4 G4 C5
    notes.forEach((freq, i) => {
      const t = ctx.currentTime + i * 0.12
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(this._master ?? ctx.destination)
      osc.type = 'triangle'; osc.frequency.value = freq
      gain.gain.setValueAtTime(0.2, t)
      gain.gain.linearRampToValueAtTime(0, t + 0.35)
      osc.start(t); osc.stop(t + 0.35)
    })
  }

  // ── Private ───────────────────────────────────────────────────────────────────

  private _buildLayers() {
    const ctx = this._ctx!
    this._drumGain  = ctx.createGain(); this._drumGain.gain.value  = 0
    this._bassGain  = ctx.createGain(); this._bassGain.gain.value  = 0
    this._leadGain  = ctx.createGain(); this._leadGain.gain.value  = 0
    this._choirGain = ctx.createGain(); this._choirGain.gain.value = 0
    for (const g of [this._drumGain, this._bassGain, this._leadGain, this._choirGain]) {
      g.connect(this._master!)
    }

    // Drum layer — square wave at beat freq
    this._drumOsc = ctx.createOscillator()
    this._drumOsc.type = 'square'
    this._drumOsc.frequency.value = 3 // ~90BPM × 2
    this._drumOsc.connect(this._drumGain)
    this._drumOsc.start()

    // Bass layer — sine at low A1
    this._bassOsc = ctx.createOscillator()
    this._bassOsc.type = 'sawtooth'
    this._bassOsc.frequency.value = 55
    this._bassOsc.connect(this._bassGain)
    this._bassOsc.start()

    // Lead synth — triangle, A4
    this._leadOsc = ctx.createOscillator()
    this._leadOsc.type = 'triangle'
    this._leadOsc.frequency.value = 440
    this._leadOsc.connect(this._leadGain)
    this._leadOsc.start()

    // Choir — detuned triangle, E5
    this._choirOsc = ctx.createOscillator()
    this._choirOsc.type = 'triangle'
    this._choirOsc.frequency.value = 659.25
    this._choirOsc.connect(this._choirGain)
    this._choirOsc.start()
  }

  private _applyLayerGains() {
    if (!this._ctx || !this._active) return
    const t = this._ctx.currentTime
    this._fadeGain(this._leadGain,  this._combo >= 5  ? 0.15 : 0, t)
    this._fadeGain(this._choirGain, this._combo >= 15 ? 0.12 : 0, t)
  }

  private _fadeGain(node: GainNode | null, target: number, t: number) {
    if (!node) return
    node.gain.cancelScheduledValues(t)
    node.gain.setValueAtTime(node.gain.value, t)
    node.gain.linearRampToValueAtTime(target, t + 0.3)
  }

  private _stopOscillators() {
    for (const osc of [this._drumOsc, this._bassOsc, this._leadOsc, this._choirOsc]) {
      try { osc?.stop() } catch { /* already stopped */ }
    }
    this._drumOsc = this._bassOsc = this._leadOsc = this._choirOsc = null
  }
}
