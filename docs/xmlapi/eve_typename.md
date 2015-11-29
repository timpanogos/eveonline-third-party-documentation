## TypeName

* __Path:__ ``/eve/TypeName.xml.aspx ``
* __Access mask:__ None
* __Cache timer:__ 1 hour
* __Parameters:__
    <table>
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>ids</td>
                <td>String</td>
                <td>Comma-separated list of typeIDs to query</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
  <currentTime>2015-11-29 20:36:47</currentTime>
  <result>
    <rowset name="types" key="typeID" columns="typeID,typeName">
      <row typeID="645" typeName="Dominix" />
      <row typeID="644" typeName="Typhoon" />
    </rowset>
  </result>
  <cachedUntil>2015-11-29 21:36:47</cachedUntil>
</eveapi>
```

### Result Data

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>types</strong></td>
        </tr>
        <tr>
            <td>typeID</td>
            <td>int</td>
            <td>typeID of object</td>
        <tr>
            <td>typeName</td>
            <td>string</td>
            <td>Name of object</td>
        </tr>
    </tbody>
</table>

### Notes

* The ids string can consist of up to 250 different typeIDs. Every id after that will be ignored and not included in the response.<br />
(Verified through testing at 2015-11-29.)
* If an id does not resolve to a known typeName the response will include it but with the name "Unknown Type".<br />
(Verified through testing at 2015-11-29.)

### References

* [Post](https://forums.eveonline.com/default.aspx?g=posts&m=658822#post658822) on new EVE-O introducing this API endpoint.