The wars resource allows an application to read wars data.

## Wars
Route: ``/wars/``

### GET
* Cache: 1 day

```
{
  "totalCount_str": "477886",
  "pageCount": 239,
  "items": [
    {
      "href": "https://public-crest.eveonline.com/wars/1/",
      "id": 1,
      "id_str": "1"
    },
    { ... },
    { ... },
    { ... },
    { ... },
   ],
  "next": {
    "href": "https://public-crest.eveonline.com/wars/?page=2"
  },
  "totalCount": 477886,
  "pageCount_str": "239"
}
```

## War
Route: ``/wars/<warID:warIdType>/``

### GET
* Cache: 1 hour

```
{
  "timeFinished": "2007-10-29T14:29:00",
  "openForAllies": false,
  "timeStarted": "2007-10-22T13:36:00",
  "allyCount": 0,
  "timeDeclared": "2007-10-21T13:36:00",
  "aggressor": {
    "shipsKilled": 0,
    "shipsKilled_str": "0",
    "name": "Privateer Alliance",
    "href": "https://public-crest.eveonline.com/alliances/753644383/",
    "id_str": "753644383",
    "icon": {
      "href": "http://imageserver.eveonline.com/Alliance/753644383_128.png"
    },
    "id": 753644383,
    "iskKilled": 0
  },
  "mutual": false,
  "allyCount_str": "0",
  "killmails": "https://public-crest.eveonline.com/wars/42000/killmails/all/",
  "id_str": "42000",
  "defender": {
    "shipsKilled": 0,
    "shipsKilled_str": "0",
    "name": "Ka-Tet",
    "href": "https://public-crest.eveonline.com/alliances/389924442/",
    "id_str": "389924442",
    "icon": {
      "href": "http://imageserver.eveonline.com/Alliance/389924442_128.png"
    },
    "id": 389924442,
    "iskKilled": 0
  },
  "id": 42000
}
```