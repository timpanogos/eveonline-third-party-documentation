# Options
Options is the object returned with an http.options request of the EVE root entry point which returns a full schema tree defining the object graph currently running/available from EVE.  This includes each endpoints `Accept` string, version and typing of all variables in the model. 

This object used in connection with the [CallGroups](callGroups.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.

The EVE root reports the entire tree, however each valid endpoint (see CallGroups) can be called to report just the schema of that endpoint.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Route
`EVE root for a full tree report`

`any valid endpoint for just that object's schema`


### Version
`v5+json`

### Cache time
'20 seconds'

### Data
(TBD)
```
   Options object
   variable: type of type: long 

```
