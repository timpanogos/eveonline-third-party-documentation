# TournamentCollection
"Back in the day (by which I mean late 2013), CCP provided a neat-o set of endpoints that allowed CREST developers to request tick-by-tick gameplay recordings of Alliance Tournament matches, and create visualisation tools to reconstruct and play back AT matches. This functionality broke in early 2014, and has been unusable for two years. They're now back online and ready for use in Alliance Tournament XIV! You can also retrieve the replay data from tournaments that ran while the endpoint was non-operational, for your viewing pleasure."
-CCP Bartender  

(TBD) Based on CCP Bartender's above quote the following is a guess: Given a `seriesID` and a `matchID` along with the `"static"` command The TournamentCollection endpoint returns a collection of static named tournament URI's along with optional `next` and `previous` URL's to other Tournament information web pages.  The `"realtime"` command can be given inplace of the `"static"` command along with a `frameID` to obtain a collection of frame named tournament URI's.  

This endpoint is pageable to be able to handle very large collections of static/realtime named tournament URI's.  If the returned TournamentCollection object contains `pageCount` and `totalCount` fields then the total content can be walked. (TBD - link to paging description)

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

### Version
`v1`

### Route
`/tournaments/`

### Inputs
`<tournamentID>/series/<seriesID:Long>/matches/<matchID:Long>/static/`

`<tournamentID>/series/<seriesID:Long>/matches/<matchID:Long>/realtime/<frameID:Long>/`

(TBD) page walking id?
 
### Cache time

300 seconds (5 minutes)

### Data
    Tournament
        Long pageCount       // optional, Long (64bit integer)
        Array[Dict] items    // Array of Dict
        Long totalCount      // optional Long (64bit integer)
        ExternalRef next     // optional External reference
        ExternalRef previous // optional External reference
    Array[Dict]
        Object[Ref] href // Link to a tournament resource
    Ref
        Uri href    // Uri to Tournament
        String name // Unicode string (unicode)	
    ExternalRef
        Uri href // External reference
		
### Notes
1. The json structure is not OOP friendly and will require special attention.

  

