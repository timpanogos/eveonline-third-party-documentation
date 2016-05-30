# Planetary Routes
Retrieve planetary routes for colonies owned by character.

* __Path:__ ``/char/PlanetaryRoutes.xml.aspx``
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
                <td>Character ID for which planetary routes will be retrieved</td>
            </tr>
            <tr>
                <td>planetID</td>
                <td><strong>int</strong></td>
                <td>Planet ID of planet for which routes will be retrieved</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="routes" key="routeID" columns="routeID,sourcePinID,destinationPinID,contentTypeID,contentTypeName,quantity,waypoint1,waypoint2,waypoint3,waypoint4,waypoint5">
        <row routeID="683725077" sourcePinID="1009564405863" destinationPinID="1009564416193" contentTypeID="2308" contentTypeName="Suspended Plasma" quantity="45672" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="683725076" sourcePinID="1009564405864" destinationPinID="1009564416193" contentTypeID="2306" contentTypeName="Non-CS Crystals" quantity="27720" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458913" sourcePinID="1009564416193" destinationPinID="1009564438251" contentTypeID="2308" contentTypeName="Suspended Plasma" quantity="3000" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458914" sourcePinID="1009564416193" destinationPinID="1009564438252" contentTypeID="2306" contentTypeName="Non-CS Crystals" quantity="3000" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458915" sourcePinID="1009564416193" destinationPinID="1009564438253" contentTypeID="2401" contentTypeName="Chiral Structures" quantity="40" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458916" sourcePinID="1009564416193" destinationPinID="1009564438253" contentTypeID="2389" contentTypeName="Plasmoids" quantity="40" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458910" sourcePinID="1009564438251" destinationPinID="1009564416193" contentTypeID="2389" contentTypeName="Plasmoids" quantity="20" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458911" sourcePinID="1009564438252" destinationPinID="1009564416193" contentTypeID="2401" contentTypeName="Chiral Structures" quantity="20" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="499458912" sourcePinID="1009564438253" destinationPinID="1009564416193" contentTypeID="9840" contentTypeName="Transmitter" quantity="5" waypoint1="0" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="508634384" sourcePinID="1010009138733" destinationPinID="1009564438251" contentTypeID="2308" contentTypeName="Suspended Plasma" quantity="3000" waypoint1="1009564416193" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
        <row routeID="508634385" sourcePinID="1010009138733" destinationPinID="1009564438253" contentTypeID="2389" contentTypeName="Plasmoids" quantity="40" waypoint1="1009564416193" waypoint2="0" waypoint3="0" waypoint4="0" waypoint5="0"/>
    </rowset>
</result>
```  

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>routes</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per planetary route.</td>
        </tr>
        <tr>
            <td></td>
            <td>routeID</td>
            <td><strong>long</strong></td>
            <td>Unique route ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>sourcePinID</td>
            <td><strong>long</strong></td>
            <td>Source pin ID for this route.</td>
        </tr>
        <tr>
            <td></td>
            <td>destinationPinID</td>
            <td><strong>long</strong></td>
            <td>Final destination pin ID for this route.</td>
        </tr>
        <tr>
            <td></td>
            <td>contentTypeID</td>
            <td>
            	<strong>int</strong>
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html" title="Inventory Types file">[1]</a>
                </sup>
	        </td>
            <td>Type ID of content transmitted over this route.</td>
        </tr>
        <tr>
            <td></td>
            <td>contentTypeName</td>
            <td><strong>string</strong></td>
            <td>Name of content transmitted over this route.</td>
        </tr>
        <tr>
            <td></td>
            <td>quantity</td>
            <td><strong>int</strong></td>
            <td>Amount of content transmitted over this route.</td>
        </tr>
        <tr>
            <td></td>
            <td>waypoint1</td>
            <td><strong>long</strong></td>
            <td>Pin ID of first waypoint.</td>
        </tr>
        <tr>
            <td></td>
            <td>waypoint2</td>
            <td><strong>long</strong></td>
            <td>Pin ID of second waypoint.</td>
        </tr>
        <tr>
            <td></td>
            <td>waypoint3</td>
            <td><strong>long</strong></td>
            <td>Pin ID of third waypoint.</td>
        </tr>
        <tr>
            <td></td>
            <td>waypoint4</td>
            <td><strong>long</strong></td>
            <td>Pin ID of fourth waypoint.</td>
        </tr>
        <tr>
            <td></td>
            <td>waypoint5</td>
            <td><strong>long</strong></td>
            <td>Pin ID of fifth waypoint.</td>
        </tr>
    </tbody>
</table>

### Notes

* Unlike other API data, planetary information is only updated when the colony is accessed through the EVE Online client.  The information returned by this endpoint will remain unchanged until the next time the colony is viewed through the client.
