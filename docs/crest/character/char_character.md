# Characters

The characters location resource allows an application to read a character's public data as well as links for various other character related enpoints.

### Route
``/characters/<characterID:characterIdType>/``


### API version

Character-v4+json

### GET
* Cache: 5 minutes

```json
{
    "race": {
    "href": "https://crest-tq.eveonline.com/races/4/",
    "id": 4,
    "id_str": "4"
  },
  "fittings": {
    "href": "https://crest-tq.eveonline.com/characters/2047918291/fittings/"
  },
  "description": "Demo description. HI MOM!",
  "bloodLine": {
    "href": "https://crest-tq.eveonline.com/bloodlines/13/",
    "id": 13,
    "id_str": "13"
  },
  "gender_str": "1",
  "corporation": {
    "name": "Resilience.",
    "isNPC": false,
    "href": "https://crest-tq.eveonline.com/corporations/98019139/",
    "id_str": "98019139",
    "logo": {
      "32x32": {
        "href": "http://imageserver.eveonline.com/Corporation/98019139_32.png"
      },
      "64x64": {
        "href": "http://imageserver.eveonline.com/Corporation/98019139_64.png"
      },
      "128x128": {
        "href": "http://imageserver.eveonline.com/Corporation/98019139_128.png"
      },
      "256x256": {
        "href": "http://imageserver.eveonline.com/Corporation/98019139_256.png"
      }
    },
    "id": 98019139
  },
  "contacts": {
    "href": "https://crest-tq.eveonline.com/characters/2047918291/contacts/"
  },
  "opportunities": {
    "href": "https://crest-tq.eveonline.com/characters/2047918291/opportunities/"
  },
  "id_str": "2047918291",
  "href": "https://crest-tq.eveonline.com/characters/2047918291/",
  "ui": {
    "setWaypoints": {
      "href": "https://crest-tq.eveonline.com/characters/2047918291/ui/autopilot/waypoints/"
    },
    "showContract": {
      "href": "https://crest-tq.eveonline.com/characters/2047918291/ui/openwindow/contract/"
    },
    "showMarketDetails": {
      "href": "https://crest-tq.eveonline.com/characters/2047918291/ui/openwindow/marketdetails/"
    }
  },
  "location": {
    "href": "https://crest-tq.eveonline.com/characters/2047918291/location/"
  },
  "gender": 1,
  "portrait": {
    "32x32": {
      "href": "http://imageserver.eveonline.com/Character/2047918291_32.jpg"
    },
    "64x64": {
      "href": "http://imageserver.eveonline.com/Character/2047918291_64.jpg"
    },
    "128x128": {
      "href": "http://imageserver.eveonline.com/Character/2047918291_128.jpg"
    },
    "256x256": {
      "href": "http://imageserver.eveonline.com/Character/2047918291_256.jpg"
    }
  },
  "id": 2047918291,
  "loyaltyPoints": {
	"href": "https://crest-tq.eveonline.com/characters/2047918291/loyaltypoints/"
  },
  "name": "Blacksmoke16"
}
```