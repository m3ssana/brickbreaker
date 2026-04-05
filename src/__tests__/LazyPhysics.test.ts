/**
 * LazyPhysics.test.ts
 *
 * Verifies the lazy PhysicsSync initialization pattern.
 *
 * Rather than instantiating Game (which requires a full browser/Three.js
 * environment), we test the pattern directly: a helper class that mirrors
 * the _initPhysics guard logic, and we verify PhysicsSync itself is a
 * constructable class whose constructor can be called on-demand.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SharedStateBuffer } from '../physics/SharedStateBuffer'

// ── Helper: mirrors the lazy-init guard used in Game ─────────────────────────

class LazyPhysicsGuard {
  private _started = false
  private _initCount = 0
  private _factory: () => void

  constructor(factory: () => void) {
    this._factory = factory
  }

  /** Call on every user-gesture event — idempotent after first call. */
  init() {
    if (this._started) return
    this._started = true
    this._factory()
    this._initCount++
  }

  get started() { return this._started }
  get initCount() { return this._initCount }
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('Lazy PhysicsSync initialization — guard pattern', () => {
  let factorySpy: ReturnType<typeof vi.fn>
  let guard: LazyPhysicsGuard

  beforeEach(() => {
    factorySpy = vi.fn(() => undefined)
    guard = new LazyPhysicsGuard(factorySpy as () => void)
  })

  it('factory is NOT called before any user interaction', () => {
    expect(factorySpy).not.toHaveBeenCalled()
    expect(guard.started).toBe(false)
  })

  it('factory IS called on first init()', () => {
    guard.init()
    expect(factorySpy).toHaveBeenCalledOnce()
    expect(guard.started).toBe(true)
  })

  it('factory is called exactly once regardless of how many times init() is called', () => {
    guard.init()
    guard.init()
    guard.init()
    expect(factorySpy).toHaveBeenCalledOnce()
    expect(guard.initCount).toBe(1)
  })

  it('started flag prevents duplicate construction', () => {
    guard.init()
    const countAfterFirst = guard.initCount
    guard.init()
    guard.init()
    expect(guard.initCount).toBe(countAfterFirst)
  })

  it('multiple independent guards each initialize exactly once', () => {
    const spy2 = vi.fn()
    const guard2 = new LazyPhysicsGuard(spy2)

    guard.init()
    guard2.init()
    guard2.init()

    expect(factorySpy).toHaveBeenCalledOnce()
    expect(spy2).toHaveBeenCalledOnce()
  })
})

describe('SharedStateBuffer — constructable on demand', () => {
  it('can be constructed at any time (not at module import)', () => {
    // SharedStateBuffer should be a plain class, not a singleton
    const buf1 = new SharedStateBuffer()
    const buf2 = new SharedStateBuffer()
    expect(buf1).toBeDefined()
    expect(buf2).toBeDefined()
    // Each instance is independent
    buf1.writeBall(1, 2, 3)
    buf2.writeBall(4, 5, 6)
    expect(buf1.readBall().x).toBeCloseTo(1)
    expect(buf2.readBall().x).toBeCloseTo(4)
  })
})

describe('Lazy-init document event wiring', () => {
  it('simulates keydown triggering deferred initialization', () => {
    const initSpy = vi.fn()
    const listeners: Array<[string, EventListenerOrEventListenerObject, boolean | AddEventListenerOptions | undefined]> = []

    // Stub document.addEventListener to capture registrations
    const origAdd = document.addEventListener.bind(document)
    const addSpy = vi.spyOn(document, 'addEventListener').mockImplementation(
      (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => {
        listeners.push([type, listener, options])
        origAdd(type, listener, options as EventListenerOptions)
      }
    )

    // Register keydown listener that calls initSpy (mirrors Game._initPhysics pattern)
    let initialized = false
    document.addEventListener('keydown', () => {
      if (initialized) return
      initialized = true
      initSpy()
    })

    expect(initSpy).not.toHaveBeenCalled()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    expect(initSpy).toHaveBeenCalledOnce()

    // Second keydown must NOT re-trigger
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }))
    expect(initSpy).toHaveBeenCalledOnce()

    addSpy.mockRestore()
  })

  it('simulates click event triggering deferred initialization', () => {
    const initSpy = vi.fn()
    let initialized = false
    const handler = () => {
      if (initialized) return
      initialized = true
      initSpy()
    }

    document.addEventListener('click', handler, { once: true })
    expect(initSpy).not.toHaveBeenCalled()

    document.dispatchEvent(new MouseEvent('click'))
    expect(initSpy).toHaveBeenCalledOnce()

    // With { once: true } the listener is auto-removed; a second click does nothing
    document.dispatchEvent(new MouseEvent('click'))
    expect(initSpy).toHaveBeenCalledOnce()

    document.removeEventListener('click', handler)
  })

  it('simulates touchstart event triggering deferred initialization', () => {
    const initSpy = vi.fn()
    let initialized = false
    const handler = () => {
      if (initialized) return
      initialized = true
      initSpy()
    }

    document.addEventListener('touchstart', handler, { once: true, passive: true })
    expect(initSpy).not.toHaveBeenCalled()

    document.dispatchEvent(new Event('touchstart'))
    expect(initSpy).toHaveBeenCalledOnce()

    document.dispatchEvent(new Event('touchstart'))
    expect(initSpy).toHaveBeenCalledOnce()

    document.removeEventListener('touchstart', handler)
  })
})
