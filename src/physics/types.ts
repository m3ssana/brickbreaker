/** Shared types exchanged between PhysicsWorker and PhysicsSync. */

export interface ArenaConfig {
  halfW: number; halfD: number; height: number
  paddleZ: number; paddleWidth: number; paddleHeight: number; paddleDepth: number
}

/** One brick to register in the physics world. */
export interface BrickDef {
  id: number
  x: number; y: number; z: number
  /** Initial hit-points (1 = standard/explosive, 3 = armored) */
  hp: number
}

/** Restore HP on a brick that has been healed (e.g. by troll brick effect). */
export interface BrickHealDef {
  id: number
  hp: number
}

export interface FragmentState {
  id: number
  x: number; y: number; z: number
  qx: number; qy: number; qz: number; qw: number
  life: number  // normalised 0→1
}

export interface PhysicsState {
  ball: { x: number; y: number; z: number } | null
  brickHits: Array<{
    brickId: number
    destroyed: boolean        // false = armored brick took damage but survived
    newFragmentIds: number[]  // populated only when destroyed=true
  }>
  fragmentStates: FragmentState[]
  fragmentsRemoved: number[]
  ballLost: boolean
}
