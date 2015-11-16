## APIKeyInfo

* __Path:__ ``/account/APIKeyInfo.xml.aspx``
* __Access mask:__ none
* __Cache timer:__ 5 minutes
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
                <td>The ID of the Customizable API Key (CAK) for authentication.</td>
            </tr>
            <tr>
                <td>vCode</td>
                <td><strong>char(64)</strong></td>
                <td>The user defined or CCP generated <em>Verification Code</em> for the CAK.</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <key accessMask="134217727" type="Character" expires="">
        <rowset name="characters" key="characterID" columns="characterID,characterName,corporationID,corporationName,allianceID,allianceName,factionID,factionName">
            <row characterID="1655827332" characterName="Hel O'Ween" corporationID="1226284052" corporationName="Men On A Mission" allianceID="0" allianceName="" factionID="0" factionName="" />
        </rowset>
    </key>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td></td>
            <td>accessMask</td>
            <td><strong>long</strong></td>
            <td>The bitwise number of the XML API endpoints this API key can query.</td>
        </tr>
        <tr>
            <td></td>
            <td>type</td>
            <td><strong>char</strong></td>
            <td>The access level of the API key <em>(i.e. Account, Character, Corporation)</em>.</td>
        </tr>
        <tr>
            <td></td>
            <td>expires</td>
            <td><strong>datetime</strong></td>
            <td>The date the API key expires. This value will be empty if the key is set to not expire.</td>
        </tr>
        <tr>
            <td>name</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per character included in the API key.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterID</td>
            <td><strong>long</strong></td>
            <td>The ID of the character for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterName</td>
            <td><strong>char</strong></td>
            <td>The name of the character for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationID</td>
            <td><strong>long</strong></td>
            <td>The ID of the corporation for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationName</td>
            <td><strong>char</strong></td>
            <td>The name of the corporation for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceID</td>
            <td><strong>long</strong></td>
            <td>The ID of the alliance for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceName</td>
            <td><strong>char</strong></td>
            <td>The name of the alliance for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>factionID</td>
            <td><strong>long</strong></td>
            <td>The ID of the faction for the requested data.</td>
        </tr>
        <tr>
            <td></td>
            <td>factionName</td>
            <td><strong>char</strong></td>
            <td>The name of the faction for the requested data.</td>
        </tr>
    </tbody>
</table>
