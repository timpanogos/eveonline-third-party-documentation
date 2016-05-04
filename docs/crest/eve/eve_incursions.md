# Incursions
Incursions resource allows an application to read incursions data.

## Incursions Prices
### Route
``/incursions/``

### GET
* Cache: 5 minutes

```json
{
  "totalCount_str": "5",
  "items": [
    {
      "aggressorFactionID": {
        "id_str": "500019",
        "href": "https://crest-tq.eveonline.com/alliances/500019/",
        "id": 500019,
        "name": "Sansha's Nation"
      },
      "stagingSolarSystem": {
        "id_str": "30004434",
        "href": "https://crest-tq.eveonline.com/solarsystems/30004434/",
        "id": 30004434,
        "name": "C-0ND2"
      },
      "influence": 0,
      "incursionType": "Incursion",
      "state": "Withdrawing",
      "hasBoss": false,
      "infestedSolarSystems": [
        {
          "id_str": "30004425",
          "href": "https://crest-tq.eveonline.com/solarsystems/30004425/",
          "id": 30004425,
          "name": "Z-PNIA"
        },
        {
          "id_str": "30004426",
          "href": "https://crest-tq.eveonline.com/solarsystems/30004426/",
          "id": 30004426,
          "name": "OCU4-R"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." }
      ],
      "constellation": {
        "id_str": "20000647",
        "href": "https://crest-tq.eveonline.com/constellations/20000647/",
        "id": 20000647,
        "name": "C45-9Y"
      }
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
    ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 5
}
```
