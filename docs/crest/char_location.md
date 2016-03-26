The characters location resource allows an application to read a characters location.

## Location
Route: ``/characters/<characterID:characterIdType>/location/``

### GET
* Cache: 10 seconds
* Scope: `characterLocationRead`

User has to be online to see his location, if he is offline than response is empty.

```
{
  "solarSystem": {
    "id_str": "30002782",
    "href": "https://crest-tq.eveonline.com/solarsystems/30002782/",
    "id": 30002782,
    "name": "Kamio"
  }
}
```