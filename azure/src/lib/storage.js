import { TableClient } from '@azure/data-tables';
import { DefaultAzureCredential } from '@azure/identity';

const accountName = process.env.STORAGE_ACCOUNT_NAME;
const tableName = process.env.SCORES_TABLE || 'scores';

// DefaultAzureCredential resolves to:
//   - System-assigned managed identity when running in Azure Functions
//   - `az login` / VS Code / Azure CLI credentials during local development
// No key or connection string needed.
let _client;
export function getClient() {
  if (!_client) {
    const endpoint = `https://${accountName}.table.core.windows.net`;
    _client = new TableClient(endpoint, tableName, new DefaultAzureCredential());
  }
  return _client;
}

export const PARTITION = 'global';
export const TOP_N = 5;

/**
 * Return all current scores sorted by score desc.
 */
export async function listScores() {
  const client = getClient();
  const entities = [];
  for await (const e of client.listEntities({ queryOptions: { filter: `PartitionKey eq '${PARTITION}'` } })) {
    entities.push({ rowKey: e.rowKey, name: e.name, score: e.score, level: e.level, createdAt: e.createdAt });
  }
  entities.sort((a, b) => b.score - a.score);
  return entities;
}

/**
 * Insert a score and trim the table to the top N.
 * Returns the updated top-N list, or null if the score didn't qualify.
 */
export async function insertScore({ name, score, level }) {
  const client = getClient();
  const current = await listScores();

  if (current.length >= TOP_N && score <= current[current.length - 1].score) {
    return null;
  }

  const rowKey = crypto.randomUUID();
  await client.createEntity({
    partitionKey: PARTITION,
    rowKey,
    name,
    score,
    level,
    createdAt: new Date().toISOString()
  });

  const updated = await listScores();
  const excess = updated.slice(TOP_N);
  for (const e of excess) {
    await client.deleteEntity(PARTITION, e.rowKey);
  }

  return updated.slice(0, TOP_N);
}
