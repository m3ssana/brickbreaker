@description('Azure region for all resources')
param location string = 'eastus'

@description('Short prefix used to derive resource names')
param namePrefix string = 'brickbreaker'

@description('Allowed CORS origin(s) for the Function App, comma-separated if multiple')
param siteOrigins array = [
  'https://brickbreaker.messana.ai'
  'http://localhost:5173'
]

// ---------------------------------------------------------------------------
// Derived names — suffix from resource-group ID keeps globally-unique names
// collision-free across redeploys and forks.
// ---------------------------------------------------------------------------
var suffix = take(uniqueString(resourceGroup().id), 8)
var storageAccountName = 'st${replace(namePrefix, '-', '')}${suffix}'
var functionAppName = 'func-${namePrefix}-${suffix}'
var appServicePlanName = 'asp-${namePrefix}-${suffix}'
var scoresTableName = 'scores'

// ---------------------------------------------------------------------------
// Storage Account — shared by Functions runtime AND the leaderboard table.
// Cosmos DB free tier is already claimed in this subscription so we use
// Azure Table Storage instead (same free-tier billing for small workloads).
// ---------------------------------------------------------------------------
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    supportsHttpsTrafficOnly: true
  }
}

resource tableService 'Microsoft.Storage/storageAccounts/tableServices@2023-05-01' = {
  parent: storageAccount
  name: 'default'
}

resource scoresTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2023-05-01' = {
  parent: tableService
  name: scoresTableName
}

// ---------------------------------------------------------------------------
// App Service Plan — Linux Consumption (Y1 / Dynamic)
// ---------------------------------------------------------------------------
resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: appServicePlanName
  location: location
  kind: 'functionapp'
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
  }
  properties: {
    reserved: true // required for Linux
  }
}

// ---------------------------------------------------------------------------
// Function App
// ---------------------------------------------------------------------------
var storageConnStr = 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};AccountKey=${storageAccount.listKeys().keys[0].value};EndpointSuffix=${environment().suffixes.storage}'

resource functionApp 'Microsoft.Web/sites@2023-12-01' = {
  name: functionAppName
  location: location
  kind: 'functionapp,linux'
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'NODE|20'
      functionAppScaleLimit: 5
      cors: {
        allowedOrigins: siteOrigins
        supportCredentials: false
      }
      appSettings: [
        {
          name: 'AzureWebJobsStorage'
          value: storageConnStr
        }
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: '~4'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
        {
          // Re-expose the same conn string under a named var for the
          // leaderboard table client — avoids hard-coding account details.
          name: 'STORAGE_CONN'
          value: storageConnStr
        }
        {
          name: 'SCORES_TABLE'
          value: scoresTableName
        }
      ]
    }
  }
}

// ---------------------------------------------------------------------------
// Outputs — the hostname goes into src/Constants.js after first deploy.
// ---------------------------------------------------------------------------
output functionAppName string = functionApp.name
output functionAppHostname string = functionApp.properties.defaultHostName
output storageAccountName string = storageAccount.name
