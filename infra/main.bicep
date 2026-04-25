@description('Azure region for all resources')
param location string = 'eastus'

@description('Short prefix used to derive resource names')
param namePrefix string = 'brickbreaker'

@description('Allowed CORS origin(s) for the Function App')
param siteOrigins array = [
  'https://brickbreaker.messana.ai'
  'http://localhost:5173'
]

// ---------------------------------------------------------------------------
// Derived names
// ---------------------------------------------------------------------------
var suffix = take(uniqueString(resourceGroup().id), 8)
var storageAccountName = 'st${replace(namePrefix, '-', '')}${suffix}'
var functionAppName = 'func-${namePrefix}-${suffix}'
var appServicePlanName = 'asp-${namePrefix}-${suffix}'
var scoresTableName = 'scores'

// Storage Table Data Contributor — built-in role ID (read + write table entities)
var storageTableDataContributorRoleId = '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3'

// ---------------------------------------------------------------------------
// Storage Account — shared by Functions runtime AND the leaderboard table.
// ---------------------------------------------------------------------------
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  kind: 'StorageV2'
  sku: { name: 'Standard_LRS' }
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
// Function App — system-assigned managed identity; no storage key in app settings
// ---------------------------------------------------------------------------
// AzureWebJobsStorage is still a connection string — the Functions Consumption
// runtime needs it for lease management (blob/queue). Only the leaderboard
// table access uses managed identity.
var runtimeConnStr = 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};AccountKey=${storageAccount.listKeys().keys[0].value};EndpointSuffix=${environment().suffixes.storage}'

resource functionApp 'Microsoft.Web/sites@2023-12-01' = {
  name: functionAppName
  location: location
  kind: 'functionapp,linux'
  identity: {
    type: 'SystemAssigned'
  }
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
          value: runtimeConnStr
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
          // Account name only — no key. The function uses DefaultAzureCredential
          // which resolves to the system-assigned managed identity at runtime
          // and to `az login` credentials during local development.
          name: 'STORAGE_ACCOUNT_NAME'
          value: storageAccount.name
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
// Role assignment — grant the Function App's managed identity
// Storage Table Data Contributor on the storage account.
// ---------------------------------------------------------------------------
resource tableDataContributorAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  // Deterministic GUID scoped to this storage account + role + principal
  name: guid(storageAccount.id, storageTableDataContributorRoleId, functionApp.id)
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', storageTableDataContributorRoleId)
    principalId: functionApp.identity.principalId
    principalType: 'ServicePrincipal'
  }
}

// ---------------------------------------------------------------------------
// Outputs
// ---------------------------------------------------------------------------
output functionAppName string = functionApp.name
output functionAppHostname string = functionApp.properties.defaultHostName
output storageAccountName string = storageAccount.name
