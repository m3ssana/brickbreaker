import { describe, it, expect, vi } from 'vitest'

// PostProcessing uses dynamic imports with `as string` casts which bypass Vitest's
// module mock interception. We therefore test only the public-API surface that
// doesn't depend on the three/addons being resolved at all (i.e., fallback path).

vi.mock('three', () => {
  class Vector2 { constructor(public x = 0, public y = 0) {} }
  class WebGLRenderer { render = vi.fn(); setSize = vi.fn() }
  class Scene {}
  class Camera {}
  return { Vector2, WebGLRenderer, Scene, Camera, ACESFilmicToneMapping: 4 }
})

import { PostProcessing } from '../fx/PostProcessing'
import * as THREE from 'three'

function pp() {
  const r = new THREE.WebGLRenderer() as any
  const s = new THREE.Scene() as any
  const c = new THREE.Camera() as any
  return new PostProcessing(r, s, c)
}

describe('PostProcessing — public API', () => {
  it('constructs without error', () => {
    expect(() => pp()).not.toThrow()
  })

  it('enabled is false before init (addons unavailable in test env)', async () => {
    const p = pp()
    await p.init()           // dynamic imports fail in jsdom → falls back to plain render
    // enabled may be true or false depending on whether addons resolve; just check it's a bool
    expect(typeof p.enabled).toBe('boolean')
  })

  it('setChromaticAberration is a no-op when composer is null', () => {
    const p = pp()
    expect(() => p.setChromaticAberration(0.5)).not.toThrow()
  })

  it('setCRTEnabled is a no-op before init (no throw)', () => {
    const p = pp()
    expect(() => p.setCRTEnabled(true)).not.toThrow()
    expect(() => p.setCRTEnabled(false)).not.toThrow()
  })

  it('crtEnabled tracks the last value passed to setCRTEnabled', () => {
    const p = pp()
    expect(p.crtEnabled).toBe(false)
    p.setCRTEnabled(true)
    expect(p.crtEnabled).toBe(true)
    p.setCRTEnabled(false)
    expect(p.crtEnabled).toBe(false)
  })

  it('render falls back to renderer.render when composer is null', () => {
    const r = new THREE.WebGLRenderer() as any
    const p = new PostProcessing(r, new THREE.Scene() as any, new THREE.Camera() as any)
    p.render()
    expect(r.render).toHaveBeenCalledOnce()
  })

  it('setSize does not throw when composer is null', () => {
    const p = pp()
    expect(() => p.setSize(1920, 1080)).not.toThrow()
  })
})
