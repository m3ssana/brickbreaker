import { describe, it, expect } from 'vitest'
import { mirrorPerturbVelocity } from '../utils/MirrorPerturb'

describe('mirrorPerturbVelocity', () => {
  it('0° perturbation leaves velocity unchanged', () => {
    const r = mirrorPerturbVelocity(1, 0, 0, 0)
    expect(r.vx).toBeCloseTo(1)
    expect(r.vy).toBeCloseTo(0)
    expect(r.vz).toBeCloseTo(0)
  })

  it('preserves speed after perturbation', () => {
    const vx = 3, vy = 2, vz = -4
    const speed = Math.sqrt(vx*vx + vy*vy + vz*vz)
    const r = mirrorPerturbVelocity(vx, vy, vz, 25)
    const newSpeed = Math.sqrt(r.vx**2 + r.vy**2 + r.vz**2)
    expect(newSpeed).toBeCloseTo(speed)
  })

  it('vy is unchanged (rotation is in XZ plane)', () => {
    const r = mirrorPerturbVelocity(2, 5, -3, 45)
    expect(r.vy).toBeCloseTo(5)
  })

  it('90° perturbation rotates (vx=1, vz=0) to (vx≈0, vz≈1)', () => {
    const r = mirrorPerturbVelocity(1, 0, 0, 90)
    expect(r.vx).toBeCloseTo(0, 5)
    expect(r.vz).toBeCloseTo(1, 5)
  })

  it('-30° produces a different result than +30°', () => {
    const pos = mirrorPerturbVelocity(0, 0, -1, 30)
    const neg = mirrorPerturbVelocity(0, 0, -1, -30)
    expect(pos.vx).not.toBeCloseTo(neg.vx)
  })
})
