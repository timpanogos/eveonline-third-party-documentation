# Solar Systems and Solar System
The solar systems resource allows an application to read solar systems.

## Solar Systems
### Route
``/solarsystems/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "8035",
  "items": [
    {
      "id_str": "30000001",
      "href": "https://crest-tq.eveonline.com/solarsystems/30000001/",
      "id": 30000001,
      "name": "Tanoo"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 8035
}
```

## Solar System
### Route
``/solarsystems/<solarsystemID:solarsystemIdType>/``

Ids that start with 31 are wormhole solar system, 30 are normal solar systems

### GET
* Cache: 1 hour

```json
{
  "stats": {
    "href": "https://crest-tq.eveonline.com/solarsystems/30002290/stats/"
  },
  "planets": [
    {
      "href": "https://crest-tq.eveonline.com/planets/40145807/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145808/"
        }
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145809/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145810/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145812/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145813/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145816/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145817/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145838/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145839/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145861/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145862/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    },
    {
      "href": "https://crest-tq.eveonline.com/planets/40145873/",
      "moons": [
        {
          "href": "https://crest-tq.eveonline.com/moons/40145874/"
        },
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ]
    }
  ],
  "stargates": [
    {
      "href": "https://crest-tq.eveonline.com/stargates/50000569/"
    },
    {
      "href": "https://crest-tq.eveonline.com/stargates/50000570/"
    }
  ],
  "securityClass": "K4",
  "href": "https://crest-tq.eveonline.com/solarsystems/30002290/",
  "id_str": "30002290",
  "securityStatus": -0.18677988648414612,
  "position": {
    "y": 52867918353394540,
    "x": 149868501775364700,
    "z": 87927918423435500
  },
  "constellation": {
    "href": "https://crest-tq.eveonline.com/constellations/20000336/",
    "id": 20000336,
    "id_str": "20000336"
  },
  "id": 30002290,
  "name": "PXE-RG"
}
```