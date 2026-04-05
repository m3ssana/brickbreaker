import * as THREE from 'three'
import { BRICK, BRICK_ROW_COLORS, COLORS } from '../utils/Constants'
import type { BrickDef, FragmentState } from '../physics/types'

const CELL_W = BRICK.WIDTH + BRICK.GAP
const CELL_H = BRICK.HEIGHT + BRICK.GAP
const MAX_INSTANCES = 300

export type BrickType = 'standard' | 'armored' | 'explosive' | 'troll' | 'mirror' | 'ghost'

export interface BrickState {
  id: number; type: BrickType; active: boolean; hp: number; maxHp: number
  x: number; y: number; z: number; row: number; instanceIndex: number
}

interface VisualFragment {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>
}

const ARMORED_HP_COLORS = [COLORS.ARMORED_LOW, COLORS.ARMORED_MID, COLORS.ARMORED_FULL]

export class BrickFormation {
  private _scene: THREE.Scene
  private _mesh: THREE.InstancedMesh
  private _bricks: BrickState[] = []
  private _brickById = new Map<number, number>()
  private _trollInstances: number[] = []   // instanceIndex values for pulsing
  private _ghostSolid    = new Map<number, boolean>() // id → solid state
  private _fragments = new Map<number, VisualFragment>()
  private _dummy = new THREE.Object3D()
  private _activeCount = 0

  constructor(scene: THREE.Scene) {
    this._scene = scene
    const geo = new THREE.BoxGeometry(BRICK.WIDTH, BRICK.HEIGHT, BRICK.DEPTH)
    const mat = new THREE.MeshStandardMaterial({ metalness: 0.3, roughness: 0.5 })
    this._mesh = new THREE.InstancedMesh(geo, mat, MAX_INSTANCES)
    this._mesh.castShadow = true; this._mesh.receiveShadow = true
    this._mesh.frustumCulled = false
    this._dummy.scale.set(0, 0, 0); this._dummy.updateMatrix()
    for (let i = 0; i < MAX_INSTANCES; i++) this._mesh.setMatrixAt(i, this._dummy.matrix)
    this._mesh.instanceMatrix.needsUpdate = true
    scene.add(this._mesh)
  }

