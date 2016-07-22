# Bloodlines

The bloodlines resource allows an application to read information on the various bloodlines.

### Route
``/bloodlines/``


### API version

BloodlineCollection-v2+json

### GET
* Cache: 5 minutes

```json
{
	"totalCount_str": "15",
	"items": [
		{
			"race": {
				"href": "https://crest-tq.eveonline.com/races/1/"
				},
			"description": "The Deteis are regarded as the face of leadership in Caldari society. Commonly possessed of sharp, ordered minds and articulate tongues, they are mostly found in positions of authority within military and political spheres. Driven by the cultural premise that the good of the whole must come before the needs of the individual, they have made the responsibility of upholding the integrity of the entire Caldari State their own.",
			"name": "Deteis",
			"href": "https://crest-tq.eveonline.com/bloodlines/1/",
			"id_str": "1",
			"id": 1,
			"icon": {
				"href": "icon_bloodline_deteis"
				}
		},
		{
			"race": {
				"href": "https://crest-tq.eveonline.com/races/1/"
				},
			"description": "Whether engaged in trade or combat, the Civire are absolute masters of focused aggression. Highly competitive individuals, they thrive under chaotic circumstances and frenetic activity. They are often employed in highly stressful industrial and military professions due to an innate ability to think quickly on their feet and remain composed under pressure.",
			"name": "Civire",
			"href": "https://crest-tq.eveonline.com/bloodlines/2/",
			"id_str": "2",
			"id": 2,
			"icon": {
				"href": "icon_bloodline_civire"
				}
		},
		{
			"race": {
				"href": "https://crest-tq.eveonline.com/races/2/"
				},
			"description": "Widely respected as some of the cluster's most innovative thinkers, the Sebiestor are an ingenious people with a natural fondness for engineering. For the last millennium they have pioneered advances in applied sciences, despite laboring under chronic material shortages. Masters of deriving solutions from impossible circumstances, Sebiestor engineers believe they can build anything, with anything, out of anything.",
			"name": "Sebiestor",
			"href": "https://crest-tq.eveonline.com/bloodlines/3/",
			"id_str": "3",
			"id": 3,
			"icon": {
				"href": "icon_bloodline_sebiestor"
				}
		},
		{"..."},
		{"..."},
		{"..."}
	],
	"pageCount": 1,
	"pageCount_str": "1",
	"totalCount": 15
}
```