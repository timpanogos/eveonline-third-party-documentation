The planets resource allows an application to read planets data.

## Planets
Route: ``/planets/``

### GET
* Cache: 1 hour

```
    Not implemented!
```

## Planet
Route: ``/planets/<planetID:planetIdType>/``

### GET
* Cache: 1 hour

```
{
  "position": {
    "y": 286901742,
    "x": -26423794568,
    "z": 49900095982
  },
  "type": {
    "href": "https://public-crest.eveonline.com/types/2016/"
  },
  "system": {
    "href": "https://public-crest.eveonline.com/solarsystems/30000032/",
    "name": "Hasiari"
  },
  "name": "Hasiari I"
}
```