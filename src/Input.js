import * as THREE from 'three';
import { ARENA, PADDLE } from './Constants.js';

/**
 * Touch / mouse input that maps screen coordinates to a paddle X target.
 *
 * The trick on mobile: when the user first touches anywhere on screen, do NOT
 * snap the paddle to that screen X (jarring). Instead, treat the first touch
 * as the anchor and apply *relative* drag from there. The game also accepts
 * "tap to launch" — a quick tap (no drag) launches the ball.
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

    canvas.addEventListener('pointerdown', this.#onDown, { passive: false });
    canvas.addEventListener('pointermove', this.#onMove, { passive: false });
    canvas.addEventListener('pointerup', this.#onUp, { passive: false });
    canvas.addEventListener('pointercancel', this.#onUp, { passive: false });

    // prevent gestures
    canvas.addEventListener('gesturestart', e => e.preventDefault());
    canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  setPaddleX(x) {
    this.currentPaddleX = x;
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
    if (Math.abs(dx) > 0.04) this.dragMoved = true;

    // Relative drag: paddle moves by the same world-X offset as the finger.
    const target = this.dragStartPaddleX + dx;
    this.onMove(target);
  };

  #onUp = (e) => {
    e.preventDefault();
    this.canvas.releasePointerCapture?.(e.pointerId);
    if (!this.dragging) return;
    const elapsed = performance.now() - this.dragStartTime;
    const wasTap = !this.dragMoved && elapsed < 350;
    this.dragging = false;
    if (wasTap) this.onLaunch();
  };
}
