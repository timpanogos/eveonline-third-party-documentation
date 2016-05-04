# Types and Type
The types resource allows an application to read types.

## Types
### Route
``/types/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "28370",
  "pageCount": 29,
  "items": [
    {
      "id_str": "0",
      "href": "https://crest-tq.eveonline.com/types/0/",
      "id": 0,
      "name": "#System"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "next": {
    "href": "https://crest-tq.eveonline.com/types/?page=2"
  },
  "totalCount": 28370,
  "pageCount_str": "29"
}
```

## Type
### Route
``/types/<typeID:typeIdType>/``

### GET
* Cache: 1 hour

```json
{
  "capacity": 0,
  "description": "This upgrade increases the ore resources available in a system.",
  "portionSize_str": "1",
  "iconID": 3948,
  "portionSize": 1,
  "iconID_str": "3948",
  "volume": 5000,
  "dogma": {
    "attributes": [
      {
        "attribute": {
          "id_str": "4",
          "href": "https://crest-tq.eveonline.com/dogma/attributes/4/",
          "id": 4,
          "name": "mass"
        },
        "value": 1000
      },
      { "..." },
      { "..." },
      { "..." },
      { "..." },
    ]
  },
  "radius": 1,
  "id_str": "2040",
  "published": true,
  "mass": 1000,
  "id": 2040,
  "name": "Ore Prospecting Array 1"
}
```