# EndpointCollection  (was CallGroups) 
EndpointCollection is the object returned with an http.get request of the EVE root entry point which returns a two dimensional array of `[Group][leaf]` where group is the first segment uri and endpoint is the second segment uri which when appended to the desired EVE service root (i.e. test server or tranquility) results in a given endpoints url.  For example `/inventory/types/` where inventory is the group and types is the leaf. 

This object used in connection with the [Options](options.md) endpoint can be used to write dynamic uri's and endpoint version checking crest clients.  

### Accept
`application/vnd.ccp.eve.Api-v5+json`

### Route
`EVE root is the route`


### Version
`v5+json`

### Cache time
'20 seconds'

### Data
(TBD)
```
   EndpointCollection object
   variable: type of type: Unicode string 

```
