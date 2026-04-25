import * as THREE from 'three';
import { Scene } from './Scene.js';
import { Arena } from './Arena.js';
import { Paddle } from './Paddle.js';
import { Ball } from './Ball.js';
import { Bricks } from './Bricks.js';
import { Particles } from './Particles.js';
import { HUD } from './HUD.js';
import { Audio } from './Audio.js';
import { Input } from './Input.js';
import * as Physics from './Physics.js';
import { BALL, BRICKS, PADDLE, SCORING, STARTING_LIVES } from './Constants.js';

const STATE = {
  IDLE: 'idle',
  READY: 'ready',
  PLAYING: 'playing',
  LEVEL_CLEAR: 'levelClear',
  GAME_OVER: 'gameOver',
  WON: 'won'
};

const MAX_LEVEL = 6;

export class Game {
  constructor(container) {
    this.container = container;
    this.state = STATE.IDLE;

    this.score = 0;
    this.lives = STARTING_LIVES;
    this.level = 1;
    this.peakScore = 0;

    this._lastTime = 0;
    this._raf = 0;
    this._paused = false;
  }

  init() {
    this.scene3d = new Scene(this.container);
    this.arena = new Arena(this.scene3d.scene);
    this.paddle = new Paddle(this.scene3d.scene);
    this.ball = new Ball(this.scene3d.scene);
    this.bricks = new Bricks(this.scene3d.scene);
    this.particles = new Particles(this.scene3d.scene);
    this.hud = new HUD();
    this.audio = new Audio();

    this.input = new Input(this.scene3d.renderer.domElement, this.scene3d.camera, {
      onMove: (x) => this.paddle.setTargetX(x),
      onLaunch: () => this.handleLaunch()
    });

    this.hud.setScore(0);
    this.hud.setLevel(1);
    this.hud.setLives(STARTING_LIVES);
    this.hud.bindStart(() => this.startGame());

    document.addEventListener('visibilitychange', () => {
      this._paused = document.hidden;
      if (!this._paused) this._lastTime = 0; // avoid huge dt on resume
    });

    this._lastTime = performance.now();
    this._raf = requestAnimationFrame((t) => this._tick(t));
  }

  startGame() {
    this.audio.unlock();
    this.audio.launch();
    this.score = 0;
    this.lives = STARTING_LIVES;
    this.level = 1;
    this.hud.setScore(0);
    this.hud.setLevel(1);
    this.hud.setLives(this.lives);
    this.hud.hideOverlay();

    this._buildLevel();
    this._readyBall();
    this.state = STATE.READY;
  }

  _buildLevel() {
    this.bricks.build(this.level);
    this.ball.setSpeed(BALL.startSpeed + (this.level - 1) * BALL.speedPerLevel);
  }

  _readyBall() {
    this.paddle.setX(0);
    this.input.setPaddleX(0);
    this.ball.attachToPaddle(this.paddle);
    this.hud.showToast(`Level ${this.level}`, 1000);
  }

  handleLaunch() {
    if (this.state === STATE.IDLE) {
      this.startGame();
      return;
    }
    if (this.state === STATE.READY) {
      this.ball.launch();
      this.audio.launch();
      this.state = STATE.PLAYING;
    }
  }

  _tick(now) {
    this._raf = requestAnimationFrame((t) => this._tick(t));
    if (this._paused) {
      this._lastTime = now;
      this.scene3d.render();
      return;
    }
    if (!this._lastTime) this._lastTime = now;
    let dt = (now - this._lastTime) / 1000;
    this._lastTime = now;
    if (dt > 0.05) dt = 0.05;

    this._update(dt);
    this.scene3d.render();
  }

  _update(dt) {
    this.input.setPaddleX(this.paddle.x);
    this.input.tickKeyboard(dt);
    this.paddle.update(dt);
    this.arena.update(dt);
    this.bricks.update(dt);
    this.particles.update(dt);

    if (this.state === STATE.READY) {
      this.ball.followPaddle(this.paddle);
    } else if (this.state === STATE.PLAYING) {
      const result = Physics.step(this.ball, this.paddle, this.bricks, dt);
      this._processCollisions(result);
    } else {
      // IDLE / LEVEL_CLEAR / GAME_OVER / WON — let the ball idle on the paddle if attached
      if (this.ball.attached) this.ball.followPaddle(this.paddle);
    }
  }

  _processCollisions(result) {
    if (result.paddleHit) {
      this.audio.paddleHit();
      this.particles.paddleSpark(this.ball.position.x, 0.1, this.ball.position.z, 0xffffff);
      // Slight speed-up over the course of a level — keeps tension growing
      this.ball.setSpeed(Math.min(BALL.maxSpeed, this.ball.speed + 0.08));
    }
    if (result.wallHits > 0) {
      this.audio.wallHit();
    }
    if (result.brickHits.length) {
      for (const hit of result.brickHits) {
        const { brick, point } = hit;
        if (brick.destroyed) continue;
        const color = brick.color;
        const r = this.bricks.hit(brick);
        this.audio.brickHit(r.destroyed);
        if (r.destroyed) {
          this.particles.burst(point.x, 0.4, point.z, color, 22);
        } else {
          this.particles.paddleSpark(point.x, 0.4, point.z, color);
        }
        this.score += r.scoreDelta;
      }
      this.hud.setScore(this.score);
      this._maybeHaptic('light');

      if (this.bricks.remainingCount() === 0) {
        this._handleLevelClear();
      }
    }

    if (result.lostBall) {
      this._handleLostBall();
    }
  }

  _handleLevelClear() {
    this.score += SCORING.levelClearBonus;
    this.hud.setScore(this.score);
    this.audio.levelClear();
    this.hud.showToast('Level Clear', 1200);
    this.state = STATE.LEVEL_CLEAR;

    setTimeout(() => {
      if (this.level >= MAX_LEVEL) {
        this._handleVictory();
      } else {
        this.level += 1;
        this.hud.setLevel(this.level);
        this._buildLevel();
        this._readyBall();
        this.state = STATE.READY;
      }
    }, 1300);
  }

  _handleLostBall() {
    this.lives -= 1;
    this.hud.setLives(this.lives);
    this.audio.loseLife();
    this.arena.flashBaseline(0.6);
    this._maybeHaptic('heavy');

    if (this.lives <= 0) {
      this._handleGameOver();
    } else {
      this.state = STATE.READY;
      this._readyBall();
    }
  }

  _handleGameOver() {
    this.state = STATE.GAME_OVER;
    this.hud.showOverlay({
      title: 'Game Over',
      body: 'The ball got away. Try again?',
      button: 'Play Again',
      stats: [
        { label: 'Score', value: this.score },
        { label: 'Level', value: this.level }
      ]
    });
    this.hud.bindStart(() => this.startGame());
  }

  _handleVictory() {
    this.state = STATE.WON;
    this.hud.showOverlay({
      title: 'You Won',
      body: 'Every brick shattered. Top run?',
      button: 'Play Again',
      stats: [
        { label: 'Final Score', value: this.score },
        { label: 'Levels', value: MAX_LEVEL }
      ]
    });
    this.hud.bindStart(() => this.startGame());
  }

  _maybeHaptic(kind) {
    if (!('vibrate' in navigator)) return;
    if (kind === 'light') navigator.vibrate(8);
    else if (kind === 'heavy') navigator.vibrate([20, 30, 20]);
  }
}
