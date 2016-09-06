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
/<Long:seriesId>/

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
        
        		
### Notes
1. The json structure is not OOP friendly.  The value does not match the schema and will require special attention.


