import * as THREE from 'three'

/** Tier → hex color string */
const TIER_COLOR = ['#ffffff', '#ffee88', '#ffaa44', '#ff6622', '#ff2244', '#88ffaa']
const TIER_SIZE  = [   24,        26,        28,        30,        36,       22     ]

interface ActiveRoast {
  sprite: THREE.Sprite
  life: number
  vel: THREE.Vector3
}

export class RoastRenderer {
  private _scene: THREE.Scene
  private _active: ActiveRoast[] = []

  constructor(scene: THREE.Scene) {
    this._scene = scene
  }

  display(text: string, tier: number) {
    // Build a canvas texture for the text
    const canvas = document.createElement('canvas')
    canvas.width = 640; canvas.height = 96
    const c = canvas.getContext('2d')!

    const color = TIER_COLOR[tier] ?? '#ffffff'
    const size  = TIER_SIZE[tier]  ?? 24

    // Shadow glow
    c.shadowColor = color; c.shadowBlur = 18
    c.font = `bold ${size}px 'Courier New', monospace`
    c.fillStyle = color
    c.textAlign = 'center'
    c.textBaseline = 'middle'

    // Word-wrap if needed (max ~40 chars per line)
    const maxW = 600
    const words = text.split(' ')
    const lines: string[] = []
    let line = ''
    for (const word of words) {
      const test = line ? `${line} ${word}` : word
      if (c.measureText(test).width > maxW && line) { lines.push(line); line = word }
      else line = test
    }
    if (line) lines.push(line)

    // Resize canvas height to fit lines
    canvas.height = lines.length * (size + 8) + 16
    c.shadowColor = color; c.shadowBlur = 18
    c.font = `bold ${size}px 'Courier New', monospace`
    c.fillStyle = color; c.textAlign = 'center'; c.textBaseline = 'middle'

    lines.forEach((l, i) => {
      c.fillText(l, 320, 8 + (i + 0.5) * (size + 8))
    })

    const tex = new THREE.CanvasTexture(canvas)
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })
    const sprite = new THREE.Sprite(mat)

    const aspect = canvas.width / canvas.height
    const h = tier >= 4 ? 2.2 : 1.6
    sprite.scale.set(h * aspect, h, 1)

    // Position: floating in the middle of the arena
    const zPos = -4 - Math.random() * 4
    const xPos = (Math.random() - 0.5) * 8
    sprite.position.set(xPos, 8 + Math.random() * 2, zPos)

    this._scene.add(sprite)
    this._active.push({
      sprite,
      life: 1,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.5, 0.6 + Math.random() * 0.4, 0),
    })

    // Cap at 3 concurrent roasts
    if (this._active.length > 3) {
      const old = this._active.shift()!
      this._scene.remove(old.sprite)
    }
  }

  update(dt: number) {
    const LIFETIME = 3.5
    for (let i = this._active.length - 1; i >= 0; i--) {
      const r = this._active[i]
      r.life -= dt / LIFETIME
      r.sprite.position.addScaledVector(r.vel, dt)
      ;(r.sprite.material as THREE.SpriteMaterial).opacity = Math.max(0, r.life)
      if (r.life <= 0) {
        this._scene.remove(r.sprite)
        ;(r.sprite.material as THREE.SpriteMaterial).map?.dispose()
        r.sprite.material.dispose()
        this._active.splice(i, 1)
      }
    }
  }
}
