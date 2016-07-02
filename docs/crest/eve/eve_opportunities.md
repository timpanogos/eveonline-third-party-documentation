# Opportunities Tasks and Opportunities Groups

## Opportunities Tasks
### Route
``/opportunities/tasks/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "57",
  "items": [
    {
      "notificationText": "Completed<br>Mine Ore",
      "id_str": "2",
      "description": "Wait for your mining laser cycle to finish.",
      "name": "Mine Ore",
      "id": 2
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 57
}
```

## Opportunities Task
### Route
``/opportunities/tasks/<opportunitiesTaskId:opportunitiesTaskIdType>/``

### GET
* Cache: 1 hour

```json
{
  "notificationText": "Completed<br>Mine Ore",
  "id_str": "2",
  "description": "Wait for your mining laser cycle to finish.",
  "name": "Mine Ore",
  "id": 2
}
```

## Opportunities Groups
### Route
``/opportunities/groups/``

### GET
* Cache: 1 hour

```json
{
  "totalCount_str": "20",
  "items": [
    {
      "groupConnections": [
        {
          "href": "https://crest-tq.eveonline.com/opportunities/groups/101/",
          "id": 101,
          "id_str": "101"
        }
      ],
      "description": "Awareness of what is going on around you in space is very important to a capsuleer. Using your camera is key.",
      "notificationText": "Completed:<br>Take a Look Around",
      "id_str": "100",
      "achievementTasks": [
        {
          "href": "https://crest-tq.eveonline.com/opportunities/tasks/61/",
          "id": 61,
          "id_str": "61"
        },
        {
          "href": "https://crest-tq.eveonline.com/opportunities/tasks/60/",
          "id": 60,
          "id_str": "60"
        },
        {
          "href": "https://crest-tq.eveonline.com/opportunities/tasks/63/",
          "id": 63,
          "id_str": "63"
        },
        {
          "href": "https://crest-tq.eveonline.com/opportunities/tasks/64/",
          "id": 64,
          "id_str": "64"
        }
      ],
      "id": 100,
      "name": "Take a Look Around"
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
  ],
  "pageCount": 1,
  "pageCount_str": "1",
  "totalCount": 20
}
```

## Opportunities Group
### Route
``/opportunities/groups/<opportunitiesGroupId:opportunitiesGroupIdType>/``

### GET
* Cache: 1 hour

```json
{
  "groupConnections": [
    {
      "href": "https://crest-tq.eveonline.com/opportunities/groups/102/",
      "id": 102,
      "id_str": "102"
    }
  ],
  "description": "As a capsuleer, you are your ship. Learning to fly it is essential.",
  "notificationText": "Completed:<br>Let's Get Moving",
  "id_str": "101",
  "achievementTasks": [
    {
      "href": "https://crest-tq.eveonline.com/opportunities/tasks/23/",
      "id": 23,
      "id_str": "23"
    },
    {
      "href": "https://crest-tq.eveonline.com/opportunities/tasks/38/",
      "id": 38,
      "id_str": "38"
    }
  ],
  "id": 101,
  "name": "Let's Get Moving"
}
```
