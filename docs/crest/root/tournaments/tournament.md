# vnd.ccp.eve.Tournament-v1+json

## Description

## Navigation

* [group](tournamentGroup.md)
* [Tournament](tournament.md)  → [TournamentSeriesCollection](tournamentSeriesCollection.md) → [TournamentSeries](tournamentSeries.md) → [TournamentMatchCollection](tournamentMatchCollection.md)  
* next: tournaments[index].tournament.hrefWrapper.tournamentUrl
* next: Use desired Array[Tournament] index + 1
* here: https://crest-tq.eveonline.com/tournaments/
* next: https://crest-tq.eveonline.com/tournaments/1/
# application/vnd.ccp.eve.Tournament-v1+json

(TBD)  
This endpoint returns the tournament object for the requested TournamentId.

### Cache time

* 300 seconds (5 minutes)

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