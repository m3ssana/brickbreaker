import * as RAPIER from '@dimforge/rapier3d-compat'
import type { ArenaConfig, BrickDef, FragmentState, PhysicsState } from './types'
import { SAB_LAYOUT } from './SharedStateBuffer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = self as any

// Optional SAB — set by main thread after init if available
let sabView: Float32Array | null = null

const GRP_ARENA = (0b01 << 16) | 0b01
const GRP_WALL  = (0b11 << 16) | 0b01
const GRP_FRAG  = (0b01 << 16) | 0b10

let world: RAPIER.World
let eq: RAPIER.EventQueue
let arena: ArenaConfig

let ballBody: RAPIER.RigidBody | null = null
let ballCollHandle = -1
let targetSpeed = 14

let paddleBody: RAPIER.RigidBody
let paddleCollHandle = -1
let paddleX = 0

interface BrickRecord { body: RAPIER.RigidBody; collHandle: number; hp: number }
const brickBodies   = new Map<number, BrickRecord>()
const brickByHandle = new Map<number, number>()

const MAX_FRAGS = 60
let fragIdCtr = 0
const fragBodies = new Map<number, { body: RAPIER.RigidBody; life: number; initLife: number }>()
const pendingRemovals: number[] = []

// ── Helpers ───────────────────────────────────────────────────────────────────

function addStaticBox(cx: number, cy: number, cz: number, hw: number, hh: number, hd: number, grp: number) {
  const body = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(cx, cy, cz))
  world.createCollider(RAPIER.ColliderDesc.cuboid(hw, hh, hd).setRestitution(1).setFriction(0).setCollisionGroups(grp), body)
}

// ── Setup ──────────────────────────────────────────────────────────────────────

function setupArena(cfg: ArenaConfig) {
  arena = cfg
  world = new RAPIER.World({ x: 0, y: -20, z: 0 })
  eq    = new RAPIER.EventQueue(true)
  const { halfW: W, halfD: D, height: H } = cfg
  const T = 1
  addStaticBox(0, -T, 0, W+T, T, D+T, GRP_WALL)
  addStaticBox(0, H+T, 0, W+T, T, D+T, GRP_WALL)
  addStaticBox(-(W+T), H/2, 0, T, H/2+T, D+T, GRP_WALL)
  addStaticBox(  W+T,  H/2, 0, T, H/2+T, D+T, GRP_WALL)
  addStaticBox(0, H/2, -(D+T), W+T, H/2+T, T, GRP_WALL)
  paddleBody = world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, cfg.paddleHeight/2, cfg.paddleZ))
  const pc = world.createCollider(RAPIER.ColliderDesc.cuboid(cfg.paddleWidth/2, cfg.paddleHeight/2, cfg.paddleDepth/2).setRestitution(0.2).setFriction(0).setCollisionGroups(GRP_ARENA), paddleBody)
  paddleCollHandle = pc.handle
}

// ── Ball ──────────────────────────────────────────────────────────────────────

function createBall(x: number, y: number, z: number, vx: number, vy: number, vz: number, speed: number, radius: number) {
  if (ballBody) { world.removeRigidBody(ballBody); ballBody = null; ballCollHandle = -1 }
  targetSpeed = speed
  ballBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x,y,z).setLinvel(vx,vy,vz).setGravityScale(0).setLinearDamping(0).setAngularDamping(1).setCcdEnabled(true))
  const bc = world.createCollider(RAPIER.ColliderDesc.ball(radius).setRestitution(1).setFriction(0).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS).setCollisionGroups(GRP_ARENA), ballBody)
  ballCollHandle = bc.handle
}

function removeBall() {
  if (ballBody) { world.removeRigidBody(ballBody); ballBody = null; ballCollHandle = -1 }
}

// ── Bricks ─────────────────────────────────────────────────────────────────────

function loadBricks(bricks: BrickDef[]) {
  for (const { body } of brickBodies.values()) world.removeRigidBody(body)
  brickBodies.clear(); brickByHandle.clear()
  const hw = 1.8/2, hh = 0.8/2, hd = 0.6/2
  for (const def of bricks) {
    const body = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(def.x, def.y, def.z))
    const coll = world.createCollider(RAPIER.ColliderDesc.cuboid(hw, hh, hd).setRestitution(1).setFriction(0).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS).setCollisionGroups(GRP_ARENA), body)
    brickBodies.set(def.id, { body, collHandle: coll.handle, hp: def.hp })
    brickByHandle.set(coll.handle, def.id)
  }
}

