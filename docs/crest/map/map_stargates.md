# Stargate
The stargate resource allows an application to read stargate data.

## Stargate
### Route
``/stargate/<stargateID:stargateIdType>/``

### GET
* Cache: 1 hour

```json
{
  "position": {
    "y": 138469908480,
    "x": 2185575260160,
    "z": -2442680524800
  },
  "type": {
    "id_str": "3875",
    "href": "https://crest-tq.eveonline.com/types/3875/",
    "id": 3875,
    "name": "Stargate (Gallente System)",
    "icons": {
      "32x32": {
        "href": "http://imageserver.eveonline.com/Render/3875_32.png"
      },
      "64x64": {
        "href": "http://imageserver.eveonline.com/Render/3875_64.png"
      },
      "128x128": {
        "href": "http://imageserver.eveonline.com/Render/3875_128.png"
      },
      "256x256": {
        "href": "http://imageserver.eveonline.com/Render/3875_256.png"
      },
      "512x512": {
        "href": "http://imageserver.eveonline.com/Render/3875_512.png"
      }
    }
  },
  "system": {
    "id_str": "30002290",
    "href": "https://crest-tq.eveonline.com/solarsystems/30002290/",
    "id": 30002290,
    "name": "PXE-RG"
  },
  "name": "Stargate (8-MXHA)"
}
```