## ContactList

* __Path:__ ``/char/ContactList.xml.aspx``
* __Access mask:__ 16
* __Cache timer:__ 15 minutes  
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
            </tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-09-10 08:22:11</currentTime>
    <result>
        <rowset name="contactList" key="contactID" columns="contactID,contactName,standing,contactTypeID,labelMask,inWatchlist">
            <row contactID="3013827" contactName="Nouta Dahiva" standing="0" contactTypeID="1373" labelMask="0" inWatchlist="False" />
            <row contactID="3008933" contactName="Saame Marver" standing="0" contactTypeID="1374" labelMask="0" inWatchlist="False" />
            <row contactID="3013522" contactName="Iya Kattora" standing="0" contactTypeID="1375" labelMask="0" inWatchlist="False" />
            <row contactID="3011405" contactName="Okila Kavas" standing="0" contactTypeID="1376" labelMask="0" inWatchlist="False" />
            <row contactID="3009566" contactName="Rias Luisauir" standing="0" contactTypeID="1377" labelMask="0" inWatchlist="False" />
            <row contactID="147874353" contactName="BIG Games" standing="0" contactTypeID="1378" labelMask="0" inWatchlist="True" />
            <row contactID="196379789" contactName="Chribba" standing="5" contactTypeID="1379" labelMask="0" inWatchlist="False" />
            <row contactID="3017057" contactName="Kaer Aginia" standing="0" contactTypeID="1380" labelMask="0" inWatchlist="False" />
            <row contactID="3018696" contactName="Rantoh Funkaki" standing="0" contactTypeID="1383" labelMask="0" inWatchlist="False" />
            <row contactID="3018931" contactName="Antogase Pandon" standing="0" contactTypeID="1384" labelMask="0" inWatchlist="False" />
            <row contactID="3019364" contactName="Doctor Canius" standing="0" contactTypeID="1385" labelMask="0" inWatchlist="False" />
            <row contactID="3019361" contactName="Keita Eslin" standing="0" contactTypeID="1386" labelMask="0" inWatchlist="False" />
            <row contactID="1488155548" contactName="MD Financial Services" standing="0" contactTypeID="2" labelMask="0" inWatchlist="False" />
            <row contactID="903693898" contactName="Biotronics Inc." standing="10" contactTypeID="2" labelMask="0" inWatchlist="False" />
        </rowset>
        <rowset name="contactLabels" key="labelID" columns="labelID,name" />
        <rowset name="corporateContactList" key="contactID" columns="contactID,contactName,standing,contactTypeID,labelMask">
            <row contactID="111751354" contactName="Mark Hamill" standing="5" contactTypeID="1374" labelMask="0" />
            <row contactID="903693898" contactName="Biotronics Inc." standing="10" contactTypeID="2" labelMask="0" />
            <row contactID="1900696668" contactName="The Initiative." standing="5" contactTypeID="16159" labelMask="0" />
        </rowset>
        <rowset name="corporateContactLabels" key="labelID" columns="labelID,name" />
        <rowset name="allianceContactList" key="contactID" columns="contactID,contactName,standing,contactTypeID,labelMask" />
        <rowset name="allianceContactLabels" key="labelID" columns="labelID,name" />
    </result>
    <cachedUntil>2015-09-10 08:36:45</cachedUntil>
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
            <td colspan="3">Rowset <strong>contactList</strong></td>
        </tr>
        <tr>
            <td>contactID</td>
            <td>long</td>
            <td>The characterID/corporationID of the character/agent/corporation in your contact list.</td>
        </tr>
        <tr>
            <td>contactName</td>
            <td>char</td>
            <td>The name of the contact. For deleted entities this field is empty.</td>
        </tr>
        <tr>
            <td>standing</td>
            <td>int</td>
            <td>The standings you set for this contact (see notes).</td>
        </tr>
        <tr>
            <td>contactTypeID</td>
            <td>long</td>
            <td>
                Determines the contact type:<br />
                2 = Corporation<br />
                1373-1386 = Character<br />
                16159 = Alliance
            </td>
        </tr>
        <tr>
            <td>labelMask</td>
            <td>long</td>
            <td>Label(s) from <strong>contactLabels</strong> associated with this entry.</td>
        </tr>
        <tr>
            <td>inWatchlist</td>
            <td>bool</td>
            <td>Has this entry been added to the character's watchlist? Valid for contactTypeID 1373 to 1386 only.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>contactLabels</strong></td>
        </tr>
        <tr>
            <td>labelID</td>
            <td>long</td>
            <td>Unique label ID. Multiple labelIDs bitwise combined result in labelMask.</td>
        </tr>
        <tr>
            <td>name</td>
            <td>char</td>
            <td>The label's text.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporateContactList</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as contactList with the exception of inWatchlist missing.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporateContactLabels</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as contactLabels.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>allianceContactList</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as contactList with the exception of inWatchlist missing.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>allianceContactLabels</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as contactLabels.</em>
            </td>
        </tr>
    </tbody>
</table>

### Notes

* Returns the character's contact and watch lists, __incl. agents__ and respective standings set by 
    the character. Also includes the character's corporation and/or alliance contacts. See the 
    [Standings API](char_standings.md) for standings towards the character from agents and 
    NPC entities. 
