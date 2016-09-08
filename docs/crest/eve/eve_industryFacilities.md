# Industry Facilities and Facility

This returns all publicly accessible facilities, including player built outposts in nullsec.

## Facilities
### Route
``/industry/facilities/``

### API version

IndustryFacilityCollection-v1+json

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "6328",
  "items": [
    {
      "facilityID": 60003466,
      "solarSystem": {
        "id": 30000142,
        "id_str": "30000142"
      },
      "name": "Jita IV - Moon 4 - Caldari Business Tribunal Bureau Offices",
      "region": {
        "id": 10000002,
        "id_str": "10000002"
      },
      "tax": 0.1,
      "facilityID_str": "60003466",
      "owner": {
        "id": 1000033,
        "id_str": "1000033"
      },
      "type": {
        "id": 1529,
        "id_str": "1529"
      }
    },
    {
      "facilityID": 60003469,
      "solarSystem": {
        "id": 30000142,
        "id_str": "30000142"
      },
      "name": "Jita IV - Caldari Business Tribunal Information Center",
      "region": {
        "id": 10000002,
        "id_str": "10000002"
      },
      "tax": 0.1,
      "facilityID_str": "60003469",
      "owner": {
        "id": 1000033,
        "id_str": "1000033"
      },
      "type": {
        "id": 3872,
        "id_str": "3872"
      }
    },
    {
      "facilityID": 61000398,
      "solarSystem": {
        "id": 30004357,
        "id_str": "30004357"
      },
      "name": "CS-ZGD VIII - We Love Entosis",
      "region": {
        "id": 10000055,
        "id_str": "10000055"
      },
      "facilityID_str": "61000398",
      "owner": {
        "id": 98113098,
        "id_str": "98113098"
      },
      "type": {
        "id": 21645,
        "id_str": "21645"
      }
    },
    { "..." },
    { "..." },
    { "..." },
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 6328
}

```