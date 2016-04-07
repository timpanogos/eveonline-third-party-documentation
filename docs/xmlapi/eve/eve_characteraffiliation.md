# CharacterAffiliation

* __Path:__ ``/eve/CharacterAffiliation.xml.aspx ``
* __Access mask:__ None
* __Cache timer:__ 60 minutes
* __Parameters:__
    <table border="1">
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
                    Comma-separated list of characterIDs
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="characters" key="characterID" columns="characterID,characterName,corporationID,corporationName,allianceID,allianceName,factionID,factionName">
        <row characterID="95985338" characterName="Ito Saika" corporationID="98427101" corporationName="Saika Garden" allianceID="0" allianceName="" factionID="0" factionName="" />
        <row characterID="95991232" characterName="Shion Saika" corporationID="98427101" corporationName="Saika Garden" allianceID="0" allianceName="" factionID="0" factionName="" />
        <row characterID="96002441" characterName="Zetto Saika" corporationID="1000179" corporationName="24th Imperial Crusade" allianceID="0" allianceName="" factionID="500003" factionName="Amarr Empire" />
    </rowset>
</result>
```

### Result Data

<table border="1">
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
            <td>characterID</td>
            <td>int</td>
            <td>ID number of the character.</td>
        </tr>
        <tr>
            <td>characterName</td>
            <td>string</td>
            <td>Name of the character.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>ID number of the character's current corporation.</td>
        </tr>
        <tr>
            <td>corporationName</td>
            <td>string</td>
            <td>Name of the character's current corporation.</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>int</td>
            <td>ID number of the character's current alliance.</td>
        </tr>
        <tr>
            <td>allianceName</td>
            <td>string</td>
            <td>Name of the character's current alliance.</td>
        </tr>
        <tr>
            <td>factionID</td>
            <td>int</td>
            <td>ID number of the character's current faction.</td>
        </tr>
        <tr>
            <td>factionName</td>
            <td>string</td>
            <td>Name of the character's current faction.</td>
        </tr>
    </tbody>
</table>