/** Remove specific brick bodies (called by main thread for chain explosions). */
function removeBricks(ids: number[]) {
  for (const id of ids) {
    const rec = brickBodies.get(id)
    if (!rec) continue
    world.removeRigidBody(rec.body)
    brickBodies.delete(id)
    brickByHandle.delete(rec.collHandle)
  }
}

/** Restore HP on healed bricks (troll brick effect). */
function healBricks(bricks: { id: number; hp: number }[]) {
  for (const { id, hp } of bricks) {
    const rec = brickBodies.get(id)
    if (rec) rec.hp = hp
  }
}

/** Enable or disable a brick collider (ghost brick phase toggle). */
function setBrickCollider(id: number, enabled: boolean) {
  const rec = brickBodies.get(id)
  if (!rec) return
  const coll = world.getCollider(rec.collHandle)
  if (coll) coll.setEnabled(enabled)
}

/** Rotate ball velocity by angleDeg in XZ plane (mirror brick perturbation). */
function perturbBall(angleDeg: number) {
  if (!ballBody) return
  const v = ballBody.linvel()
  const rad = (angleDeg * Math.PI) / 180
  const cos = Math.cos(rad), sin = Math.sin(rad)
  ballBody.setLinvel({ x: v.x * cos - v.z * sin, y: v.y, z: v.x * sin + v.z * cos }, true)
}

// ── Fragments ─────────────────────────────────────────────────────────────────

function spawnFragments(bPos: {x:number;y:number;z:number}, ballPos: {x:number;y:number;z:number}): number[] {
  const ids: number[] = []
  while (fragBodies.size >= MAX_FRAGS) {
    for (const [oldId, old] of fragBodies) {
      world.removeRigidBody(old.body); fragBodies.delete(oldId); pendingRemovals.push(oldId); break
    }
  }
  const dx = bPos.x - ballPos.x, dz = bPos.z - ballPos.z
  const mag = Math.sqrt(dx*dx + dz*dz) || 1
  const count = 5 + Math.floor(Math.random() * 4)
  for (let i = 0; i < count; i++) {
    const id = ++fragIdCtr
    const s = 0.06 + Math.random() * 0.18
    const body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(bPos.x+(Math.random()-.5)*1.6, bPos.y+(Math.random()-.5)*.6, bPos.z+(Math.random()-.5)*.5)
      .setLinvel((dx/mag)*(2+Math.random()*3)+(Math.random()-.5)*5, 2+Math.random()*7, (dz/mag)*(2+Math.random()*3)+(Math.random()-.5)*5)
      .setGravityScale(1.8).setLinearDamping(0.15))
    body.setAngvel({x:(Math.random()-.5)*14,y:(Math.random()-.5)*14,z:(Math.random()-.5)*14}, false)
    world.createCollider(RAPIER.ColliderDesc.cuboid(s/2,(s*.55)/2,(s*.5)/2).setRestitution(0.25).setFriction(0.4).setCollisionGroups(GRP_FRAG), body)
    const initLife = 1.4 + Math.random() * 0.8
    fragBodies.set(id, { body, life: initLife, initLife })
    ids.push(id)
  }
  return ids
}

// ── Step ───────────────────────────────────────────────────────────────────────

const FADE_RATE = 0.72

