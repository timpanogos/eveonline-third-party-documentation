# application/vnd.ccp.eve.TournamentCollection-v1+json

## Description

>Back in the day (by which I mean late 2013), CCP provided a neat-o set of endpoints that allowed CREST developers to request tick-by-tick gameplay recordings of Alliance Tournament matches, and create visualisation tools to reconstruct and play back AT matches. This functionality broke in early 2014, and has been unusable for two years. They're now back online and ready for use in Alliance Tournament XIV! You can also retrieve the replay data from tournaments that ran while the endpoint was non-operational, for your viewing pleasure.
-CCP Bartender  

This is the root-base endpoint for all Tournament functionality.  There are five nested endpoints under this root-base.

## Navigation

* `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/realtime/<Long:frameId>/`
* [TournamentCollection](tournamentCollection.md) → [Tournament](tournament.md)  → [TournamentSeriesCollection](tournamentSeriesCollection.md) → [TournamentSeries](tournamentSeries.md) → [TournamentMatchCollection](tournamentMatchCollection.md)  
* next: tournaments[index].tournament.hrefWrapper.tournamentUrl
* next: Use desired Array[Tournament] index
* here: https://crest-tq.eveonline.com/tournaments/
* next: https://crest-tq.eveonline.com/tournaments/1/

### Data

* cache time: 300 seconds (5 minutes)

    Tournaments
        Long pageCount
        String pageCountStr
        Long totalCount
        String totalCountStr
        Array[Tournament] tournaments; 
    Tournament
        HrefWrapper hrefWrapper
    HrefWrapper 
        String tournamentUrl // Uri to Tournament
        String name          // Unicode string (unicode)
        
### Sample

    {
    	"totalCount_str": "14", 
	    "items": 
	    [
		    {
			    "href": 
    			{
	    			"href": "https://api-sisi.testeveonline.com/tournaments/1/", 
		    		"name": "Alliance Tournament XI"
			    }
    		}, 
	    	...
    	], 
    	"pageCount": 1, 
	    "pageCount_str": "1", 
    	"totalCount": 14
    }
        		
### Notes
1. The json structure is not OOP friendly.  The value does not match the schema and will require special attention.
2. (TBD) various href's point to yet more data
  

