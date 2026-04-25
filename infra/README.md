# Infrastructure

All Azure resources are defined in `main.bicep` and deployed via
`.github/workflows/deploy-infra.yml`. **Do not change resources via the portal
or ad-hoc `az` commands** — see `CLAUDE.md` at the repo root.

## Resources

| Resource | Type | Notes |
| --- | --- | --- |
| Storage Account | Standard LRS | Shared by Functions runtime and leaderboard table |
| Table `scores` | Azure Table Storage | Top-5 leaderboard (partition key `global`) |
| App Service Plan | Consumption (Y1 Linux) | Always-free tier |
| Function App | Node.js 20 Linux | CORS pre-configured by Bicep |

Cosmos DB free tier is already claimed in this subscription — Table Storage
is the data layer instead.

## First-time bootstrap (run once, then everything flows through CI)

```bash
# 1. Create resource group
az group create --name rg-brickbreaker --location eastus

# 2. Create service principal with Contributor rights on the resource group
az ad sp create-for-rbac \
  --name sp-brickbreaker \
  --role contributor \
  --scopes /subscriptions/$(az account show --query id -o tsv)/resourceGroups/rg-brickbreaker \
  --sdk-auth
# Copy the full JSON output → store as GitHub secret AZURE_CREDENTIALS

# 3. Trigger the infra workflow (or push a change to infra/)
gh workflow run deploy-infra.yml --repo m3ssana/brickbreaker

# 4. Grab the Function App hostname from the deployment output
az deployment group show \
  --resource-group rg-brickbreaker \
  --name main \
  --query properties.outputs.functionAppHostname.value -o tsv
# Paste this value into src/Constants.js → LEADERBOARD.apiBase

# 5. Set the Function App name as a repo variable so deploy-api.yml can use it
FUNCNAME=$(az deployment group show \
  --resource-group rg-brickbreaker --name main \
  --query properties.outputs.functionAppName.value -o tsv)
gh variable set FUNCTION_APP_NAME --body "$FUNCNAME" --repo m3ssana/brickbreaker
```

## Making infra changes

1. Edit `infra/main.bicep` (and/or `infra/main.parameters.json`)
2. Run `az bicep build --file infra/main.bicep` locally to validate syntax
3. Preview: `az deployment group what-if --resource-group rg-brickbreaker --template-file infra/main.bicep --parameters infra/main.parameters.json`
4. Merge to `main` → `deploy-infra.yml` applies the changes automatically
