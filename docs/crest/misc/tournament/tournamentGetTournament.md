# TournamentCollection-getTournament
(TBD)  
This endpoint returns a tournament object from the requested TournamentId.

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

(TBD) not obtained from schema

### Version
`v1`

(TBD) not obtained from schema

### Route
`/tournaments/`

### Inputs

`/<Long:tournamentId>/`

### Parent Endpoints
[tournamentCollection](tournamentCollection.md)

### Children Endpoints
[tournamentGetSeries](tournamentGetSeries.md)

### Cache time

300 seconds (5 minutes)

### Data
    Series
        String name
        String type
        ExternalRef seriesUrl
        Array[TeamStats] teamStats; 
    TeamStats 
        String name 
        String teamsUrl
        ExternalRef matchesUrl 
    ExternalRef
        String url
        String linkType

### Sample

    {
		"series": 
		{
			"href": "https://api-sisi.testeveonline.com/tournaments/9/series/"
		}, 
		"type": "single-elim", 
		"name": "Sarum Preliminary", 
		"entries": 
		[
			{
				"teamStats": 
				{
					"href": "https://api-sisi.testeveonline.com/tournaments/9/teams/208/"
				}, 
				"href": "https://api-sisi.testeveonline.com/tournaments/teams/208/", 
				"name": "Mitara Newelle"
			}, 
			...
		]
	}
        		
### Notes
(TBD) various href's point to yet more data