# TournamentCollection-listTournaments
>Back in the day (by which I mean late 2013), CCP provided a neat-o set of endpoints that allowed CREST developers to request tick-by-tick gameplay recordings of Alliance Tournament matches, and create visualisation tools to reconstruct and play back AT matches. This functionality broke in early 2014, and has been unusable for two years. They're now back online and ready for use in Alliance Tournament XIV! You can also retrieve the replay data from tournaments that ran while the endpoint was non-operational, for your viewing pleasure.
-CCP Bartender  

This is the root-base endpoint for all Tournament functionality.  There are eight nested endpoints under this root-base.  The Children Endpoints section below links to the next level of functionality.  That level's ParentEndpoints will link back up to here and it's children will link down the route.  This pattern continues to the leaf functionalities.  The All Descendants section below is for convenience in jumping to any of the descendants.   

 The overall Routes are as follows:

`/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/static/`

`/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/realtime/<Long:frameId>/`

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

### Version
`v1`

### Route
`/tournaments/`

### Inputs
None

### Parent Endpoints
None

### Children Endpoints
[tournamentGetTournament](tournamentGetTournament.md)

### All Descendants
[tournamentGetTournament](tournamentGetTournament.md)

[tournamentSeriesCollection](tournamentSeriesCollection.md)

[tournamentGetSeries](tournamentGetSeries.md)

[tournamentMatchCollection](tournamentMatchCollection.md)

[tournamentGetMatch](tournamentGetMatch.md)

[tournamentGetStatic](tournamentGetStatic.md)

[tournamentRealtimeRange](tournamentRealtimeRange.md)

[tournamentGetFrame](tournamentGetFrame.md)
 

### Cache time

300 seconds (5 minutes)

### Data
    Tournaments
        Long pageCount
        String pageCountStr
        Long totalCount
        String totalCountStr
        Array[Tournament] tournaments; 
    Tournament
        HrefWrapper hrefWrapper
    HrefWrapper 
        String href // Uri to Tournament
        String name // Unicode string (unicode)
        
        		
### Notes
1. The json structure is not OOP friendly.  The value does not match the schema and will require special attention.

  

