# Dogma Effects and Effect
The dogma effects resource allows an application to read dogma effects.

## Effects
### Route
``/dogma/effects/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "3896",
  "pageCount": 8,
  "items": [
    {
      "id_str": "4",
      "href": "https://public-crest.eveonline.com/dogma/effects/4/",
      "id": 4,
      "name": "shieldBoosting"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "next": {
    "href": "https://public-crest.eveonline.com/dogma/effects/?page=2"
  },
  "totalCount": 3896,
  "pageCount_str": "8"
}
```

## Effect
### Route
``/dogma/effects/<effectID:effectIdType>/``

### GET
* Cache: 1 hour

```json
{
  "effectCategory_str": "0",
  "postExpression_str": "501",
  "isAssistance": false,
  "description": "",
  "isOffensive": false,
  "disallowAutoRepeat": false,
  "isWarpSafe": false,
  "preExpression_str": "500",
  "electronicChance": false,
  "rangeChance": false,
  "effectCategory": 0,
  "id_str": "61",
  "postExpression": 501,
  "published": false,
  "preExpression": 500,
  "displayName": "",
  "id": 61,
  "name": "agilityBonus"
}
```