# Open Market Details
The characters openWindow marketdetails resource allows an application to open the market details window for a specific typeID in game.

### Route
``/characters/<characterID:characterIdType>/ui/openwindow/marketdetails/``

### POST
* Scope: `remoteClientUI`

The typeID in the href of body does not matter and can remain 0.  However it may be good practice to include the typeID in the href url as a means of future poofing.

User has to be online for window to open, response is empty if offline.

Body format:

```json
{
    "type":     {
      "href": "https://crest-tq.eveonline.com/inventory/types/34/",
      "id": 34
    }
}
```

There is no response, if the action is successful the market details window will open.