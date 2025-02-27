---
sidebar_position: 20
title: View Collection Settings
---

All collections have settings that you can look at in the Settings tab.

## View Collection Settings

1. Log in to your [Macrometa account](https://auth.paas.macrometa.io/).
1. Click **Collections**.
1. Click the collection that you want to view the settings of.
1. Click **Settings** to view the Settings tab.

## Collection Settings

Different types of collections have different settings. Specific settings are listed in the sections below.

### Document Store and Graph Edge Settings

Document Store collections and Graph Edge collections have the same settings.

- **ID -** System-generated ID of the selected collection.
- **Type -** The data model type of the selected collection.
- **Status -** Current status of the selected collection.
- **Synchronous Writes -** Select the checkbox to enable synchronous writes.

In the Settings tab, you can [Delete](delete-collection.md) or [Truncate](truncate-collection.md) the collection.

### Key-Value Store Settings

Key-Value stores only have one settings option.

- **Synchronous Writes -** Select the checkbox to enable synchronous writes.

In the Settings tab, you can [Delete](delete-collection.md) or [Truncate](truncate-collection.md) the collection.

### Dynamo Table Settings

Dynamo Table settings are displayed as a table schema, similar to the following code block.

```json
{
  "TableName": "Dynamo",
  "TableStatus": "ACTIVE",
  "TableArn": "426548253",
  "ItemCount": 0,
  "KeySchema": [
    {
      "AttributeName": "dyn",
      "KeyType": "HASH"
    }
  ],
  "CreationDateTime": 1658949141,
  "AttributeDefinitions": [
    {
      "AttributeName": "dyn",
      "AttributeType": "S"
    }
  ]
}
```

In the Settings tab, you can [Delete](delete-collection.md) or [Purge](dynamo/purge-dynamo-table.md) the collection.