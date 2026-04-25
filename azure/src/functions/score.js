import { app } from '@azure/functions';
import { insertScore, listScores } from '../lib/storage.js';
import { validateSubmission, clientIp } from '../lib/validate.js';

app.http('score', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'score',
  handler: async (req, context) => {
    let body;
    try {
      body = await req.json();
    } catch {
      return { status: 400, body: 'Invalid JSON' };
    }

    const ip = clientIp(req);
    const result = validateSubmission(body, ip);
    if (typeof result === 'string') {
      return { status: 400, body: result };
    }

    try {
      const updated = await insertScore(result);
      if (updated === null) {
        // Score didn't qualify — return current top-5 anyway so the client can display it
        const current = await listScores();
        return {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ qualified: false, scores: current.map(({ name, score, level }) => ({ name, score, level })) })
        };
      }
      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qualified: true, scores: updated.map(({ name, score, level }) => ({ name, score, level })) })
      };
    } catch (err) {
      context.error('POST /score failed:', err);
      return { status: 500, body: 'Internal server error' };
    }
  }
});
