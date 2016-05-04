#  Sovereignty Structures and Sovereignty Campaigns
Shows sovereignty data for structures or campaigns.

## Sovereignty Structures
### Route
``/sovereignty/structures/``

### GET
* Cache: 5 minutes

```json
{
  "totalCount_str": "5872",
  "items": [
    {
      "alliance": {
        "id_str": "1988009451",
        "href": "https://crest-tq.eveonline.com/alliances/1988009451/",
        "id": 1988009451,
        "name": "Curatores Veritatis Alliance"
      },
      "vulnerabilityOccupancyLevel": 4.5,
      "structureID_str": "866802670",
      "structureID": 866802670,
      "vulnerableStartTime": "2016-05-04T18:00:00",
      "solarSystem": {
        "id_str": "30001235",
        "href": "https://crest-tq.eveonline.com/solarsystems/30001235/",
        "id": 30001235,
        "name": "BR-N97"
      },
      "vulnerableEndTime": "2016-05-04T22:00:00",
      "type": {
        "id_str": "32226",
        "href": "https://crest-tq.eveonline.com/types/32226/",
        "id": 32226,
        "name": "Territorial Claim Unit"
      }
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
    ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 5872
}
```


## Sovereignty Campaigns
### Route
``/sovereignty/campaigns/``

### GET
* Cache: 30 seconds

```json
{
  "totalCount_str": "198",
  "items": [
    {
      "eventType_str": "3",
      "campaignID": 21759,
      "eventType": 3,
      "sourceSolarsystem": {
        "id_str": "30000296",
        "href": "https://crest-tq.eveonline.com/solarsystems/30000296/",
        "id": 30000296,
        "name": "ZLZ-1Z"
      },
      "attackers": {
        "score": 0.4
      },
      "campaignID_str": "21759",
      "sourceItemID": 60014907,
      "startTime": "2016-05-04T10:37:59",
      "sourceItemID_str": "60014907",
      "defender": {
        "defender": {
          "id_str": "1354830081",
          "href": "https://crest-tq.eveonline.com/alliances/1354830081/",
          "id": 1354830081,
          "name": "Goonswarm Federation"
        },
        "score": 0.6
      },
      "constellation": {
        "id_str": "20000042",
        "href": "https://crest-tq.eveonline.com/constellations/20000042/",
        "id": 20000042,
        "name": "0-8MWQ"
      }
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
    ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 198
}
```