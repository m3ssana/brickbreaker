import * as THREE from 'three'

const CAP = 30
const FADE_TIME = 20  // seconds

interface DecalEntry {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
  age: number  // seconds elapsed since spawn
}

export class Decals {
  private _scene: THREE.Scene
  private _pool: DecalEntry[] = []

  constructor(scene: THREE.Scene) {
    this._scene = scene
  }

  /** Cyan ball-impact stamp */
  addImpact(x: number, y: number, z: number) {
    this._add(x, y, z, 0x00eeff, 0.4)
  }

  /** Orange/black explosion scorch (larger) */
  addScorch(x: number, y: number, z: number) {
    this._add(x, y, z, 0xff4400, 1.2)
  }

  update(dt: number) {
    for (let i = this._pool.length - 1; i >= 0; i--) {
      const e = this._pool[i]
      e.age += dt
      const t = Math.min(1, e.age / FADE_TIME)
      e.mesh.material.opacity = Math.max(0, 1 - t)
      if (e.age >= FADE_TIME) {
        this._remove(i)
      }
    }
  }

  // ── Private ───────────────────────────────────────────────────────────────────

  private _add(x: number, y: number, z: number, color: number, size: number) {
    // Evict oldest if at cap
    if (this._pool.length >= CAP) this._remove(0)

    const geo = new THREE.PlaneGeometry(size, size)
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    })
    const mesh = new THREE.Mesh(geo, mat)
    // Stamp flat on nearest surface: if y is near floor (0), lay flat; otherwise on wall (z ≈ -10)
    if (Math.abs(y) < 1) {
      mesh.position.set(x, 0.01, z)
      mesh.rotation.x = -Math.PI / 2
    } else {
      mesh.position.set(x, y, z + 0.01)
    }
    this._scene.add(mesh)
    this._pool.push({ mesh, age: 0 })
  }

  private _remove(i: number) {
    const e = this._pool[i]
    this._scene.remove(e.mesh)
    e.mesh.geometry.dispose()
    e.mesh.material.dispose()
    this._pool.splice(i, 1)
  }
}
