# Planets and Planet
The planets resource allows an application to read planets data.

## Planets
### Route
``/planets/``

### GET
* Cache: 1 hour

```
    Not implemented!
```

## Planet
### Route
``/planets/<planetID:planetIdType>/``

### GET
* Cache: 1 hour

```json
{
  "position": {
    "y": 1779972523.4447613,
    "x": 33386455397.271893,
    "z": 3500846503.473558
  },
  "solarSystem": {
    "id_str": "31000063",
    "href": "https://crest-tq.eveonline.com/solarsystems/31000063/",
    "id": 31000063,
    "name": "J225555"
  },
  "type": {
    "id_str": "2016",
    "href": "https://crest-tq.eveonline.com/inventory/types/2016/",
    "id": 2016,
    "name": "Planet (Barren)",
    "icons": {
      "32x32": {
        "href": "http://imageserver.eveonline.com/Render/2016_32.png"
      },
      "64x64": {
        "href": "http://imageserver.eveonline.com/Render/2016_64.png"
      },
      "128x128": {
        "href": "http://imageserver.eveonline.com/Render/2016_128.png"
      },
      "256x256": {
        "href": "http://imageserver.eveonline.com/Render/2016_256.png"
      },
      "512x512": {
        "href": "http://imageserver.eveonline.com/Render/2016_512.png"
      }
    }
  },
  "name": "J225555 I"
}
```