function step(dt: number, newPaddleX: number) {
  paddleX = newPaddleX
  pendingRemovals.length = 0
  paddleBody.setNextKinematicTranslation({ x: paddleX, y: arena.paddleHeight/2, z: arena.paddleZ })
  world.timestep = Math.min(dt, 1/30)
  world.step(eq)

  // Maintain ball speed
  if (ballBody) {
    const v = ballBody.linvel()
    const spd = Math.sqrt(v.x*v.x+v.y*v.y+v.z*v.z)
    if (spd > 0.01) { const s=targetSpeed/spd; ballBody.setLinvel({x:v.x*s,y:v.y*s,z:v.z*s},true) }
  }

  const brickHits: PhysicsState['brickHits'] = []

  eq.drainCollisionEvents((h1, h2, started) => {
    if (!started) return
    const isBall1 = h1 === ballCollHandle, isBall2 = h2 === ballCollHandle
    if (!isBall1 && !isBall2) return
    const other = isBall1 ? h2 : h1

    if (other === paddleCollHandle && ballBody) {
      const pos = ballBody.translation(), vel = ballBody.linvel()
      const offset = (pos.x - paddleX) / (arena.paddleWidth/2)
      const newVx = offset * targetSpeed * 0.65, newVz = -Math.abs(vel.z)
      const m = Math.sqrt(newVx*newVx+vel.y*vel.y+newVz*newVz)||1, s=targetSpeed/m
      ballBody.setLinvel({x:newVx*s,y:vel.y*s,z:newVz*s},true)
      return
    }

    const brickId = brickByHandle.get(other)
    if (brickId === undefined) return
    const brick = brickBodies.get(brickId)
    if (!brick) return

    brick.hp--
    if (brick.hp > 0) {
      // Armored brick survives — notify main thread but keep body
      brickHits.push({ brickId, destroyed: false, newFragmentIds: [] })
      return
    }

    // Destroyed
    const bPos = brick.body.translation()
    const ballP = ballBody ? ballBody.translation() : { x:0,y:0,z:0 }
    world.removeRigidBody(brick.body)
    brickBodies.delete(brickId); brickByHandle.delete(other)
    const fragIds = spawnFragments(bPos, ballP)
    brickHits.push({ brickId, destroyed: true, newFragmentIds: fragIds })
  })

  // Age fragments
  for (const [id, frag] of fragBodies) {
    frag.life -= dt * FADE_RATE
    if (frag.life <= 0) { world.removeRigidBody(frag.body); fragBodies.delete(id); pendingRemovals.push(id) }
  }

  const fragmentStates: FragmentState[] = []
  for (const [id, frag] of fragBodies) {
    const t = frag.body.translation(), r = frag.body.rotation()
    fragmentStates.push({ id, x:t.x,y:t.y,z:t.z, qx:r.x,qy:r.y,qz:r.z,qw:r.w, life:Math.max(0,frag.life/frag.initLife) })
  }

  let ball: PhysicsState['ball'] = null, ballLost = false
  if (ballBody) {
    const t = ballBody.translation()
    ball = { x:t.x, y:t.y, z:t.z }
    // Write to SAB for zero-copy main-thread read
    if (sabView) {
      sabView[SAB_LAYOUT.BALL_X] = t.x
      sabView[SAB_LAYOUT.BALL_Y] = t.y
      sabView[SAB_LAYOUT.BALL_Z] = t.z
    }
    if (t.z > arena.paddleZ + 3) { ballLost = true; removeBall() }
  }

  ctx.postMessage({ type:'state', ball, brickHits, fragmentStates, fragmentsRemoved:[...pendingRemovals], ballLost })
}

// ── Entry ─────────────────────────────────────────────────────────────────────

async function main() {
  try {
    await RAPIER.init()
  } catch (err) {
    ctx.postMessage({ type: 'error', message: String(err) })
    return
  }
  ctx.postMessage({ type: 'ready' })
  ctx.addEventListener('message', (e: MessageEvent) => {
    const msg = e.data as { type: string }
    switch (msg.type) {
      case 'setSAB':      sabView = new Float32Array((msg as any).buffer); break
      case 'init':        setupArena((msg as any).arena); break
      case 'loadBricks':  if (world) loadBricks((msg as any).bricks); break
      case 'removeBricks': if (world) removeBricks((msg as any).ids); break
      case 'healBricks':        if (world) healBricks((msg as any).bricks); break
      case 'setBrickCollider':  if (world) { const m=msg as any; setBrickCollider(m.id, m.enabled) } break
      case 'perturbBall':       if (world) perturbBall((msg as any).angleDeg); break
      case 'setGravityFlip':    if (world && ballBody) { const m=msg as any; const v=ballBody.linvel(); ballBody.setLinvel({x:m.flip?-v.x:v.x, y:m.flip?-Math.abs(v.y):v.y, z:v.z}, true) } break
      case 'launchBall':  if (world) { const m=msg as any; createBall(m.x,m.y,m.z,m.vx,m.vy,m.vz,m.speed,m.radius) } break
      case 'resetBall':   if (world) removeBall(); break
      case 'setSpeed':    targetSpeed = (msg as any).speed; break
      case 'step':        if (world) { const m=msg as any; step(m.dt, m.paddleX) } break
    }
  })
}
main()
