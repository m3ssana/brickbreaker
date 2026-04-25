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
import { Leaderboard } from './Leaderboard.js';
import * as Physics from './Physics.js';
import { BALL, LEADERBOARD, SCORING, STARTING_LIVES } from './Constants.js';

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
    this.leaderboard = new Leaderboard();

    this.input = new Input(this.scene3d.renderer.domElement, this.scene3d.camera, {
      onMove: (x) => this.paddle.setTargetX(x),
      onLaunch: () => this.handleLaunch()
    });

    this.hud.setScore(0);
    this.hud.setLevel(1);
    this.hud.setLives(STARTING_LIVES);

    // Warm the leaderboard cache then show it on the title screen
    if (LEADERBOARD.apiBase) {
      this.leaderboard.prefetch().then(scores => {
        // Only update the title overlay if we're still in IDLE state
        if (this.state === STATE.IDLE) this._showTitleOverlay(scores);
      });
    }
    this._showTitleOverlay(this.leaderboard.getCached());

    document.addEventListener('visibilitychange', () => {
      this._paused = document.hidden;
      if (!this._paused) this._lastTime = 0;
    });

    this._lastTime = performance.now();
    this._raf = requestAnimationFrame((t) => this._tick(t));
  }

  _showTitleOverlay(scores) {
    this.hud.showOverlay({
      title: 'NEON BREAK',
      body: 'Drag or use ← → to move the paddle. Tap or press Space to launch.',
      button: 'Tap to Play',
      leaderboard: scores.length ? scores : null
    });
    this.hud.bindStart(() => this.startGame());
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
      this.ball.syncMesh();
      this._processCollisions(result);
    } else {
      if (this.ball.attached) this.ball.followPaddle(this.paddle);
    }
  }

  _processCollisions(result) {
    if (result.paddleHit) {
      this.audio.paddleHit();
      this.particles.paddleSpark(this.ball.position.x, 0.1, this.ball.position.z, 0xffffff);
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

  async _handleGameOver() {
    this.state = STATE.GAME_OVER;
    const cachedScores = this.leaderboard.getCached();
    const qualifies = LEADERBOARD.apiBase && this.score > this.leaderboard.qualifyingScore();

    if (qualifies) {
      // Show name-entry overlay immediately; submit after player enters name
      this.hud.showOverlay({
        title: 'Game Over',
        stats: [
          { label: 'Score', value: this.score },
          { label: 'Level', value: this.level }
        ],
        leaderboard: cachedScores.length ? cachedScores : null,
        nameEntry: {
          onSubmit: async (name) => {
            const { scores } = await this.leaderboard.submit({ name, score: this.score, level: this.level });
            this.hud.showOverlay({
              title: 'Leaderboard',
              leaderboard: scores,
              button: 'Play Again'
            });
            this.hud.bindStart(() => this.startGame());
          }
        },
        button: 'Submit Score'
      });
    } else {
      // Score didn't qualify — just show the leaderboard and play-again
      const scores = LEADERBOARD.apiBase ? await this.leaderboard.fetchTop() : cachedScores;
      this.hud.showOverlay({
        title: 'Game Over',
        stats: [
          { label: 'Score', value: this.score },
          { label: 'Level', value: this.level }
        ],
        leaderboard: scores.length ? scores : null,
        button: 'Play Again'
      });
      this.hud.bindStart(() => this.startGame());
    }
  }

  async _handleVictory() {
    this.state = STATE.WON;
    const cachedScores = this.leaderboard.getCached();
    const qualifies = LEADERBOARD.apiBase && this.score > this.leaderboard.qualifyingScore();

    if (qualifies) {
      this.hud.showOverlay({
        title: 'You Won',
        stats: [
          { label: 'Final Score', value: this.score },
          { label: 'Levels', value: MAX_LEVEL }
        ],
        leaderboard: cachedScores.length ? cachedScores : null,
        nameEntry: {
          onSubmit: async (name) => {
            const { scores } = await this.leaderboard.submit({ name, score: this.score, level: this.level });
            this.hud.showOverlay({
              title: 'Leaderboard',
              leaderboard: scores,
              button: 'Play Again'
            });
            this.hud.bindStart(() => this.startGame());
          }
        },
        button: 'Submit Score'
      });
    } else {
      const scores = LEADERBOARD.apiBase ? await this.leaderboard.fetchTop() : cachedScores;
      this.hud.showOverlay({
        title: 'You Won',
        stats: [
          { label: 'Final Score', value: this.score },
          { label: 'Levels', value: MAX_LEVEL }
        ],
        leaderboard: scores.length ? scores : null,
        button: 'Play Again'
      });
      this.hud.bindStart(() => this.startGame());
    }
  }

  _maybeHaptic(kind) {
    if (!('vibrate' in navigator)) return;
    if (kind === 'light') navigator.vibrate(8);
    else if (kind === 'heavy') navigator.vibrate([20, 30, 20]);
  }
}
