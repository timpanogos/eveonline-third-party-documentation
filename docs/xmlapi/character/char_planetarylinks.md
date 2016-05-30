# Planetary Links
Retrieve planetary links for colonies owned by character.

* __Path:__ ``/char/PlanetaryLinks.xml.aspx``
* __Cache timer:__ 60 minutes <sup style="color: red; font-weight: bold">(see notes below)</sup>
* __Access mask:__ 2
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

<table border="1">
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
