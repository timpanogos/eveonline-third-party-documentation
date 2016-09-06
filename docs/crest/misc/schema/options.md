# Options
Options is the object returned with an HTTP OPTIONS request of the CREST root entry point which returns a full schema tree defining the object graph currently running and available from CREST.  This includes each endpoints `Accept` string, version and typing of all variables in the model. 

This object used in connection with the [EndpointCollection](endpointCollection.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.

The CREST root reports the entire tree, however each valid endpoint (see EndpointCollection) can be called to report just the schema of that endpoint.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Version
`v5`

### Route
`CREST root for a full tree report`

`any valid endpoint for just that object's schema`

### Inputs
None

### Cache time
300 seconds (5 minutes)

### Data

    Representations
        Array[Representation]
    Representation
        String versionStr
        AcceptType acceptType 
        String verb           // Unicode string (unicode)
        int version           // Long (64bit integer)
        boolean thirdParty    // Boolean value (bool)
    AcceptType
        String name     // Unicode string (unicode)
        CcpType ccpType 
    CcpType
        String name           // Unicode string (unicode)
        String description    // Unicode string (unicode)
        boolean optional      // Boolean value (bool)
        String extraData
        String typePrettyName // Unicode string (unicode)
        String type
        Array[CcpType] children
        
### Sample

    {
	    "representations": 
	    [
		    {
			    "version_str": "1", 
			    "acceptType": 
			    {
				    "name": "application/vnd.ccp.eve.ConstellationCollection-v1+json", 
				    "jsonDumpOfStructure": 
    				"{
	    				\"description\": null, 
		    			\"isOptional\": false, 
			    		\"extraData\": 
				    	\"vnd.ccp.eve.ConstellationCollectionItem-v1\", 
    					\"subContent\": 
	    				{
		    				\"pageCount\": 
			    			{
				    			\"description\": null, 
					    		\"isOptional\": true, 
						    	\"extraData\": null, 
    							\"subContent\": null, 
	    						\"typePrettyName\": \"Long (64bit integer)\", 
		    					\"type\": \"Long\"
			    			}, 
				    		\"items\": 
					    	{
						    	\"description\": null, 
    							\"isOptional\": false, 
	    						\"extraData\": \"vnd.ccp.eve.ConstellationCollectionItem-v1\", 
		    					\"subContent\": 
			    				{
				    				\"href\": 
					    			{
						    			\"description\": null, 
							    		\"isOptional\": false, 
								    	\"extraData\": \"Constellation\", 
    									\"subContent\": null, 
	    								\"typePrettyName\": \"Uri to Constellation\", 
		    							\"type\": \"Uri\"
			    					},
				    				...
					    		}, 
						    	\"typePrettyName\": \"Array of vnd.ccp.eve.ConstellationCollectionItem-v1\", 
    							\"type\": \"Array\"
	    					}, 
		    				...
			    		}, 
				    	\"typePrettyName\": \"Collection of vnd.ccp.eve.ConstellationCollectionItem-v1\", 
    					\"type\": \"Collection\"
	    			}
		    	"}, 
    			"verb": "GET", 
	    		"version": 1, 
		    	"thirdParty": true
    		}, 
	    	...
	    ]
    }

### Notes
1. The json structure is not OOP friendly and will require special attention.
2. This is a custom CCP meta-data format.  For an example of converting this to proper json schema see [crestmatic](http://jimpurbrick.com/crestmatic/) and [crestexplorerjs](http://jimpurbrick.com/crestexplorerjs/#https://crest-tq.eveonline.com/).
