# Brick Breaker — Project Memory

## Infrastructure: Bicep only

All Azure infrastructure changes — new resources, configuration tweaks, app
settings, CORS origins, scaling — MUST be made by editing the Bicep templates
in `infra/` and merging to `main`.

`deploy-infra.yml` is **manual-only** (`workflow_dispatch`) — it does NOT trigger
on push. To deploy infra changes, either:
- Run `az deployment group create --resource-group rg-brickbreaker --template-file infra/main.bicep --parameters infra/main.parameters.json --mode Incremental` locally, or
- Trigger the workflow from the GitHub Actions UI.

Do NOT:
- Click through the Azure portal to change resources
- Run ad-hoc `az` commands that mutate resources outside `infra/`
- Commit any out-of-band drift fixes — fix the drift in Bicep, redeploy
- Add `WEBSITE_RUN_FROM_PACKAGE` back to Bicep app settings — it conflicts with the Kudu zip deploy used by `deploy-api.yml`

If a manual investigation reveals drift, capture it in Bicep first, then redeploy.

## Repo layout

- `src/`, `index.html`, `vite.config.js` — Vite + Three.js game (deploys to GitHub Pages)
- `azure/` — Azure Functions code (Node.js 20, `@azure/functions` v4 model)
- `infra/` — Bicep templates for all Azure resources
- `.github/workflows/`
  - `deploy.yml` — site → GitHub Pages
  - `deploy-infra.yml` — Bicep → Azure resource group `rg-brickbreaker` (**manual `workflow_dispatch` only**)
  - `deploy-api.yml` — Function App code → existing Function App via Kudu publish profile (triggers on `azure/**` push)

## Conventions

- Game runs entirely client-side except for the leaderboard API.
- The leaderboard API URL is hardcoded in `src/Constants.js` (not secret).
- The custom domain `brickbreaker.messana.ai` is set via `public/CNAME`.
- Cosmos DB free tier is already claimed in this subscription; the leaderboard
  uses **Azure Table Storage** (inside the same Storage Account as the
  Functions runtime). To add resources, edit `infra/main.bicep`.

## GitHub Actions secrets

- `AZURE_FUNCTIONAPP_PUBLISH_PROFILE` — Kudu publish credentials for `func-brickbreaker-7vm2njc4`. Used by `deploy-api.yml`. No service principal needed.
- There is no `AZURE_CREDENTIALS` secret — a service principal cannot be created due to tenant Conditional Access policy. Infra deployments are done manually (see above).

## Azure resources

- Resource group: `rg-brickbreaker`
- Function App: `func-brickbreaker-7vm2njc4` (Node.js 20, Linux Consumption)
- Storage Account: `stbrickbreaker7vm2njc4` (hosts both Functions runtime blobs and the `scores` Table Storage table)
- Function App uses a **system-assigned managed identity** with `Storage Table Data Contributor` role on the storage account — no storage key in app settings for leaderboard access.
