const MAX_SCORE = 1_000_000;
const MAX_LEVEL = 6;
const MAX_NAME_LEN = 12;
// In-memory rate limit: { ip → lastSubmitMs }
const rateLimitMap = new Map();
const RATE_LIMIT_MS = 5000;

export function validateSubmission(body, clientIp) {
  if (!body || typeof body !== 'object') return 'Invalid body';

  let { name, score, level } = body;

  // Rate limit
  const now = Date.now();
  const last = rateLimitMap.get(clientIp);
  if (last && now - last < RATE_LIMIT_MS) return 'Rate limited — wait 5 seconds';
  rateLimitMap.set(clientIp, now);

  // Score
  score = Number(score);
  if (!Number.isInteger(score) || score < 0 || score > MAX_SCORE) return 'Invalid score';

  // Level
  level = Number(level);
  if (!Number.isInteger(level) || level < 1 || level > MAX_LEVEL) return 'Invalid level';

  // Name — sanitize, don't reject
  name = String(name ?? '').trim().replace(/[^A-Za-z0-9 _\-]/g, '').slice(0, MAX_NAME_LEN).trim();
  if (!name) name = 'ANON';

  return { name, score, level };
}

export function clientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('client-ip') ||
    'unknown'
  );
}
