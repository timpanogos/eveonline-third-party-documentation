The alliances resource allows an application to read alliances data.

## Alliances
Route: ``/alliances/``

### GET
* Cache: 30 minutes

```
{

    "totalCount_str" : 2989,
    "pageCount" : 12,
    "items" : [
        {
            "id_str" : 99000006,
            "shortName" : 666,
            "href" : https://public-crest.eveonline.com/alliances/99000006/,
            "id" : 99000006,
            "name" : Everto Rex Regis
        },
        { ... },
        { ... },
        { ... },
        { ... }
    ],
    "next" : {
        "href" : https://public-crest.eveonline.com/alliances/?page=2
    },
    "totalCount" : 2989,
    "pageCount_str" : 12
}
```


## Alliance
Route: ``/alliances/<allianceId:allianceIdType>/``

### GET
* Cache: 30 minutes

```
{
    "startDate" : 2010-11-08T03:34:00,
    "corporationsCount" : 11,
    "description" : ,
    "executorCorporation" : { ... },
    "corporationsCount_str" : 11,
    "deleted" : false,
    "creatorCorporation" : {
        "name" : Covenant of the Phoenix,
        "isNPC" : false,
        "href" : https://public-crest.eveonline.com/corporations/98001096/,
        "id_str" : 98001096,
        "logo" : {
            "32x32" : {
                "href" : http://imageserver.eveonline.com/Corporation/98001096_32.png
            },
            "64x64" : {
                "href" : http://imageserver.eveonline.com/Corporation/98001096_64.png
            },
            "128x128" : {
                "href" : http://imageserver.eveonline.com/Corporation/98001096_128.png
            },
            "256x256" : {
                "href" : http://imageserver.eveonline.com/Corporation/98001096_256.png
            }
        },
        "id" : 98001096
    },
    "url" : ,
    "id_str" : 99000020,
    "creatorCharacter" : {
        "name" : Jan Shan,
        "isNPC" : false,
        "href" : https://public-crest.eveonline.com/characters/681594178/,
        "capsuleer" : {
            "href" : https://public-crest.eveonline.com/characters/681594178/capsuleer/
        },
        "portrait" : {
            "32x32" : {
                "href" : http://imageserver.eveonline.com/Character/681594178_32.jpg
            },
            "64x64" : {
                "href" : http://imageserver.eveonline.com/Character/681594178_64.jpg
            },
            "128x128" : {
                "href" : http://imageserver.eveonline.com/Character/681594178_128.jpg
            },
            "256x256" : {
                "href" : http://imageserver.eveonline.com/Character/681594178_256.jpg
            }
        },
        "id" : 681594178,
        "id_str" : 681594178
    },
    "corporations" : [
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... },
        { ... }
    ],
    "shortName" : COTP,
    "id" : 99000020,
    "name" : Covenant of the Phoenix Alliance
}
```