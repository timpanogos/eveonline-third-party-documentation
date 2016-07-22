# Opportunities
Shows opportunities that the character completed

## Contacts
### Route
``/characters/<characterID:characterIdType>/characterOpportunitiesRead/``

### GET
* Cache: 1 hour
* Scope: `characterOpportunitiesRead`


```json
{
  "totalCount_str": "52",
  "items": [
    {
      "completed": "2016-02-22T19:23:06",
      "task": {
        "href": "https://crest-tq.eveonline.com/opportunities/tasks/2/",
        "id": 2,
        "id_str": "2"
      }
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 52
}
```