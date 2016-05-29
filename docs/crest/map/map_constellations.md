# Constellations and Constellation
The constellations resource allows an application to read constellations.

## Constellations
### Route
``/constellations/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "1120",
  "items": [
    {
      "id_str": "20000001",
      "href": "https://crest-tq.eveonline.com/constellations/20000001/",
      "id": 20000001,
      "name": "San Matar"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 1120
}
```

## Constellation
### Route
``/constellations/<constellationID:constellationIdType>/``

Constellation IDs for K-space start above 20000000, and IDs for W-space start above 21000000.

### GET
* Cache: 1 hour

```json
{
  "position": {
    "y": 1423857875901778200,
    "x": 7849376741752832000,
    "z": -9760976595570807000
  },
  "region": {
    "href": "https://crest-tq.eveonline.com/regions/11000016/"
  },
  "systems": [
    {
      "href": "https://crest-tq.eveonline.com/solarsystems/31002538/",
      "id": 31002538,
      "id_str": "31002538"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "name": "D-C00328"
}
```
