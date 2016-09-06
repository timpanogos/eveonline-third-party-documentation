# TournamentCollection-getSeries
(TBD)  
This endpoint returns a Series object from the requested TournamentId.SeriesId.

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

(TBD) not obtained from schema

### Version
`v1`

(TBD) not obtained from schema

### Route
`/tournaments/n/series/`

### Inputs

`/<Long:seriesId>/`

### Parent Endpoints
[tournamentSeriesCollection](tournamentSeriesCollection.md)

### Children Endpoints
[tournamentMatchCollection](tournamentMatchCollection.md)

### Cache time

5 seconds

### Data
    Series
        Long pageCount
        String pageCountStr
        Long totalCount
        String totalCountStr
        Array[TeamInfo] teams; 
    TeamInfo
        Long length 
        String lengthStr 
        TeamWrapper redTeam
        TeamWrapper blueTeam
        MatchesWon matchesWon
        ExternalRef matches
        ExternalRef self
        TeamWrapper winner
        TeamWrapper loser
         
    TeamWrapper
        Team team
    Team
        String teamName
        String teamUrl
    MatchesWon
        Long redTeam
        String redTeamStr
        Long blueTeam
        String blueTeamStr
    ExternalRef
        String url
        String linkType
        

### Sample

    {
		"totalCount_str": "3", 
		"items": 
		[
			{
				"redTeam": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/207/", 
						"teamName": "Elise Randolph"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"matchesWon": 
				{
					"blueTeam_str": "0", 
					"redTeam": 1, 
					"redTeam_str": "1", 
					"blueTeam": 
					0
				}, 
				"matches": 
				{
					"href": "https://api-sisi.testeveonline.com/tournaments/9/series/0/matches/"
				}, 
				"self": 
				{
					"href": "https://api-sisi.testeveonline.com/tournaments/9/series/0/"
				}, 
				"winner": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/207/", 
						"teamName": "Elise Randolph"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"loser": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/210/", 
						"teamName": "Smitty Uitra"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"length": 1, 
				"length_str": "1", 
				"blueTeam": 
				{
					"team": 
					{	
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/210/", 
						"teamName": "Smitty Uitra"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"structure": 
				{
					"outgoingWinner": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/9/series/2/"
					}
				}
			}, 
			{
				"redTeam": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/208/", 
						"teamName": "Mitara Newelle"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"matchesWon": 
				{
					"blueTeam_str": "0", 
					"redTeam": 1, 
					"redTeam_str": "1", 
					"blueTeam": 0
				}, 
				"matches": 
				{
					"href": "https://api-sisi.testeveonline.com/tournaments/9/series/1/matches/"
				}, 
				"self": 
				{
					"href": "https://api-sisi.testeveonline.com/tournaments/9/series/1/"
				}, 
				"winner": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/208/", 
						"teamName": "Mitara Newelle"
					},
					"isDecided": true, 
					"isBye": false
				}, "loser": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/209/", 
						"teamName": "Flyinghotpocket"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"length": 1, 
				"length_str": "1", 
				"blueTeam": 
				{
					"team": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/teams/209/", 
						"teamName": "Flyinghotpocket"
					}, 
					"isDecided": true, 
					"isBye": false
				}, 
				"structure": 
				{
					"outgoingWinner": 
					{
						"href": "https://api-sisi.testeveonline.com/tournaments/9/series/2/"
					}
					"incomingRed": 
					{
						"linkType": "seriesWinner", "href": "https://api-sisi.testeveonline.com/tournaments/9/series/0/"
					}, 
					"incomingBlue": 
					{
						"linkType": "seriesWinner", 
						"href": "https://api-sisi.testeveonline.com/tournaments/9/series/1/"
					}
				}
			}, 
			...
		], 
		"pageCount": 1, 
		"pageCount_str": "1", 
		"totalCount": 3
	}
        		
### Notes
(TBD) various href's point to yet more data

