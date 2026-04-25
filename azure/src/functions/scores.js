import { app } from '@azure/functions';
import { listScores } from '../lib/storage.js';

app.http('scores', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'scores',
  handler: async (_req, context) => {
    try {
      const scores = await listScores();
      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scores.map(({ name, score, level }) => ({ name, score, level })))
      };
    } catch (err) {
      context.error('GET /scores failed:', err);
      return { status: 500, body: 'Internal server error' };
    }
  }
});
