import * as THREE from 'three';
import { ARENA, PADDLE } from './Constants.js';

const KEYBOARD_PADDLE_SPEED = 14; // world units per second

/**
 * Touch / mouse / keyboard input.
 *
 * Pointer: drag-anywhere relative paddle movement. A short tap with no
 * meaningful drag is a launch. The drag threshold is large enough that a
 * mouse click with a few pixels of jitter still registers as a tap.
 *
 * Keyboard: ArrowLeft/A and ArrowRight/D move the paddle. Space/Enter/ArrowUp
 * launches the ball.
 */
export class Input {
  constructor(canvas, camera, callbacks = {}) {
    this.canvas = canvas;
    this.camera = camera;
    this.onLaunch = callbacks.onLaunch || (() => {});
    this.onMove = callbacks.onMove || (() => {});

    this._raycaster = new THREE.Raycaster();
    this._floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this._tmpV = new THREE.Vector2();
    this._tmpHit = new THREE.Vector3();

    this.dragging = false;
    this.dragStartX = 0;
    this.dragStartTime = 0;
    this.dragStartPaddleX = 0;
    this.dragMoved = false;
    this.currentPaddleX = 0;

    this.keys = { left: false, right: false };

    canvas.addEventListener('pointerdown', this.#onDown, { passive: false });
    canvas.addEventListener('pointermove', this.#onMove, { passive: false });
    canvas.addEventListener('pointerup', this.#onUp, { passive: false });
    canvas.addEventListener('pointercancel', this.#onUp, { passive: false });

    canvas.addEventListener('gesturestart', e => e.preventDefault());
    canvas.addEventListener('contextmenu', e => e.preventDefault());

    window.addEventListener('keydown', this.#onKeyDown);
    window.addEventListener('keyup', this.#onKeyUp);
  }

  setPaddleX(x) {
    this.currentPaddleX = x;
  }

  /**
   * Apply continuous keyboard movement to the paddle target. Called once per
   * frame from Game.update so it composes naturally with mouse drag (whichever
   * input ran most recently wins).
   */
  tickKeyboard(dt) {
    if (!this.keys.left && !this.keys.right) return;
    const dir = (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0);
    if (dir === 0) return;
    const target = this.currentPaddleX + dir * KEYBOARD_PADDLE_SPEED * dt;
    this.onMove(target);
  }

  #screenToWorldX(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this._tmpV.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this._tmpV.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
    this._raycaster.setFromCamera(this._tmpV, this.camera);
    if (this._raycaster.ray.intersectPlane(this._floorPlane, this._tmpHit)) {
      return this._tmpHit.x;
    }
    return null;
  }

  #onDown = (e) => {
    e.preventDefault();
    this.canvas.setPointerCapture?.(e.pointerId);
    const worldX = this.#screenToWorldX(e.clientX, e.clientY);
    if (worldX === null) return;
    this.dragging = true;
    this.dragMoved = false;
    this.dragStartX = worldX;
    this.dragStartPaddleX = this.currentPaddleX;
    this.dragStartTime = performance.now();
  };

  #onMove = (e) => {
    if (!this.dragging) return;
    e.preventDefault();
    const worldX = this.#screenToWorldX(e.clientX, e.clientY);
    if (worldX === null) return;

    const dx = worldX - this.dragStartX;
    // 0.25 world units ≈ ~30 px on a typical desktop view, ~18 px on a phone
    if (Math.abs(dx) > 0.25) this.dragMoved = true;

    const target = this.dragStartPaddleX + dx;
    this.onMove(target);
  };

  #onUp = (e) => {
    e.preventDefault();
    this.canvas.releasePointerCapture?.(e.pointerId);
    if (!this.dragging) return;
    const elapsed = performance.now() - this.dragStartTime;
    const wasTap = !this.dragMoved && elapsed < 400;
    this.dragging = false;
    if (wasTap) this.onLaunch();
  };

  #onKeyDown = (e) => {
    // Don't capture keys when the user is typing in an input/textarea
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

    if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
      this.keys.left = true;
      e.preventDefault();
    } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
      this.keys.right = true;
      e.preventDefault();
    } else if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowUp' || e.code === 'KeyW') {
      // ignore key repeat — only the initial press launches
      if (e.repeat) return;
      e.preventDefault();
      this.onLaunch();
    }
  };

  #onKeyUp = (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
  };
}
