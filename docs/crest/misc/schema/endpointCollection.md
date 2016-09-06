# EndpointCollection 
EndpointCollection is the object returned with an http.get request of the EVE root entry point which returns a two dimensional array of `[Group][leaf]` where group is the first segment uri and endpoint is the second segment uri which when appended to the desired EVE service root (i.e. test server or tranquility) results in a given endpoints url.  For example `/inventory/types/` where inventory is the group and types is the leaf. 

This object used in connection with the [Options](options.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Version
`v5`

### Route
`EVE root is the route`

### Inputs
None

### Cache time
20 seconds

### Data

    EndpointCollection
        Long userCount               // Long (64bit integer)
        String serverVersion;        // Unicode string (unicode)
        String serverName;           // Unicode string (unicode)
        String serviceStatus;        // Unicode string (unicode)
        Array[EndpointGroup] groups; // Array of EndpointGroups
    EndpointGroup
	    String name                 // Unicode string (unicode)
	    Array[Endpoint] endpoints	// Array of Endpoint  
    Endpoint
	    String name // Unicode string (unicode)
	    String uri  // Uri of Endpoint  
  
### Sample

Variant one

	groupName: 
	{
		"href": "https://crest-tq.eveonline.com/constellations/"
	}

Variant two

	groupName: 
	{
		endpointName1: 
		{
			"href": "https://crest-tq.eveonline.com/opportunities/tasks/"
		}, 
		"endpointName2": 
		{
			"href": "https://crest-tq.eveonline.com/opportunities/groups/"
		}
	}

### Notes
1. The json structure is inconsistent and will require tweaks for OOP parsers.
