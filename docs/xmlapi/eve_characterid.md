## CharacterID

* __Path:__ ``/eve/CharacterID.xml.aspx ``
* __Access mask:__ None
* __Cache timer:__ 720 minutes
* __Parameters:__
    <table>
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>names</td>
                <td>String</td>
                <td>
                    Comma-separated list of character names to query.<br />
                    Character names are not case-sensitive.
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
  <currentTime>2015-11-23 18:57:12</currentTime>
    <result>
      <rowset name="characters" key="characterID" columns="name,characterID">
        <row name="Ito Saika" characterID="95985338" />
        <row name="Shion Saika" characterID="95991232" />
      </rowset>
    </result>
  <cachedUntil>2015-12-23 18:57:12</cachedUntil>
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
            <td>Character name.</td>
        </tr>
        <tr>
            <td>characterID</td>
            <td>int</td>
            <td>Character ID.</td>
        </tr>
    </tbody>
</table>
