import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Performance } from '../utils/Performance'

function makePerf(startQuality: Performance['quality'] = 'high') {
  const p = new Performance()
  p.quality = startQuality
  const onChange = vi.fn()
  p.onChange = onChange
  return { p, onChange }
}

/** Push N frames at a given FPS into the Performance tracker. */
function pushFrames(p: Performance, fps: number, count: number) {
  const dt = 1 / fps
  for (let i = 0; i < count; i++) p.tick(dt)
}

describe('Performance — requires 30 frame warm-up', () => {
  it('does not call onChange before 30 frames', () => {
    const { p, onChange } = makePerf()
    pushFrames(p, 10, 29) // very low FPS but not enough frames
    expect(onChange).not.toHaveBeenCalled()
  })
})

describe('Performance — downgrade on sustained low FPS', () => {
  it('downgrades from high → medium after >3s below 40fps', () => {
    const { p, onChange } = makePerf('high')
    // 30 warm-up frames at 10fps
    pushFrames(p, 10, 30)
    // then keep going until 3s threshold is crossed
    pushFrames(p, 10, 30) // 3 more seconds at 10fps
    expect(onChange).toHaveBeenCalledWith('medium')
  })

  it('downgrades medium → low after another sustained low FPS period', () => {
    const { p, onChange } = makePerf('medium')
    pushFrames(p, 10, 30)
    pushFrames(p, 10, 30)
    expect(onChange).toHaveBeenCalledWith('low')
  })

  it('does not downgrade below low', () => {
    const { p, onChange } = makePerf('low')
    pushFrames(p, 10, 30)
    pushFrames(p, 10, 100)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('downgrades excessive → high', () => {
    const { p, onChange } = makePerf('excessive')
    pushFrames(p, 10, 30)
    pushFrames(p, 10, 30)
    expect(onChange).toHaveBeenCalledWith('high')
  })
})

describe('Performance — upgrade on sustained high FPS', () => {
  it('upgrades from medium → high after >10s above 58fps', () => {
    const { p, onChange } = makePerf('medium')
    pushFrames(p, 60, 30)   // warm-up
    pushFrames(p, 60, 600)  // 10 seconds at 60fps
    expect(onChange).toHaveBeenCalledWith('high')
  })

  it('does not auto-upgrade to excessive', () => {
    const { p, onChange } = makePerf('high')
    pushFrames(p, 60, 30)
    pushFrames(p, 60, 1000) // well beyond 10s
    expect(onChange).not.toHaveBeenCalledWith('excessive')
  })
})

describe('Performance — mid-range FPS resets timers', () => {
  it('mid-range FPS (40-58) prevents both upgrade and downgrade', () => {
    const { p, onChange } = makePerf('high')
    pushFrames(p, 50, 30)  // 50fps — mid-range
    pushFrames(p, 50, 300) // 6 seconds — neither threshold should trigger
    expect(onChange).not.toHaveBeenCalled()
  })
})

describe('Performance — quality does not change when already at target', () => {
  it('does not fire onChange if quality is unchanged', () => {
    const { p, onChange } = makePerf('low')
    // Already at low — sustained low FPS should not call onChange
    pushFrames(p, 10, 30)
    pushFrames(p, 10, 30)
    expect(onChange).not.toHaveBeenCalled()
  })
})
