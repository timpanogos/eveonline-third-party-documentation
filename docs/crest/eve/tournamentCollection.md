# TournamentCollection
The TournamentCollection returns a collection of named tournament URI's along with optional `next` and `previous` URL's to other Tournament information web pages.  This endpoint is pageable to be able to handle very large collections of named tournament URI's.  If the returned TournamentCollection object contains `pageCount` and `totalCount` fields then the total content can be [walked - yes sal knows this is broken](../../xmlapi/walking.md).  

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

### Version
`v1`

### Route
`/tournaments/`

### Inputs
`[fromID:Long]`
 
### Cache time
(TBD)

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
		Uri href	// Uri to Tournament
		String name // Unicode string (unicode)	
	ExternalRef
		Uri href // External reference
		

  

