import * as THREE from 'three'
import { ARENA, PADDLE, COLORS } from '../utils/Constants'
import { PADDLE_TIER_COLORS } from '../utils/PaddleDynamics'

export class Paddle {
  readonly mesh: THREE.Mesh
  private _x = 0
  private _targetX = 0
  private _pointerLocked = false
  private _keys: Set<string>

  // Tier-based color lerp
  private _targetColor = new THREE.Color(COLORS.NEON_CYAN)
  private _currentColor = new THREE.Color(COLORS.NEON_CYAN)
  private _tier = 0

  reversed = false   // reverse power-down
  drunk    = false   // drunk mode (momentum)

  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer, keys: Set<string>) {
    this._keys = keys

    const geo = new THREE.BoxGeometry(PADDLE.WIDTH, PADDLE.HEIGHT, PADDLE.DEPTH)
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.CHROME,
      metalness: 0.95,
      roughness: 0.05,
      emissive: new THREE.Color(COLORS.NEON_CYAN),
      emissiveIntensity: 0.4,
    })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    this._sync()
    scene.add(this.mesh)

    // Pointer lock for precise mouse control
    renderer.domElement.addEventListener('click', () => {
      renderer.domElement.requestPointerLock()
    })
    document.addEventListener('pointerlockchange', () => {
      this._pointerLocked = document.pointerLockElement === renderer.domElement
    })
    document.addEventListener('mousemove', e => {
      if (!this._pointerLocked) return
      this._targetX = Math.max(
        -ARENA.HALF_W + PADDLE.WIDTH / 2,
        Math.min(ARENA.HALF_W - PADDLE.WIDTH / 2, this._targetX + e.movementX * 0.025)
      )
    })
  }

  setTierColor(tier: number) {
    this._tier = tier
    this._targetColor.setHex(PADDLE_TIER_COLORS[Math.max(0, Math.min(5, tier))])
  }

  updateColor(dt: number, time: number) {
    this._currentColor.lerp(this._targetColor, Math.min(1, dt))
    const mat = this.mesh.material as THREE.MeshStandardMaterial
    mat.emissive.copy(this._currentColor)
    // Tier 4: pulse emissive intensity
    if (this._tier === 4) {
      mat.emissiveIntensity = 0.4 + 0.4 * Math.sin(time * 6)
    } else {
      mat.emissiveIntensity = 0.4
    }
  }

  update(dt: number) {
    const dir = this.reversed ? -1 : 1
    if (this._keys.has('ArrowLeft') || this._keys.has('a') || this._keys.has('A')) {
      this._targetX -= PADDLE.SPEED * dt * dir
    }
    if (this._keys.has('ArrowRight') || this._keys.has('d') || this._keys.has('D')) {
      this._targetX += PADDLE.SPEED * dt * dir
    }
    this._targetX = Math.max(
      -ARENA.HALF_W + PADDLE.WIDTH / 2,
      Math.min(ARENA.HALF_W - PADDLE.WIDTH / 2, this._targetX)
    )
    // Smooth follow — drunk mode slows response dramatically
    const followSpeed = this.drunk ? 3 : 18
    this._x += (this._targetX - this._x) * Math.min(1, dt * followSpeed)
    this._sync()
  }

  private _sync() {
    this.mesh.position.set(this._x, PADDLE.Y + PADDLE.HEIGHT / 2, PADDLE.Z)
  }

  get x() { return this._x }

  setGlowColor(hex: number) {
    ;(this.mesh.material as THREE.MeshStandardMaterial).emissive.setHex(hex)
  }

  setTouchX(x: number) {
    this._targetX = Math.max(
      -ARENA.HALF_W + PADDLE.WIDTH / 2,
      Math.min(ARENA.HALF_W - PADDLE.WIDTH / 2, x)
    )
  }

  setWidthScale(scale: number) {
    this.mesh.scale.x = Math.max(0.1, scale)
  }

  resetWidthScale() {
    this.mesh.scale.x = 1
  }
}
