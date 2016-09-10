# vnd.ccp.eve.TournamentCollection-v1+json

## Description

This is the root-base endpoint for all Tournament functionality.  There are five nested endpoints under this root-base.

## Navigation

* [group](tournamentGroup.md)
* [TournamentCollection](tournamentCollection.md) → [Tournament](tournament.md)  → [TournamentSeriesCollection](tournamentSeriesCollection.md) → [TournamentSeries](tournamentSeries.md) → [TournamentMatchCollection](tournamentMatchCollection.md)  
* next: tournaments[index].tournament.hrefWrapper.tournamentUrl
* next: Use desired Array[Tournament] index + 1
* here: https://crest-tq.eveonline.com/tournaments/
* next: https://crest-tq.eveonline.com/tournaments/1/

### Data

* cache time: 300 seconds (5 minutes)

### Model

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
  

