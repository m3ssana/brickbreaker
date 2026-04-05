import { describe, it, expect, vi, beforeEach } from 'vitest'

// Minimal AudioContext mock
function makeAudioCtx() {
  const nodes: Record<string, unknown> = {}
  function node() {
    return {
      connect: vi.fn(), disconnect: vi.fn(),
      start: vi.fn(), stop: vi.fn(),
      frequency: { value: 0, setValueAtTime: vi.fn(), linearRampToValueAtTime: vi.fn() },
      gain: { value: 1, setValueAtTime: vi.fn(), linearRampToValueAtTime: vi.fn(), cancelScheduledValues: vi.fn() },
      type: 'sine',
    }
  }
  return {
    state: 'running',
    currentTime: 0,
    createOscillator: vi.fn(() => node()),
    createGain: vi.fn(() => node()),
    createBiquadFilter: vi.fn(() => node()),
    destination: {},
    resume: vi.fn().mockResolvedValue(undefined),
    suspend: vi.fn().mockResolvedValue(undefined),
  }
}

vi.stubGlobal('AudioContext', vi.fn(() => makeAudioCtx()))

import { MusicSystem } from '../audio/MusicSystem'

describe('MusicSystem', () => {
  let music: MusicSystem

  beforeEach(() => {
    music = new MusicSystem()
  })

  it('start() does not throw', () => {
    expect(() => music.start()).not.toThrow()
  })

  it('stop() after start does not throw', () => {
    music.start()
    expect(() => music.stop()).not.toThrow()
  })

  it('setActive(false) and setActive(true) do not throw', () => {
    music.start()
    expect(() => music.setActive(false)).not.toThrow()
    expect(() => music.setActive(true)).not.toThrow()
  })

  it('setCombo updates layer state without throwing', () => {
    music.start()
    expect(() => music.setCombo(0)).not.toThrow()
    expect(() => music.setCombo(5)).not.toThrow()
    expect(() => music.setCombo(15)).not.toThrow()
  })

  it('setBallSpeed accepts a multiplier without throwing', () => {
    music.start()
    expect(() => music.setBallSpeed(1.0)).not.toThrow()
    expect(() => music.setBallSpeed(1.6)).not.toThrow()
  })

  it('stingers do not throw when called', () => {
    music.start()
    expect(() => music.stingBallLost()).not.toThrow()
    expect(() => music.stingBassDrop()).not.toThrow()
    expect(() => music.stingVictory()).not.toThrow()
  })

  it('volume setter clamped to [0, 1]', () => {
    music.volume = 1.5
    expect(music.volume).toBeLessThanOrEqual(1)
    music.volume = -0.5
    expect(music.volume).toBeGreaterThanOrEqual(0)
  })
})
