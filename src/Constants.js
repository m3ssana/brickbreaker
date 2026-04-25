export const ARENA = {
  width: 12,
  depth: 20,
  halfWidth: 6,
  halfDepth: 10,
  wallHeight: 1.2
};

export const PADDLE = {
  width: 2.6,
  depth: 0.55,
  height: 0.45,
  z: 8.5,
  speedSmoothing: 0.18,
  // small "chin" beneath the paddle so the ball is lost only after it falls past the paddle's z
  killZ: 9.6
};

export const BALL = {
  radius: 0.28,
  startSpeed: 12.5,
  speedPerLevel: 0.9,
  maxSpeed: 22,
  // maximum X velocity component as fraction of speed — keeps ball from going horizontal
  maxAxisRatio: 0.92,
  minVerticalRatio: 0.18
};

export const BRICKS = {
  cols: 8,
  rowsPerLevel: [5, 6, 6, 7, 7, 8],
  width: 1.3,
  depth: 0.6,
  height: 0.5,
  gapX: 0.08,
  gapZ: 0.12,
  startZ: -7.5
};

export const SCORING = {
  brickBase: 100,
  brickHpBonus: 50,
  levelClearBonus: 1000
};

export const STARTING_LIVES = 3;

// Color palette: synthwave neon
export const PALETTE = {
  bg: 0x05060d,
  bgAccent: 0x14082a,
  paddle: 0x20e3ff,
  paddleEmissive: 0x10aacc,
  ball: 0xfff3a0,
  ballEmissive: 0xffaa20,
  walls: 0x352060,
  wallEdge: 0xff3ad6,
  // brick row colors top→bottom (cycled if rows exceed)
  brickRows: [0xff3ad6, 0xff7a3a, 0xffd13a, 0x3aff8e, 0x20e3ff, 0x9c6dff, 0xff5fb1, 0x60f0d0]
};
