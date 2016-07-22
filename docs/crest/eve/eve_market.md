# Market
The market resource allows an application to read region based market data.

Valid for base API version: ``application/vnd.ccp.eve.Api-v5+json``

## Market Types

### API version

MarketTypeCollection-v1+json

### Route
``/market/types/``

### GET
* Cache: 5 minutes

```json
{
  "totalCount_str": "11060",
  "pageCount": 12,
  "items": [
     {
        "marketGroup": {
          "href": "https://crest-tq.eveonline.com/market/groups/516/",
          "id": 516,
          "id_str": "516"
        },
        "type": {
          "id_str": "18",
          "href": "https://crest-tq.eveonline.com/inventory/types/18/",
          "id": 18,
          "name": "Plagioclase",
          "icon": {
            "href": "http://imageserver.eveonline.com/Type/18_64.png"
          }
        },
        "id": 18,
        "id_str": "18"
     },
     { "..." }
  ],
  "next": {
     "href": "https://crest-tq.eveonline.com/market/types/?page=2"
  },
  "totalCount": 11060,
  "pageCount_str": "12"
}
```

## Market Type

### API version

MarketTypeCollection-v1+json

### Route
``/market/types/<typeId:typeIdType>/``

### GET
* Cache: 5 minutes

```json
{
  "marketGroup": {
    "href": "https://crest-tq.eveonline.com/market/groups/516/",
    "id": 516,
    "id_str": "516"
  },
  "type": {
    "id_str": "18",
    "href": "https://crest-tq.eveonline.com/inventory/types/18/",
    "id": 18,
    "name": "Plagioclase",
    "icon": {
      "href": "http://imageserver.eveonline.com/Type/18_64.png"
    }
  },
  "id": 18,
  "id_str": "18"
}
```

## Market Prices

### API version

MarketTypePriceCollection-v1+json

### Route
``/market/prices/``

### GET
* Cache: 23 hours

```json
{
  "totalCount_str": "10134",
  "items": [
    {
      "adjustedPrice": 306988.09,
      "averagePrice": 306292.67,
      "type": {
        "id_str": "32772",
        "href": "https://crest-tq.eveonline.com/inventory/types/32772/",
        "id": 32772,
        "name": "Medium Ancillary Shield Booster"
      }
    },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 10134
}
```

## Market Groups

### API version

MarketGroupCollection-v1+json

### Route
``/market/groups/``

### GET
* Cache: 5 minutes

```json
{
  "totalCount_str": "2103",
  "items": [
    {
      "name": "Blueprints",
      "href": "https://crest-tq.eveonline.com/market/groups/2/",
      "id_str": "2",
      "id": 2,
      "types": {
        "href": "https://crest-tq.eveonline.com/market/types/?group=https://crest-tq.eveonline.com/market/groups/2/"
      },
      "description": "Blueprints are data items used in industry for manufacturing, research and invention jobs"
    },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 2103
}  
```

## Market Group

### API version

MarketGroup-v1+json

### Route
``/market/groups/<groupId:groupIdType>/``

### GET
* Cache: 5 minutes

```json
{
  "name": "Blueprints",
  "href": "https://crest-tq.eveonline.com/market/groups/2/",
  "id_str": "2",
  "id": 2,
  "types": {
    "href": "https://crest-tq.eveonline.com/market/types/?group=https://crest-tq.eveonline.com/market/groups/2/"
  },
  "description": "Blueprints are data items used in industry for manufacturing, research and invention jobs"
}
```

## Market Orders

### Sell and Buy Orders

#### API version

MarketOrderCollection-v1+json

#### Route
``/market/<regionId:regionIdType>/orders/<"sell"|"buy">/<crest-type-url>/``

Either `sell` or `buy` may be used.

#### GET
* Cache: 5 minutes
* Example for Tritanium (34) sell orders in Forge (10000002):

``/market/10000002/orders/sell/?type=https://crest-tq.eveonline.com/inventory/types/34/``

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

"[This] resource can be found under /market/<regionID>/orders/all/ and returns all market orders for a given region paginated, with up to [30,000] results per page. For busy regions such as The Forge, you would expect around [10] pages of data based on the current trading volume." - [CCP FoxFour](https://developers.eveonline.com/blog/article/new-crest-resource-for-bulk-market-orders)

#### API version

MarketOrderCollectionSlim-v1+json

#### Route
``/market/<regionId>/orders/<all|crest-type-url>/``

Either `all` or the `crest-type-url` can be used.

#### GET
* Cache: 5 minutes
* Example for Forge (10000002):

``/market/10000002/orders/all/``

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

## Market History

### API version

MarketTypeHistoryCollection-v1+json

### Route
``/market/<regionId:regionIdType>/history/<crest-type-url>/``

### GET
* Cache: 30 minutes
* Sorting: From oldest to newest (with the last item being yesterday).
* Example for Tritanium (34) in Forge (10000002):

``/market/10000002/history/?type=https://crest-tq.eveonline.com/inventory/types/34/``

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
