# Insurance prices
Insurance prices resource allows an application to read insurance prices data.

## Insurance Prices
### Route
``/insuranceprices/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "463",
  "items": [
    {
      "type": {
        "id_str": "582",
        "href": "https://crest-tq.eveonline.com/types/582/",
        "id": 582,
        "name": "Bantam"
      },
      "insurance": [
        {
          "payout": 209809.5,
          "cost": 20980.95,
          "level": "Basic"
        },
        {
          "payout": 251771.4,
          "cost": 41961.9,
          "level": "Standard"
        },
        {
          "payout": 293733.3,
          "cost": 62942.85,
          "level": "Bronze"
        },
        {
          "payout": 335695.2,
          "cost": 83923.8,
          "level": "Silver"
        },
        {
          "payout": 377657.10000000003,
          "cost": 104904.75,
          "level": "Gold"
        },
        {
          "payout": 419619,
          "cost": 125885.7,
          "level": "Platinum"
        }
      ]
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
    ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 463
}
```
