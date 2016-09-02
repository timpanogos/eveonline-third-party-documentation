# TournamentCollection
To be determined (TBD)

This is a proposed template for all endpoints.  Suggested terms using the example of this object:

* schema: obtained with the Options endpoint.
* endpoint object:  The root object of the endpoint as reported by the schema.
* object: any nested object within an endpoint object.
* accept base: `application/vnd.ccp.eve.TournamentCollection` the UID of the object as obtained from the schema, less the version.
* endpoint name: `TournamentCollection` the leaf name of the accept base.
* Accept: the UID/version obtained from the schema for this endpoint.  
* Route: obtained with the CallGroups endpoint
* Version: the version value extracted from the Accept string.
* Data: a pseudo representation of the returned data based on the schema for this object.  

1. The endpoint's .md name should be endpoint name.
2. The navigation index should use the endpoint name.
3. We lose the ### GET as not really useful.  Perhaps in table form.
4. we capture what we know now via the options and callGroups endpoint object graphs. with the (TBD) flags as place holders. 

### Accept
`application/vnd.ccp.eve.TournamentCollection-v1+json`

### Route
`/tournaments/`

### Version
`v1+json`

### Cache time
'(TBD)'

### Data
(TBD)
```
   TournamentCollection
  
type variableName1

type of type variableName2

```
  

