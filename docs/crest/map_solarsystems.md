The solar systems resource allows an application to read solar systems.

## Solar Systems
Route: ``/solarsystems/``

### GET
* Cache: 1 hour

```
{
  "totalCount_str": "8035",
  "items": [
    {
      "id_str": "30000001",
      "href": "https://public-crest.eveonline.com/solarsystems/30000001/",
      "id": 30000001,
      "name": "Tanoo"
    },
    { ... },
    { ... },
    { ... },
    { ... },
   ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 8035
}
```

## Solar System
Route: ``/solarsystems/<solarsystemID:solarsystemIdType>/``

### GET
* Cache: 1 hour

```
{
  "stats": {
    "href": "https://public-crest.eveonline.com/solarsystems/30000032/stats/"
  },
  "name": "Hasiari",
  "securityStatus": 0.7981876134872437,
  "securityClass": "B",
  "href": "https://public-crest.eveonline.com/solarsystems/30000032/",
  "id_str": "30000032",
  "planets": [
    {
      "href": "https://public-crest.eveonline.com/planets/40002133/"
    },
    { ... },
    { ... },
    { ... },
    { ... },
   ],
  "position": {
    "y": 39062466382135416,
    "x": -87895710227609470,
    "z": -26800575462533416
  },
  "sovereignty": {
    "id_str": "500007",
    "href": "https://public-crest.eveonline.com/alliances/500007/",
    "id": 500007,
    "name": "Ammatar Mandate"
  },
  "constellation": {
    "href": "https://public-crest.eveonline.com/constellations/20000005/",
    "id": 20000005,
    "id_str": "20000005"
  },
  "id": 30000032
}
```