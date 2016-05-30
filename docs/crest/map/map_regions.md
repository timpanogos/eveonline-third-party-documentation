# Regions and Region
The regions resource allows an application to read regions.

## Regions
### Route
``/regions/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "100",
  "items": [
    {
      "id_str": "11000001",
      "href": "https://crest-tq.eveonline.com/regions/11000001/",
      "id": 11000001,
      "name": "A-R00001"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 100
}
```

## Region
### Route
``/regions/<regionID:regionIdType>/``

Region IDs for K-space start above 10000000, and IDs for W-space start above 11000000.

### GET
* Cache: 1 hour

```json
{
  "description": "It has long been an established fact of civilization [...]",
  "marketBuyOrders": {
    "href": "https://crest-tq.eveonline.com/market/10000042/orders/buy/"
  },
  "constellations": [
    {
      "href": "https://crest-tq.eveonline.com/constellations/20000302/",
      "id": 20000302,
      "id_str": "20000302"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "name": "Metropolis",
  "id_str": "10000042",
  "id": 10000042,
  "marketSellOrders": {
    "href": "https://crest-tq.eveonline.com/market/10000042/orders/sell/"
  }
}
```
