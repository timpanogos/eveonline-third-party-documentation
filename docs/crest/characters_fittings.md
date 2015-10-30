The character fittings resource allows an application to both read and write to the saved fitting service. This does not have anything to do with actually fitting a ship, just the saved fits.

One of the really nice things about the CREST fitting service is that when a fit is added or deleted a notification is sent to any connected clients. This means if a character has their fitting window open and a fit is added through CREST the fitting window should be updated almost immediately.

## Fittings
Route: ``/characters/<characterID:characterIdType>/fittings/``

### GET
* Cache: 15 minutes

It is important to remember that adding or deleting a fit will not invalidate this cache. It is recommended that so long as you get the proper response code from CREST when you POST a new fit that you update any local cache at least temporarily.

```
{
  "totalCount_str": "1",
  "items": [
    {
      "description": "THIS IS A TEST FIT DESCRIPTION!",
      "fittingID_str": "258",
      "items": [
        {
          "flag": 11,
          "quantity_str": "1",
          "type": {
            "id_str": "518",
            "href": "http://crest.regner.dev/types/518/",
            "id": 518,
            "name": "Basic Gyrostabilizer"
          },
          "flag_str": "11",
          "quantity": 1
        }
      ],
      "fittingID": 258,
      "href": "http://crest.regner.dev/characters/90000001/fittings/258/",
      "ship": {
        "id_str": "587",
        "href": "http://crest.regner.dev/types/587/",
        "id": 587,
        "name": "Rifter"
      },
      "name": "THIS IS A TEST FIT NAME!"
    },
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 1
}
```

### POST
```
{
  "name": "Name here...",
  "description": "Description here...",
  "items": [{
    "type": {
        "id": 518,
        "name": "Basic Gyrostabilizer",
        "href": "http://crest.regner.dev/types/518/"
    },
    "flag": 11,
    "quantity": 1
  }],
  "ship": {
    "id": 587,
    "name": "Rifter",
    "href": "http://crest.regner.dev/types/374/"
  }
}
```

## Fitting
Route: ``/characters/<characterID:characterIdType>/fittings/<fittingID:integerType>/``

### GET
* Cache: 15 minutes

```
{
  "description": "THIS IS A TEST FIT DESCRIPTION!",
  "fittingID_str": "258",
  "items": [
    {
      "flag": 11,
      "quantity_str": "1",
      "type": {
        "id_str": "518",
        "href": "http://crest.regner.dev/types/518/",
        "id": 518,
        "name": "Basic Gyrostabilizer"
      },
      "flag_str": "11",
      "quantity": 1
    }
  ],
  "fittingID": 258,
  "href": "http://crest.regner.dev/characters/90000001/fittings/258/",
  "ship": {
      "id_str": "587",
      "href": "http://crest.regner.dev/types/587/",
      "id": 587,
      "name": "Rifter"
  },
  "name": "THIS IS A TEST FIT NAME!"
}
```

### DELETE
No content required for this request. Expect it to delete whatever resource
it is sent to.

## Errors
Each of these errors should be presented to the user so they can take the required action.

### FittingsStopSpamming
* Message: "Spamming the fitting service."
* Note: The fitting service is rate limited outside of CREST. This applies to all applications trying to access it, including the client. Stop for 15 seconds and wait.

### OwnerMaxFittings
* Message: "Maximum fittings of {} reached."

### FittingNameTooLong
* Message: "Maximum fitting name length is {}."

### FittingDescriptionTooLong
* Message: "Maximum fitting description length is {}"