  load(grid: string[]): BrickDef[] {
    this._bricks = []; this._brickById.clear(); this._trollInstances = []; this._ghostSolid.clear(); this._activeCount = 0
    const rows = grid.length, cols = grid[0].length
    const startX = -(cols * CELL_W) / 2 + CELL_W / 2
    this._dummy.scale.set(0, 0, 0); this._dummy.updateMatrix()
    for (let i = 0; i < MAX_INSTANCES; i++) this._mesh.setMatrixAt(i, this._dummy.matrix)

    const defs: BrickDef[] = []
    let instIdx = 0, brickId = 0

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const char = grid[row][col]
        if (char === '.' || char === ' ') continue

        const type: BrickType =
          char === 'A' ? 'armored' :
          char === 'E' ? 'explosive' :
          char === 'T' ? 'troll'    :
          char === 'M' ? 'mirror'   :
          char === 'G' ? 'ghost'    : 'standard'
        const hp    = type === 'armored' ? 3 : 1
        const x     = startX + col * CELL_W
        const y     = BRICK.START_Y + (rows - 1 - row) * CELL_H + BRICK.HEIGHT / 2
        const z     = BRICK.START_Z

        const state: BrickState = { id: brickId, type, active: true, hp, maxHp: hp, x, y, z, row, instanceIndex: instIdx }
        this._brickById.set(brickId, this._bricks.length)
        this._bricks.push(state)
        this._activeCount++
        if (type === 'troll') this._trollInstances.push(instIdx)
        if (type === 'ghost') this._ghostSolid.set(brickId, true)

        this._dummy.position.set(x, y, z); this._dummy.scale.set(1, 1, 1); this._dummy.rotation.set(0, 0, 0)
        this._dummy.updateMatrix()
        this._mesh.setMatrixAt(instIdx, this._dummy.matrix)
        this._mesh.setColorAt(instIdx, new THREE.Color(this._brickColor(state)))

        defs.push({ id: brickId, x, y, z, hp })
        brickId++; instIdx++
      }
    }

    this._mesh.count = instIdx
    this._mesh.instanceMatrix.needsUpdate = true
    if (this._mesh.instanceColor) this._mesh.instanceColor.needsUpdate = true
    return defs
  }

  get activeCount() { return this._activeCount }

  getBrickById(id: number): BrickState | undefined {
    const idx = this._brickById.get(id)
    return idx !== undefined ? this._bricks[idx] : undefined
  }

  hitBrickById(id: number): boolean {
    const idx = this._brickById.get(id)
    if (idx === undefined) return false
    const b = this._bricks[idx]
    if (!b.active) return false
    // Ghost bricks are invulnerable while phased out
    if (b.type === 'ghost' && this._ghostSolid.get(id) === false) return false
    b.hp--
    if (b.hp > 0) {
      this._mesh.setColorAt(b.instanceIndex, new THREE.Color(ARMORED_HP_COLORS[b.hp - 1]))
      if (this._mesh.instanceColor) this._mesh.instanceColor.needsUpdate = true
      return false
    }
    return this._destroyBrick(b)
  }

  forceDestroyBrick(id: number): boolean {
    const idx = this._brickById.get(id)
    if (idx === undefined) return false
    const b = this._bricks[idx]
    if (!b.active) return false
    b.hp = 0
    return this._destroyBrick(b)
  }

  /**
   * Heal all active bricks within radius of the troll brick at `id`.
   * Restores HP to maxHp and updates visuals.
   * Returns BrickDef[] of healed bricks (with restored HP) for physics re-sync.
   */
  healBricksAround(id: number, radius: number): BrickDef[] {
    const src = this.getBrickById(id)
    if (!src) return []
    const healed: BrickDef[] = []

    for (const b of this._bricks) {
      if (!b.active || b.id === id) continue
      const dx = b.x - src.x, dy = b.y - src.y, dz = b.z - src.z
      if (Math.sqrt(dx*dx + dy*dy + dz*dz) > radius) continue
      // Only restore if HP was actually reduced
      if (b.hp < b.maxHp) {
        b.hp = b.maxHp
        this._mesh.setColorAt(b.instanceIndex, new THREE.Color(this._brickColor(b)))
        if (this._mesh.instanceColor) this._mesh.instanceColor.needsUpdate = true
        healed.push({ id: b.id, x: b.x, y: b.y, z: b.z, hp: b.hp })
      }
    }
    return healed
  }

  /**
   * Update ghost brick opacity via sine cycle (2s period).
   * Returns toEnable/toDisable id arrays for physics collider sync.
   */
  updateGhostBricks(time: number): { toEnable: number[]; toDisable: number[] } {
    const toEnable: number[] = []
    const toDisable: number[] = []
    for (const b of this._bricks) {
      if (b.type !== 'ghost' || !b.active) continue
      const opacity = 0.5 + 0.5 * Math.sin(time * Math.PI)
      const solid = opacity >= 0.2
      const wasSolid = this._ghostSolid.get(b.id) ?? true
      if (solid !== wasSolid) {
        this._ghostSolid.set(b.id, solid)
        if (solid) toEnable.push(b.id)
        else toDisable.push(b.id)
      }
      // Encode opacity as alpha in color (darken toward black when phased)
      const c = new THREE.Color(COLORS.GHOST)
      c.multiplyScalar(opacity)
      this._mesh.setColorAt(b.instanceIndex, c)
    }
    if (this._mesh.instanceColor) this._mesh.instanceColor.needsUpdate = true
    return { toEnable, toDisable }
  }

  /** Pulse troll brick colors — call from game loop with elapsed time. */
  updateTrollPulse(time: number) {
    if (this._trollInstances.length === 0) return
    const pulse = 0.5 + 0.5 * Math.sin(time * 4)
    const r = Math.floor(0 * 255)
    const g = Math.floor((0.4 + pulse * 0.6) * 255)
    const b = Math.floor(0.2 * 255)
    const color = new THREE.Color(r / 255, g / 255, b / 255)
    for (const instIdx of this._trollInstances) {
      // Only pulse active troll bricks
      const brick = this._bricks.find(br => br.instanceIndex === instIdx && br.active)
      if (brick) this._mesh.setColorAt(instIdx, color)
    }
    if (this._mesh.instanceColor) this._mesh.instanceColor.needsUpdate = true
  }

  getExplosionTargets(epicenterId: number, radius: number): number[] {
    const src = this.getBrickById(epicenterId)
    if (!src) return []
    const results: number[] = []
    for (const b of this._bricks) {
      if (!b.active || b.id === epicenterId) continue
      const dx = b.x - src.x, dy = b.y - src.y, dz = b.z - src.z
      if (Math.sqrt(dx*dx + dy*dy + dz*dz) < radius) results.push(b.id)
    }
    return results
  }

  // ── Fragment visuals ─────────────────────────────────────────────────────────

  spawnFragmentMesh(id: number, x: number, y: number, z: number, color: number) {
    const s   = 0.08 + Math.random() * 0.2
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(s, s*0.6, s*0.5),
      new THREE.MeshStandardMaterial({ color, emissive: new THREE.Color(color), emissiveIntensity: 1, transparent: true, opacity: 1 })
    )
    mesh.position.set(x, y, z)
    this._scene.add(mesh)
    this._fragments.set(id, { mesh })
  }

  updateFragments(states: FragmentState[], removed: number[]) {
    for (const s of states) {
      const f = this._fragments.get(s.id)
      if (!f) continue
      f.mesh.position.set(s.x, s.y, s.z)
      f.mesh.quaternion.set(s.qx, s.qy, s.qz, s.qw)
      f.mesh.material.opacity = Math.max(0, s.life)
    }
    for (const id of removed) {
      const f = this._fragments.get(id)
      if (!f) continue
      this._scene.remove(f.mesh)
      f.mesh.geometry.dispose(); f.mesh.material.dispose()
      this._fragments.delete(id)
    }
  }

  // ── Private ───────────────────────────────────────────────────────────────────

  private _destroyBrick(b: BrickState): boolean {
    b.active = false; this._activeCount--
    this._trollInstances = this._trollInstances.filter(i => i !== b.instanceIndex)
    this._dummy.scale.set(0, 0, 0); this._dummy.updateMatrix()
    this._mesh.setMatrixAt(b.instanceIndex, this._dummy.matrix)
    this._mesh.instanceMatrix.needsUpdate = true
    return true
  }

  private _brickColor(b: BrickState): number {
    if (b.type === 'explosive') return COLORS.EXPLOSIVE
    if (b.type === 'troll')     return COLORS.TROLL
    if (b.type === 'mirror')    return COLORS.MIRROR
    if (b.type === 'ghost')     return COLORS.GHOST
    if (b.type === 'armored')   return ARMORED_HP_COLORS[b.hp - 1]
    return BRICK_ROW_COLORS[b.row % BRICK_ROW_COLORS.length]
  }
}
