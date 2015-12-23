## Planetary Links

* __Path:__ ``/char/PlanetaryLinks.xml.aspx``
* __Access mask:__ 2
* __Cache timer:__ 60 minutes <sup title="Planetary colony information has special update rules.  See notes below" style="color: red">&#x2605;</sup>
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
                <td>Character ID for which planetary links will be retrieved</td>
            </tr>
            <tr>
                <td>planetID</td>
                <td><strong>int</strong></td>
                <td>Planet ID of planet for which links will be retrieved</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="links" key="sourcePinID" columns="sourcePinID,destinationPinID,linkLevel">
        <row sourcePinID="1009564405863" destinationPinID="1009564416193" linkLevel="0"/>
        <row sourcePinID="1009564405864" destinationPinID="1009564416193" linkLevel="0"/>
        <row sourcePinID="1009564416193" destinationPinID="1009564438251" linkLevel="0"/>
        <row sourcePinID="1009564416193" destinationPinID="1009564438252" linkLevel="0"/>
        <row sourcePinID="1009564416193" destinationPinID="1009564438253" linkLevel="0"/>
        <row sourcePinID="1009564416193" destinationPinID="1010009138733" linkLevel="0"/>
    </rowset>
</result>
```  

### Result Data

<table>
    <tbody>
        <tr>
            <td>links</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per planetary link.</td>
        </tr>
        <tr>
            <td></td>
            <td>sourcePinID</td>
            <td><strong>long</strong></td>
            <td>Source pin ID for this link.</td>
        </tr>
        <tr>
            <td></td>
            <td>destinationPinID</td>
            <td><strong>long</strong></td>
            <td>Destination pin ID for this link.</td>
        </tr>
        <tr>
            <td></td>
            <td>linkLevel</td>
            <td><strong>int</strong></td>
            <td>Current link upgrade level.</td>
        </tr>
    </tbody>
</table>

### Notes

* Unlike other API data, planetary information is only updated when the colony is accessed through the EVE Online client.  The information returned by this endpoint will remain unchanged until the next time the colony is viewed through the client.
