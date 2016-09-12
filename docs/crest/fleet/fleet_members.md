# Fleet Members

## Fleet Members

The fleet members collection provides details about the fleet's members, and allows you to invite new members to the fleet.

- **Route:** [Fleet](fleet_fleet.md) → `members.href`
- **Example URL:** `https://crest-tq.eveonline.com/fleets/1060711261968/members/`

### GET

- **Cache:** 5 seconds
- **Scope:** `fleetRead`

#### Sample Response

`application/vnd.ccp.eve.FleetMembers-v1+json`

```json
{
  "totalCount_str": "1",
  "items": [
    {
      "takesFleetWarp": true,
      "squadID": 3129411261968,
      "solarSystem": {
        "id_str": "30003729",
        "href": "https://crest-tq.eveonline.com/solarsystems/30003729/",
        "id": 30003729,
        "name": "KBP7-G"
      },
      "wingID": 2073711261968,
      "boosterID_str": "3",
      "roleID": 3,
      "character": {
        "isNPC": false,
        "id_str": "93265215",
        "href": "https://crest-tq.eveonline.com/characters/93265215/",
        "id": 93265215,
        "name": "Carbon Alabel"
      },
      "boosterID": 3,
      "boosterName": "Squad Booster",
      "href": "https://crest-tq.eveonline.com/fleets/1060711261968/members/93265215/",
      "squadID_str": "3129411261968",
      "roleName": "Squad Commander (Boss)",
      "station": {
        "id_str": "61000180",
        "href": "https://crest-tq.eveonline.com/stations/61000180/",
        "id": 61000180,
        "name": "KBP7-G VII - The Pig Sty"
      },
      "ship": {
        "id_str": "33328",
        "href": "https://crest-tq.eveonline.com/inventory/types/33328/",
        "id": 33328,
        "name": "Capsule - Genolution 'Auroral' 197-variant"
      },
      "joinTime": "2016-04-29T12:34:56",
      "wingID_str": "2073711261968",
      "roleID_str": "3"
    }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 1
}
```

#### Response Description

- `takesFleetWarp`: Does the member take fleet warps.
- `squadID`: ID of the squad the member is in. If not applicable, will be set to -1.
- `solarSystem`: Solar system the member is located in.
  - `href`: URL of the solar system resource.
  - `id`: ID of the solar system.
  - `name`: Name of the solar system.
- `wingID`: ID of the wing the member is in. If not applicable, will be set to -1.
- `roleID`: ID of the member's role. Possible values:
  - 1 - fleet commander
  - 2 - wing commander
  - 3 - squad commander
  - 4 - squad member
- `character`: Member character.
  - `isNPC`: Is the character an NPC.
  - `href`: URL of the character resource.
  - `id`: ID of the character.
  - `name`: Name of the character.
- `boosterID`: ID of the member's boosting position. Possible values:
  - 0 - not a booster
  - 1 - fleet booster
  - 2 - wing booster
  - 3 - squad booster
- `boosterName`: Name of the member's boosting position.
- `href`: URL of the member resource.
- `roleName`: Name of the member's role. Will also indicate if the member is fleet boss.
- `station`: Station in which the member is docked in. Will not be present if member is not docked in a station.
  - `href`: URL of the station resource.
  - `id`: ID of the station.
  - `name`: Name of the station.
- `ship`: Ship type the member is currently in.
  - `href`: URL of the item type resource.
  - `id`: Type ID of the ship.
  - `name`: Name of the ship type.
- `joinTime`: Date and time at which the member joined the fleet.

#### Notes

### POST

- **Scope:** `fleetWrite`

#### Sample Request

`application/vnd.ccp.eve.FleetMemberInvite-v1+json`

```json
{
  "role": "squadMember",
  "squadID": 3129411261968,
  "wingID": 2073711261968,
  "character": {
    "href": "https://crest-tq.eveonline.com/characters/92168909/"
  }
}
```

#### Request Description

- `role`: Role which the character should have upon joining. Possible values:
  - `fleetCommander`
  - `wingCommander`
  - `squadCommander`
  - `squadMember`
- `squadID`: Squad which the character should be in upon joining, if applicable.
- `wingID`: Wing which the character should be in upon joining, if applicable.
- `character`: The character to which the invite should be sent.
  - `href`: URL of the character resource.

#### Notes

- If a character has a CSPA charge set, it is not possible to invite them to the fleet using CREST.

## Fleet Member

The fleet member resource allows you to kick members out of the fleet and move them around it.

- **Route:** [Fleet](fleet_fleet.md) → `members.href` → `items[].href`
- **Example URL:** `https://crest-tq.eveonline.com/fleets/1060711261968/members/93265215/`

### DELETE

- **Scope:** `fleetWrite`

#### Sample Request

`application/vnd.ccp.eve.FleetMemberDelete-v1+json`

```json
{}
```

### PUT

- **Scope:** `fleetWrite`

#### Sample Request

`application/vnd.ccp.eve.FleetMemberUpdate-v1+json`

```json
{
  "newRole": "squadCommander",
  "newSquadID": 3129411261968,
  "newWingID": 2073711261968
}
```

#### Request Description

- `newRole`: Role which the character should be moved to. Possible values:
  - `fleetCommander`
  - `wingCommander`
  - `squadCommander`
  - `squadMember`
- `newSquadID`: Squad which the character should be moved to, if applicable.
- `newWingID`: Wing which the character should be moved to, if applicable.
