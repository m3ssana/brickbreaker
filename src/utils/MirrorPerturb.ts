/**
 * Rotate ball velocity by angleDeg in the XZ plane (Y unchanged).
 * Used for mirror brick hit perturbation (±30°).
 */
export function mirrorPerturbVelocity(
  vx: number, vy: number, vz: number, angleDeg: number
): { vx: number; vy: number; vz: number } {
  const rad = (angleDeg * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  return { vx: vx * cos - vz * sin, vy, vz: vx * sin + vz * cos }
}
