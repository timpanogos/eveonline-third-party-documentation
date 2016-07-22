# Inventory
These resources allows an application to read item types, groups and categories.

## Types
### Route
``/inventory/types/``

### API version

ItemTypeCollection-v1+json

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "28370",
  "pageCount": 29,
  "items": [
    {
      "id_str": "0",
      "href": "https://crest-tq.eveonline.com/inventory/types/0/",
      "id": 0,
      "name": "#System"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." },
   ],
  "next": {
    "href": "https://crest-tq.eveonline.com/inventory/types/?page=2"
  },
  "totalCount": 28370,
  "pageCount_str": "29"
}
```

## Type
### Route
``/inventory/types/<typeID:typeIdType>/``

### API version

ItemType-v3+json

### GET
* Cache: 1 hour

```json
{
  "capacity": 0,
  "description": "This upgrade increases the ore resources available in a system.",
  "portionSize_str": "1",
  "iconID": 3948,
  "portionSize": 1,
  "iconID_str": "3948",
  "volume": 5000,
  "dogma": {
    "attributes": [
      {
        "attribute": {
          "id_str": "4",
          "href": "https://crest-tq.eveonline.com/dogma/attributes/4/",
          "id": 4,
          "name": "mass"
        },
        "value": 1000
      },
      { "..." },
      { "..." },
      { "..." },
      { "..." },
    ]
  },
  "radius": 1,
  "id_str": "2040",
  "published": true,
  "mass": 1000,
  "id": 2040,
  "name": "Ore Prospecting Array 1"
}
```

## Groups
### Route
``/inventory/groups/``

### API version

ItemGroupCollection-v1+json

### GET
* Cache: 1 hour

```json
{
	"totalCount_str": "1187",
	"pageCount": 2,
	"items": [
		{
			"id_str": "0",
			"href": "https://crest-tq.eveonline.com/inventory/groups/0/",
			"id": 0,
			"name": "#System"
		},
		{
			"id_str": "1",
			"href": "https://crest-tq.eveonline.com/inventory/groups/1/",
			"id": 1,
			"name": "Character"
		},
		{
			"id_str": "2",
			"href": "https://crest-tq.eveonline.com/inventory/groups/2/",
			"id": 2,
			"name": "Corporation"
		},
		{
			"id_str": "3",
			"href": "https://crest-tq.eveonline.com/inventory/groups/3/",
			"id": 3,
			"name": "Region"
		},
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ],
	"next": {
	"href": "https://crest-tq.eveonline.com/inventory/groups/?page=2"
	},
	"totalCount": 1187,
	"pageCount_str": "2"
}
```

## Group
### Route
``/inventory/groups/<groupID:groupIDType>/``

### API version

ItemGroup-v1+json


### GET
* Cache: 1 hour

```json
{
	"category": {
		"href": "https://crest-tq.eveonline.com/inventory/categories/6/"
	},
	"name": "Cruiser",
	"id_str": "26",
	"published": true,
	"id": 26,
	"types": [
		{
			"id_str": "17922",
			"href": "https://crest-tq.eveonline.com/inventory/types/17922/",
			"id": 17922,
			"name": "Ashimmu"
		},
		{
			"id_str": "11011",
			"href": "https://crest-tq.eveonline.com/inventory/types/11011/",
			"id": 11011,
			"name": "Guardian-Vexor"
		},
		{
			"id_str": "34445",
			"href": "https://crest-tq.eveonline.com/inventory/types/34445/",
			"id": 34445,
			"name": "Vexor Quafe Edition"
		},
		{
			"id_str": "33645",
			"href": "https://crest-tq.eveonline.com/inventory/types/33645/",
			"id": 33645,
			"name": "Caracal Wiyrkomi Edition"
		},
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ],
	  "description": ""
}	  
```

## Categories
### Route
``/inventory/categories/``

### API version

ItemCategoryCollection-v1+json

### GET
* Cache: 1 hour

```json
{
	"totalCount_str": "42",
	"items": [
		{
			"id_str": "0",
			"href": "https://crest-tq.eveonline.com/inventory/categories/0/",
			"id": 0,
			"name": "#System"
		},
		{
			"id_str": "1",
			"href": "https://crest-tq.eveonline.com/inventory/categories/1/",
			"id": 1,
			"name": "Owner"
		},
		{
			"id_str": "2",
			"href": "https://crest-tq.eveonline.com/inventory/categories/2/",
			"id": 2,
			"name": "Celestial"
		},
		{
			"id_str": "3",
			"href": "https://crest-tq.eveonline.com/inventory/categories/3/",
			"id": 3,
			"name": "Station"
		},
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ],
	"pageCount": 1,
	"pageCount_str": "1",
	"totalCount": 42
}
```

## Category
### Route
``/inventory/categories/<categoryID:categoryIDType>/``

### API version

ItemCategory-v1+json

### GET
* Cache: 1 hour

```json
{
	"name": "Ship",
	"id_str": "6",
	"id": 6,
	"groups": [
		{
			"id_str": "513",
			"href": "https://crest-tq.eveonline.com/inventory/groups/513/",
			"id": 513,
			"name": "Freighter"
		},
		{
			"id_str": "898",
			"href": "https://crest-tq.eveonline.com/inventory/groups/898/",
			"id": 898,
			"name": "Black Ops"
		},
		{
			"id_str": "1283",
			"href": "https://crest-tq.eveonline.com/inventory/groups/1283/",
			"id": 1283,
			"name": "Expedition Frigate"
		},
		{
			"id_str": "900",
			"href": "https://crest-tq.eveonline.com/inventory/groups/900/",
			"id": 900,
			"name": "Marauder"
		},
        { "..." },
        { "..." },
        { "..." },
        { "..." },
      ],
	"published": true
}
```