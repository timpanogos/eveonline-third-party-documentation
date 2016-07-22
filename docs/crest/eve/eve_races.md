# Races

The races resource allows an application to read information on all four of the races.

### Route
``/races/``


### API version

RaceCollection-v3+json

### GET
* Cache: 5 minutes

```json
{
	"totalCount_str": "4",
	"items": [
			{
			"name": "Gallente",
			"href": "https://crest-tq.eveonline.com/races/8/",
			"id_str": "8",
			"icon": {
				"64x64": {
				"href": "http://imageserver.eveonline.com//Alliance/500004_64.png"
				},
				"128x128": {
				"href": "http://imageserver.eveonline.com//Alliance/500004_128.png"
				},
				"32x32": {
				"href": "http://imageserver.eveonline.com//Alliance/500004_32.png"
				}
			},
			"id": 8,
			"description": "Champions of liberty and defenders of the downtrodden, the Gallente play host to the only true democracy in New Eden. Some of the most progressive leaders, scientists, and businessmen of the era have emerged from its diverse peoples. A pioneer of artificial intelligence, the Federation relies heavily on drones and other automated systems. This is not to detract from the skill of their pilots, though: the Gallente Federation is known for producing some of the best and bravest the universe has to offer."
			},
			{
			"name": "Caldari",
			"href": "https://crest-tq.eveonline.com/races/1/",
			"id_str": "1",
			"icon": {
				"64x64": {
				"href": "http://imageserver.eveonline.com//Alliance/500001_64.png"
				},
				"128x128": {
				"href": "http://imageserver.eveonline.com//Alliance/500001_128.png"
				},
				"32x32": {
				"href": "http://imageserver.eveonline.com//Alliance/500001_32.png"
				}
			},
			"id": 1,
			"description": "Founded on the tenets of patriotism and hard work that carried its ancestors through hardships on an inhospitable homeworld, the Caldari State is today a corporate dictatorship, led by rulers who are determined to see it return to the meritocratic ideals of old. Ruthless and efficient in the boardroom as well as on the battlefield, the Caldari are living emblems of strength, persistence, and dignity."
			},
			{
			"name": "Minmatar",
			"href": "https://crest-tq.eveonline.com/races/2/",
			"id_str": "2",
			"icon": {
				"64x64": {
				"href": "http://imageserver.eveonline.com//Alliance/500002_64.png"
				},
				"128x128": {
				"href": "http://imageserver.eveonline.com//Alliance/500002_128.png"
				},
				"32x32": {
				"href": "http://imageserver.eveonline.com//Alliance/500002_32.png"
				}
			},
			"id": 2,
			"description": "Once a thriving tribal civilization, the Minmatar were enslaved by the Amarr Empire for more than 700 years until a massive rebellion freed most, but not all, of those held in servitude. The Minmatar people today are resilient, ingenious, and hard-working. Many of them believe that democracy, though it has served them well for a long time, can never restore what was taken from them so long ago. For this reason they have formed a government truly reflective of their tribal roots. They will forever resent the Amarrians, and yearn for the days before the Empire's accursed ships ever reached their home skies."
			},
			{
			"name": "Amarr",
			"href": "https://crest-tq.eveonline.com/races/4/",
			"id_str": "4",
			"icon": {
				"64x64": {
				"href": "http://imageserver.eveonline.com//Alliance/500003_64.png"
				},
				"128x128": {
				"href": "http://imageserver.eveonline.com//Alliance/500003_128.png"
				},
				"32x32": {
				"href": "http://imageserver.eveonline.com//Alliance/500003_32.png"
				}
			},
			"id": 4,
			"description": "The Amarr Empire is the largest and oldest of the four empires. Ruled by a mighty Empress, this vast theocratic society is supported by a broad foundation of slave labor. Amarr citizens tend to be highly educated and fervent individuals, and as a culture Amarr adheres to the basic tenet that what others call slavery is in fact one step on a indentured person's spiritual path toward fully embracing their faith. Despite several setbacks in recent history, the Empire remains arguably the most stable and militarily powerful nation-state in New Eden."
			}
		],
	"pageCount": 1,
	"pageCount_str": "1",
	"totalCount": 4
}
```