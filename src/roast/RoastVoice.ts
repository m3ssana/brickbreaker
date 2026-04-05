/**
 * Web Speech API wrapper — speaks roast text in a dry, sardonic tone.
 * Falls back silently if SpeechSynthesis is unavailable.
 */
export class RoastVoice {
  private _synth: SpeechSynthesis | null = null
  private _voice: SpeechSynthesisVoice | null = null
  enabled = true

  constructor() {
    if (!('speechSynthesis' in window)) return
    this._synth = window.speechSynthesis
    this._pickVoice()
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this._pickVoice()
    }
  }

  private _pickVoice() {
    const voices = this._synth!.getVoices()
    // Prefer deep/robotic English voices
    const ranked = [
      voices.find(v => /david|mark|fred|alex/i.test(v.name)),
      voices.find(v => v.lang === 'en-US' && !v.localService),
      voices.find(v => v.lang.startsWith('en')),
      voices[0],
    ]
    this._voice = ranked.find(Boolean) ?? null
  }

  speak(text: string, tier: number) {
    if (!this._synth || !this.enabled) return
    this._synth.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    if (this._voice) utt.voice = this._voice
    // Higher tier → slower, lower pitch (more withering)
    utt.rate   = tier >= 4 ? 0.82 : tier >= 2 ? 0.92 : 1.0
    utt.pitch  = tier >= 4 ? 0.70 : tier >= 2 ? 0.85 : 1.0
    utt.volume = 0.75
    this._synth.speak(utt)
  }

  cancel() { this._synth?.cancel() }
}
