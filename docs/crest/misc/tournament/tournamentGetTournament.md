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
/<Long:tournamentId>/

### Parent Endpoints
[tournamentCollection](tournamentCollection.md)

### Children Endpoints
[tournamentSeriesCollection](tournamentSeriesCollection.md)

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
        		
### Notes
(TBD)