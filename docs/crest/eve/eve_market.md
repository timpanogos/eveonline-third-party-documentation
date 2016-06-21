# Market
The market resource allows an application to read region based market data.

## Market Orders
### Sell and Buy Orders
#### Route
``https://crest-tq.eveonline.com/market/<regionID>/orders/<sell|buy>/<crest-type-url>/``

Either `sell` or `buy` may be used.

#### GET
* Cache: ?? minutes
* Example for Tritanium (34) sell orders in Forge (10000002):

``https://crest-tq.eveonline.com/market/10000002/orders/sell/?type=https://crest-tq.eveonline.com/inventory/types/34/``

```json
{
  "totalCount_str": "197",
  "items": [
    {
      "volume_str": "531",
      "buy": false,
      "issued": "2016-05-01T13:48:33",
      "price": 9.99,
      "volumeEntered": 45500,
      "minVolume": 1,
      "volume": 531,
      "range": "region",
      "href": "https://crest-tq.eveonline.com/market/10000002/orders/4523489059/",
      "duration_str": "90",
      "location": {
        "id_str": "60005593",
        "href": "https://crest-tq.eveonline.com/universe/locations/60005593/",
        "id": 60005593,
        "name": "Itamo VIII - Core Complexion Inc. Factory"
      }
    },
    { "..." },
    { "..." },
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 197
}
```

### Bulk Market Orders

"[This] resource can be found under /market/<regionID>/orders/all/ and returns all market orders for a given region paginated, with up to 10,000 results per page. For busy regions such as The Forge, you would expect around 30 pages of data based on the current trading volume." - [CCP FoxFour](https://developers.eveonline.com/blog/article/new-crest-resource-for-bulk-market-orders)

#### Route
``/market/<regionId>/orders/<all|crest-type-url>/``

Either `all` or the `crest-type-url` can be used.

#### GET
* Cache: ?? minutes
* Example for Forge (10000002):

``https://crest-tq.eveonline.com/market/10000002/orders/all/``

```json
{
  "items": [
    {
      "buy": false,
      "issued": "2016-06-07T11:09:56",
      "price": 50000,
      "volume": 1,
      "duration": 365,
      "id": 911203054,
      "minVolume": 1,
      "volumeEntered": 1,
      "range": "region",
      "stationID": 60000274,
      "type": 967
    },
    { "..." },
    { "..." },
  ],
  "totalCount": 254775,
  "next": {
    "href": "https://crest-tq.eveonline.com/market/10000002/orders/all/?page=2"
  },
  "pageCount": 9
}
```

## History
### Route
``/market/<regionID>/history/<crest-type-url>/``

### GET
* Cache: ?? minutes
* Example for Tritanium (34) in Forge (10000002):

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
