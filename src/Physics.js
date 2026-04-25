import { ARENA, BALL, PADDLE } from './Constants.js';

/**
 * Step the ball through one frame, resolving collisions with walls, paddle, and bricks.
 *
 * Returns: { brickHits: [...], lostBall: bool, paddleHit: bool, wallHits: number }
 * Each brickHit = { brick, normal: {x,z}, point: {x,y,z} }
 */
export function step(ball, paddle, bricks, dt) {
  const result = {
    brickHits: [],
    lostBall: false,
    paddleHit: false,
    wallHits: 0
  };

  if (ball.attached) return result;

  // Substep the motion so we never tunnel through a brick at high speed.
  const distance = Math.hypot(ball.velocity.x, ball.velocity.z) * dt;
  const maxStep = BALL.radius * 0.4;
  const steps = Math.max(1, Math.ceil(distance / maxStep));
  const stepDt = dt / steps;

  for (let i = 0; i < steps; i++) {
    ball.position.x += ball.velocity.x * stepDt;
    ball.position.z += ball.velocity.z * stepDt;

    // Side walls (X)
    const limX = ARENA.halfWidth - BALL.radius;
    if (ball.position.x < -limX) {
      ball.position.x = -limX;
      ball.velocity.x = Math.abs(ball.velocity.x);
      result.wallHits++;
    } else if (ball.position.x > limX) {
      ball.position.x = limX;
      ball.velocity.x = -Math.abs(ball.velocity.x);
      result.wallHits++;
    }

    // Back wall (Z far)
    const limZBack = -ARENA.halfDepth + BALL.radius;
    if (ball.position.z < limZBack) {
      ball.position.z = limZBack;
      ball.velocity.z = Math.abs(ball.velocity.z);
      result.wallHits++;
    }

    // Paddle collision (sphere vs AABB)
    const pad = paddle.getAABB();
    const closest = closestPointOnAABB(ball.position.x, ball.position.z, pad);
    const dx = ball.position.x - closest.x;
    const dz = ball.position.z - closest.z;
    const distSq = dx * dx + dz * dz;

    if (distSq < BALL.radius * BALL.radius && ball.velocity.z > 0) {
      // Compute hit position offset from paddle center for english
      const offset = (ball.position.x - paddle.x) / (PADDLE.width / 2);
      const clamped = Math.max(-1.05, Math.min(1.05, offset));
      // New direction: angle from straight up, biased by hit offset (±60°)
      const angleFromUp = clamped * (Math.PI / 3);
      const speed = Math.hypot(ball.velocity.x, ball.velocity.z);
      ball.velocity.x = Math.sin(angleFromUp) * speed;
      ball.velocity.z = -Math.cos(angleFromUp) * speed;
      ball.position.z = pad.minZ - BALL.radius - 0.001;
      ball.normalizeSpeed();
      result.paddleHit = true;
    }

    // Brick collisions — find ALL bricks the ball overlaps this substep, hit the closest first
    // (it's rare to hit two in one substep but possible; resolve them sequentially)
    let safety = 4;
    while (safety-- > 0) {
      let nearest = null;
      let nearestDistSq = Infinity;

      for (const brick of bricks.bricks) {
        if (brick.destroyed) continue;
        const aabb = brickAABB(brick);
        const cp = closestPointOnAABB(ball.position.x, ball.position.z, aabb);
        const ddx = ball.position.x - cp.x;
        const ddz = ball.position.z - cp.z;
        const d2 = ddx * ddx + ddz * ddz;
        if (d2 < BALL.radius * BALL.radius && d2 < nearestDistSq) {
          nearest = { brick, aabb, cp, d2 };
          nearestDistSq = d2;
        }
      }

      if (!nearest) break;

      const { brick, aabb, cp } = nearest;

      // Determine collision normal
      let nx = ball.position.x - cp.x;
      let nz = ball.position.z - cp.z;
      let nlen = Math.hypot(nx, nz);

      // If the ball center is *inside* the AABB, closest point equals the center → no normal.
      // Pick the axis with the smallest penetration to push out.
      if (nlen < 0.0001) {
        const penLeft = ball.position.x - aabb.minX;
        const penRight = aabb.maxX - ball.position.x;
        const penFront = ball.position.z - aabb.minZ;
        const penBack = aabb.maxZ - ball.position.z;
        const minPen = Math.min(penLeft, penRight, penFront, penBack);
        if (minPen === penLeft) { nx = -1; nz = 0; }
        else if (minPen === penRight) { nx = 1; nz = 0; }
        else if (minPen === penFront) { nx = 0; nz = -1; }
        else { nx = 0; nz = 1; }
        nlen = 1;
      } else {
        nx /= nlen;
        nz /= nlen;
      }

      // Push ball out along the normal
      const pen = BALL.radius - nlen;
      ball.position.x += nx * (pen + 0.001);
      ball.position.z += nz * (pen + 0.001);

      // Reflect velocity
      const vDotN = ball.velocity.x * nx + ball.velocity.z * nz;
      if (vDotN < 0) {
        ball.velocity.x -= 2 * vDotN * nx;
        ball.velocity.z -= 2 * vDotN * nz;
      }

      result.brickHits.push({
        brick,
        normal: { x: nx, z: nz },
        point: { x: cp.x, y: ball.position.y, z: cp.z }
      });
    }

    // Kill plane (paddle missed)
    if (ball.position.z > PADDLE.killZ) {
      result.lostBall = true;
      break;
    }
  }

  return result;
}

function closestPointOnAABB(x, z, aabb) {
  return {
    x: Math.max(aabb.minX, Math.min(aabb.maxX, x)),
    z: Math.max(aabb.minZ, Math.min(aabb.maxZ, z))
  };
}

function brickAABB(brick) {
  const hw = brick.width / 2;
  const hd = brick.depth / 2;
  return {
    minX: brick.x - hw,
    maxX: brick.x + hw,
    minZ: brick.z - hd,
    maxZ: brick.z + hd
  };
}
