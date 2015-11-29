## CharacterName

* __Path:__ ``/eve/CharacterName.xml.aspx ``
* __Access mask:__ None
* __Cache timer:__ 30 days
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
                <td>
                    Comma-separated list of ownerIDs to query.<br />
                    IDs can be of characters, corporations, alliances, solar systems, and so on.<br />
                    Note that typeIDs have their own API call.
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
  <currentTime>2015-11-29 17:59:16</currentTime>
  <result>
    <rowset name="characters" key="characterID" columns="name,characterID">
      <row name="Backdoor Bandit" characterID="696271586" />
      <row name="EVE University" characterID="917701062" />
      <row name="Ivy League" characterID="937872513" />
      <row name="Jita" characterID="30000142" />
    </rowset>
  </result>
  <cachedUntil>2015-12-29 17:59:16</cachedUntil>
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
            <td colspan="3">Rowset <strong>characters</strong></td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of character/corporation/alliance and so on</td>
        </tr>
        <tr>
            <td>characterID</td>
            <td>long</td>
            <td>OwnerID of character/corporation/alliance and so on</td>
        </tr>
    </tbody>
</table>

### References

* [Post](http://oldforums.eveonline.com/?a=topic&threadID=1472141&page=1#15) on the old EVE-O forums regarding changes done to the API endpoint. Please that it is old and some information is no longer valid (typeIDs where later split to another API endpoint, see below.).
* [Post](https://forums.eveonline.com/default.aspx?g=posts&m=658822#post658822) on the new EVE-O forums regarding typeID no longer being served from /EVE/CharacterName.