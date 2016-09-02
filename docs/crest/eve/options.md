# Options
Options is the object returned with an HTTP OPTIONS request of the EVE root entry point which returns a full schema tree defining the object graph currently running and available from EVE.  This includes each endpoints `Accept` string, version and typing of all variables in the model. 

This object used in connection with the [EndpointCollection](callGroups.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.

The EVE root reports the entire tree, however each valid endpoint (see EndpointCollection) can be called to report just the schema of that endpoint.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Route
`EVE root for a full tree report`

`any valid endpoint for just that object's schema`


### Version
`v5+json`

### Cache time
'300 seconds'

### Data
(TBD)

the following is from logging HTTP OPTIONS call to each endpoint reported by EndpointCollection.

json has been converted to a java Object Graph and I've done a java "toString" on each object graph that was returned. The following is the result.

The purpose here is to give you an idea of the schema information available for me, already in a java friendly form from which I can auto-gen at least the ###Data segments or the entire .md if desired.

scroll through looking for H1 header bolding for a few points of interest

note: schema of schema (2nd representation) was edited out to reduce the size of this information.  It is information that is not interesting for our needs.


