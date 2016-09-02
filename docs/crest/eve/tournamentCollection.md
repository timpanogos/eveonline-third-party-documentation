# TournamentCollection
To be determined (TBD)

This is a proposed template for all endpoints.  Suggested terms using the example of this object:

* schema: obtained with the Options endpoint.
* endpoint object:  The root object of the endpoint as reported by the schema.
* object: any nested object within an endpoint object.
* accept base: `application/vnd.ccp.eve.TournamentCollection` the UID of the object as obtained from the schema, less the version.
* endpoint name: `TournamentCollection` the leaf name of the accept base.
* Accept: the UID/version obtained from the schema for this endpoint.  
* Route: obtained with the EndpointCollection endpoint
* Version: the version value extracted from the Accept string.
* Data: a pseudo representation of the returned data based on the schema for this object.  

1. The endpoint's .md name should be endpoint name.
2. The navigation index should use the endpoint name.
3. We lose the ### GET as not really useful.  Perhaps the new ###Data is in table form?
4. we capture what we know now via the options and EndpointCollection object graph. with the (TBD) flags as place holders if they are not already found here. 

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

A possible way to display the schema (I prefer this one)

    Tournament
        long someId
        UnicodeString someutf8
        String someString
        int someInt
        Array1 arrayOfOrdinal
		Array2 arrayOfObject
		Object1 firstLevelObject
    Array1
		long
    Array2
		Object2
	Object1
		long someId
		Object2 secondLevelObject
	Object2
		String someString

Another possible way
<table border="1">
  <tbody>
    <tr>
      <th>Object</th>
      <th>Type</th>
      <th>Variable</th>
    </tr>
    <tr>
      <td>Tournament</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>long</td>
      <td>someId</td>
    </tr>
    <tr>
      <td></td>
      <td>UnicodeString</td>
      <td>someutf8String</td>
    </tr>
    <tr>
      <td></td>
      <td>String</td>
      <td>someString</td>
    </tr>
    <tr>
      <td></td>
      <td>int</td>
      <td>someCount</td>
    </tr>
    <tr>
      <td></td>
      <td>Array1</td>
      <td>arrayOfOrdinal</td>
    </tr>
    <tr>
      <td></td>
      <td>Array2</td>
      <td>arrayOfObject</td>
    </tr>
    <tr>
      <td></td>
      <td>Object1</td>
      <td>firstLevelObject</td>
    </tr>
    <tr>
      <td>Array1</td>
      <td>long</td>
      <td></td>
    </tr>
    <tr>
      <td>Array2</td>
      <td>Object1</td>
      <td></td>
    </tr>
    <tr>
      <td>Object1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>long</td>
      <td>someId</td>
    </tr>
    <tr>
      <td></td>
      <td>Object2</td>
      <td>secondLevelObject</td>
    </tr>
    <tr>
      <td>Object2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>String</td>
      <td>someString</td>
    </tr>
  </tbody>
</table>

```
   TournamentCollection
  
type variableName1

type of type variableName2

```
  

