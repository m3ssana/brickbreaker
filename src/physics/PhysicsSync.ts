import type { ArenaConfig, BrickDef, BrickHealDef, PhysicsState } from './types'
export type { ArenaConfig, BrickDef, BrickHealDef, PhysicsState }
export type { FragmentState } from './types'
import { SharedStateBuffer } from './SharedStateBuffer'

export class PhysicsSync {
  private _worker: Worker
  private _ready = false
  private _queue: unknown[] = []
  private _stateHandler: ((s: PhysicsState) => void) | null = null
  readonly sab: SharedStateBuffer

  constructor() {
    this.sab = new SharedStateBuffer()
    this._worker = new Worker(new URL('./PhysicsWorker.ts', import.meta.url), { type: 'module' })
    this._worker.onmessage = (e: MessageEvent) => this._onMessage(e.data)
  }

  init(arena: ArenaConfig): Promise<void> {
    return new Promise((resolve, reject) => {
      const onReady = (e: MessageEvent) => {
        const msg = e.data as { type: string; message?: string }
        if (msg.type === 'error') {
          this._worker.removeEventListener('message', onReady)
          reject(new Error(`PhysicsWorker: ${msg.message}`))
          return
        }
        if (msg.type !== 'ready') return
        this._worker.removeEventListener('message', onReady)
        this._ready = true
        // Share SAB with worker when available
        if (this.sab.available) {
          this._worker.postMessage({ type: 'setSAB', buffer: this.sab.buffer })
        }
        this._send({ type: 'init', arena })
        this._flush()
        resolve()
      }
      this._worker.addEventListener('message', onReady)
      // Also catch low-level worker errors (syntax errors, failed imports, etc.)
      this._worker.onerror = (ev) => {
        reject(new Error(`PhysicsWorker onerror: ${ev.message}`))
      }
    })
  }

  set onState(fn: (s: PhysicsState) => void) { this._stateHandler = fn }

  loadBricks(bricks: BrickDef[])     { this._send({ type: 'loadBricks', bricks }) }
  removeBricks(ids: number[])        { this._send({ type: 'removeBricks', ids }) }
  healBricks(bricks: BrickHealDef[]) { this._send({ type: 'healBricks', bricks }) }
  setBrickColliderEnabled(id: number, enabled: boolean) { this._send({ type: 'setBrickCollider', id, enabled }) }
  perturbBall(angleDeg: number) { this._send({ type: 'perturbBall', angleDeg }) }
  setGravityFlip(flip: boolean) { this._send({ type: 'setGravityFlip', flip }) }
  launchBall(x:number,y:number,z:number,vx:number,vy:number,vz:number,speed:number,radius:number) {
    this._send({ type:'launchBall', x,y,z,vx,vy,vz,speed,radius })
  }
  resetBall()         { this._send({ type: 'resetBall' }) }
  setSpeed(s:number)  { this._send({ type: 'setSpeed', speed: s }) }
  step(dt:number, paddleX:number) { this._send({ type:'step', dt, paddleX }) }

  private _send(msg: unknown) {
    if (this._ready) this._worker.postMessage(msg)
    else this._queue.push(msg)
  }
  private _flush() { for (const m of this._queue) this._worker.postMessage(m); this._queue = [] }
  private _onMessage(data: unknown) {
    if ((data as {type:string}).type === 'state') this._stateHandler?.(data as unknown as PhysicsState)
  }
}
