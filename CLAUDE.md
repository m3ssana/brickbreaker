# Brick Breaker — Project Memory

## Infrastructure: Bicep only

All Azure infrastructure changes — new resources, configuration tweaks, app
settings, CORS origins, scaling — MUST be made by editing the Bicep templates
in `infra/` and merging to `main`. The `.github/workflows/deploy-infra.yml`
workflow applies the changes via `az deployment group create`.

Do NOT:
- Click through the Azure portal to change resources
- Run ad-hoc `az` commands that mutate resources outside `infra/`
- Commit any out-of-band drift fixes — fix the drift in Bicep, redeploy

If a manual investigation reveals drift, capture it in Bicep first, then redeploy.

## Repo layout

- `src/`, `index.html`, `vite.config.js` — Vite + Three.js game (deploys to GitHub Pages)
- `azure/` — Azure Functions code (Node.js 20, `@azure/functions` v4 model)
- `infra/` — Bicep templates for all Azure resources
- `.github/workflows/`
  - `deploy.yml` — site → GitHub Pages
  - `deploy-infra.yml` — Bicep → Azure resource group `rg-brickbreaker`
  - `deploy-api.yml` — Function App code → existing Function App (created by Bicep)

## Conventions

- Game runs entirely client-side except for the leaderboard API.
- The leaderboard API URL is hardcoded in `src/Constants.js` (not secret).
- The custom domain `brickbreaker.messana.ai` is set via `public/CNAME`.
- Cosmos DB free tier is already claimed in this subscription; the leaderboard
  uses **Azure Table Storage** (inside the same Storage Account as the
  Functions runtime). To add resources, edit `infra/main.bicep`.
