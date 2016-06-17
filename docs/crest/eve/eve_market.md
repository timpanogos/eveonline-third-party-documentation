# Market
The market resource allows an application to read market data.

## History
### Route
``/market/{regionId}/history/{type-href}``

### GET
* Cache: ?? minutes
* Example (Tritanium (34) in Forge (10000002)):

``https://crest-tq.eveonline.com/market/10000002/history/?type=https://crest-tq.eveonline.com/inventory/types/34/``

```json
{
  "totalCount_str": "412",
  "items": [
    {
      "volume_str": "16276782035",
      "orderCount": 2267,
      "lowPrice": 5.11,
      "highPrice": 5.27,
      "avgPrice": 5.25,
      "volume": 16276782035,
      "orderCount_str": "2267",
      "date": "2015-05-01T00:00:00"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 412
}
```

* The items list is sorted from oldest to newest (with the last history item being yesterday).
