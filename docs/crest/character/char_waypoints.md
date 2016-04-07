# Waypoints
The characters waypoints resource allows an application to write a characters waypoints.

### Route
``/characters/<characterID:characterIdType>/navigation/waypoints/``

### POST
* Scope: `characterNavigationWrite`

Body format:

```json
{
  "clearOtherWaypoints": false,
  "first": false,
  "solarSystem": {
    "href": "https://public-crest.eveonline.com/solarsystems/30000003/",
    "id": 30000003
  }
}
```

There is no response, you should look at response code to know if action succeeded.
There also isn't any response if you set same waypoint twice (like in game voice).