# Dogma Attributes and Attribute
The dogma attributes resource allows an application to read dogma attributes.

## Attributes
### Route
``/dogma/attributes/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "1939",
  "pageCount": 4,
  "items": [
    {
      "id_str": "2",
      "href": "https://crest-tq.eveonline.com/dogma/attributes/2/",
      "id": 2,
      "name": "isOnline"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "next": {
    "href": "https://crest-tq.eveonline.com/dogma/attributes/?page=2"
  },
  "totalCount": 1939,
  "pageCount_str": "4"
}
```

## Attribute
### Route
``/dogma/attributes/<attributeID:attributeIdType>/``

### GET
* Cache: 1 hour

```json
{
  "description": "Factor by which topspeed increases.",
  "unitID_str": "124",
  "displayName": "Maximum Velocity Bonus",
  "name": "speedFactor",
  "iconID": 1389,
  "unitID": 124,
  "iconID_str": "1389",
  "id": 20,
  "id_str": "20",
  "highIsGood": true,
  "stackable": false,
  "defaultValue": 1,
  "published": true
}
```