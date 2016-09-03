# Options
Options is the object returned with an HTTP OPTIONS request of the EVE root entry point which returns a full schema tree defining the object graph currently running and available from EVE.  This includes each endpoints `Accept` string, version and typing of all variables in the model. 

This object used in connection with the [EndpointCollection](callGroups.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.

The EVE root reports the entire tree, however each valid endpoint (see EndpointCollection) can be called to report just the schema of that endpoint.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Version
`v5`

### Route
`EVE root for a full tree report`

`any valid endpoint for just that object's schema`

### Inputs
None

### Cache time
300 seconds (5 minutes)

### Data

```
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
        
```

### Notes
1. The json structure is not OOP friendly and will require special attention.
2. This is an custom CCP meta-data format.  For an example of converting this to proper json schema see [crestmatic](http://jimpurbrick.com/crestmatic/) and [crestexplorerjs](http://jimpurbrick.com/crestexplorerjs/#https://crest-tq.eveonline.com/).


