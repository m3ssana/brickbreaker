export const ARENA = {
  WIDTH: 20, HEIGHT: 12, DEPTH: 30, HALF_W: 10, HALF_D: 15,
} as const

export const PADDLE = {
  WIDTH: 4, HEIGHT: 0.4, DEPTH: 0.8, Y: 0, Z: 12, SPEED: 22, CATCH_HEIGHT: 4,
} as const

export const BALL = {
  RADIUS: 0.25, INITIAL_SPEED: 14,
} as const

export const BRICK = {
  WIDTH: 1.8, HEIGHT: 0.8, DEPTH: 0.6, GAP: 0.2,
  START_Z: -10, START_Y: 2.5,
  EXPLOSION_RADIUS: 3.8,
} as const

export const COLORS = {
  NEON_CYAN:    0x00ffff,
  NEON_PINK:    0xff00aa,
  NEON_GREEN:   0x00ff88,
  NEON_ORANGE:  0xff6600,
  NEON_YELLOW:  0xffcc00,
  NEON_RED:     0xff2244,
  CHROME:       0xc8d0e0,
  ARENA_WALL:   0x0a0a1a,
  FLOOR:        0x080818,
  BALL:         0x00eeff,
  EXPLOSIVE:    0xff4400,
  TROLL:        0x00ff44,
  ARMORED_FULL: 0xaaaacc,
  ARMORED_MID:  0x666688,
  ARMORED_LOW:  0x333344,
  MIRROR:       0xeef8ff,
  GHOST:        0xaa88ff,
} as const

export const BRICK_ROW_COLORS: readonly number[] = [
  0xff2244, 0xff6622, 0xffcc00, 0x22cc44,
  0x00cccc, 0x2244ff, 0x8822ff, 0xff22aa,
]
