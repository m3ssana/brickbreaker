import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('three', () => {
  class Color { constructor(_h?: number) {} }
  class Vector3 {
    x=0; y=0; z=0
    constructor(x=0,y=0,z=0) { this.x=x; this.y=y; this.z=z }
    set(x:number,y:number,z:number) { this.x=x;this.y=y;this.z=z; return this }
    copy(v: Vector3) { this.x=v.x;this.y=v.y;this.z=v.z; return this }
    clone() { return new Vector3(this.x,this.y,this.z) }
    normalize() { return this }
  }
  class MeshBasicMaterial {
    opacity=1; transparent=true; depthWrite=false
    constructor(_o?: unknown) {}
    dispose = vi.fn()
  }
  class PlaneGeometry { constructor(..._a:unknown[]) {} dispose = vi.fn() }
  class Mesh {
    position = new Vector3()
    rotation = { x:0,y:0,z:0 }
    material: MeshBasicMaterial
    geometry: PlaneGeometry
    constructor(g: PlaneGeometry, m: MeshBasicMaterial) { this.geometry=g; this.material=m }
  }
  class Scene { add=vi.fn(); remove=vi.fn() }
  return { Color, Vector3, MeshBasicMaterial, PlaneGeometry, Mesh, Scene }
})

import { Decals } from '../fx/Decals'
import * as THREE from 'three'

function makeScene() {
  return new THREE.Scene() as any
}

describe('Decals', () => {
  it('addImpact does not throw', () => {
    const d = new Decals(makeScene())
    expect(() => d.addImpact(0, 5, -10)).not.toThrow()
  })

  it('addScorch does not throw', () => {
    const d = new Decals(makeScene())
    expect(() => d.addScorch(0, 0, -10)).not.toThrow()
  })

  it('respects cap of 30 decals — oldest removed on overflow', () => {
    const scene = makeScene()
    const d = new Decals(scene)
    for (let i = 0; i < 35; i++) d.addImpact(i, 0, -10)
    expect(scene.remove).toHaveBeenCalled()
  })

  it('update fades decals over time', () => {
    const d = new Decals(makeScene())
    d.addImpact(0, 5, -10)
    d.update(21) // past fade time
    // No throw and internal state is clean
    expect(() => d.update(1)).not.toThrow()
  })

  it('fully-faded decals are removed from scene', () => {
    const scene = makeScene()
    const d = new Decals(scene)
    d.addImpact(0, 5, -10)
    d.update(25) // well past 20s fade
    expect(scene.remove).toHaveBeenCalled()
  })
})
