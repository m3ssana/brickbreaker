/** Tier-indexed paddle emissive colors: tier 0 (hopeful) → tier 5 (gold/doing well) */
export const PADDLE_TIER_COLORS: readonly number[] = [
  0x00ffff, // 0: cyan — hopeful
  0x00ff88, // 1: green — mildly judgmental
  0xffcc00, // 2: yellow — concerned
  0xff6600, // 3: orange — hostile
  0xff2244, // 4: red — contemptuous
  0xffd700, // 5: gold — doing well (combo ≥10)
]

/**
 * Compute paddle X scale from balls lost this level.
 * No shrink until 2nd loss; 0.85× per loss thereafter; floor at 0.4.
 */
export function paddleShrinkScale(ballsLostThisLevel: number): number {
  if (ballsLostThisLevel < 2) return 1.0
  return Math.max(0.4, Math.pow(0.85, ballsLostThisLevel - 1))
}
