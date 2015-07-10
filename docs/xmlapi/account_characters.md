## Characters


* __Path:__ ``/account/Characters.xml.aspx``
* __Access mask:__ -  
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
                <td>keyID</td>
                <td><strong>long</strong></td>
                <td>API key ID</td>
            <tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-07-10 10:39:08</currentTime>
    <result>
        <rowset name="characters" key="characterID" columns="name,characterID,corporationName,corporationID,allianceID,allianceName,factionID,factionName">
            <row name="Hel O'Ween" characterID="1655827332" corporationName="Men On A Mission" corporationID="1226284052" allianceID="0" allianceName="" factionID="0" factionName="" />
        </rowset>
    </result>
    <cachedUntil>2015-07-10 11:28:54</cachedUntil>
</eveapi>```  

### Result Data

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>name</td>
            <td>char</td>
            <td>The name of the character for the requested data</td>
        </tr>
        <tr>
            <td>characterID</td>
            <td>int</td>
            <td>
                The ID of the character for the requested data, from [char/CharacterList](char_characterlist.md). 
                Only for /char/ endpoints. Optional when the API key is only valid for a single character.
            </td>
        </tr>
        <tr>
            <td>corporationName</td>
            <td>char</td>
            <td>The name of the corporation of the character.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>The ID of the corporation of the character.</td>
        </tr>
        <tr>
            <td>allianceName</td>
            <td>char</td>
            <td>The name of the alliance of the character.</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>int</td>
            <td>The ID of the alliance of the character.</td>
        </tr>
        <tr>
            <td>factionName</td>
            <td>char</td>
            <td>The name of the faction of the character.</td>
        </tr>
        <tr>
            <td>factionID</td>
            <td>int</td>
            <td>The ID of the faction of the character.</td>
        </tr>
    </tbody>
</table>
