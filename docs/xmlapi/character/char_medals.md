# Medals
Retrieve a list of medals the character has.

* __Path:__ ``/char/Medals.xml.aspx``
* __Cache timer:__ 6 hours
* __Access mask:__ 8192
* __Parameters:__
    <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Description</th>
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
<result>
    <rowset name="currentCorporation" key="medalID" columns="medalID,reason,status,issuerID,issued">
        <row medalID="95079" reason="For continued support, loyalty and dedication towards" status="public" issuerID="259695227" issued="2012-11-19 08:21:17"/>
    </rowset>
    <rowset name="otherCorporations" key="medalID" columns="medalID,reason,status,issuerID,issued,corporationID,title,description">
        <row medalID="4106" reason="For continued support, loyalty and dedication towards the Centre for Advanced Studies" status="private" issuerID="132533870" issued="2008-11-25 10:36:01" corporationID="1711141370" title="Medal of Service" description="For taking initiative and making an extraordinary contribution towards the corporation"/>
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
            <td>medalID</td>
            <td>int</td>
            <td>Unique medal ID for this medal.</td>
        </tr>
        <tr>
            <td>reason</td>
            <td>string</td>
            <td>Issuer entered reason.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>string</td>
            <td>If this medal viewable to the public through the Character Info Sheet. (Options: private, public)</td>
        </tr>
        <tr>
            <td>issuerID</td>
            <td>int</td>
            <td>Issuing character ID.</td>
        </tr>
        <tr>
            <td>issued</td>
            <td>datetime</td>
            <td>Date and time this medal was issued.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>Corporation ID of issuing corporation.</td>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>Title of Medal as displayed in-game.</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
            <td>Issuer entered description of what the medal is for.</td>
        </tr>
    </tbody>
</table>