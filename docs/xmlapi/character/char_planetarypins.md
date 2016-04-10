# Planetary Pins
Retrieve planetary pins for colonies owned by character.

* __Path:__ ``/char/PlanetaryPins.xml.aspx``
* __Access mask:__ 2
* __Cache timer:__ 60 minutes <sup style="color: red; font-weight: bold">(see notes below)</sup>
* __Parameters:__
    <table border="1">
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
                <td>Character ID for which planetary pins will be retrieved</td>
            </tr>
            <tr>
                <td>planetID</td>
                <td><strong>int</strong></td>
                <td>Planet ID of planet for which pins will be retrieved</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="pins" key="pinID" columns="pinID,typeID,typeName,schematicID,lastLaunchTime,cycleTime,quantityPerCycle,installTime,expiryTime,contentTypeID,contentTypeName,contentQuantity,longitude,latitude">
        <row pinID="1009564368954" typeID="2549" typeName="Lava Command Center" schematicID="0" lastLaunchTime="0001-01-01 00:00:00" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="0" contentTypeName="" contentQuantity="0" longitude="-1.76925132343823" latitude="1.35576803141522"/>
        <row pinID="1009564405863" typeID="3062" typeName="Lava Extractor Control Unit" schematicID="0" lastLaunchTime="0001-01-01 00:00:00" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="0" contentTypeName="" contentQuantity="0" longitude="-1.9002762391" latitude="1.35996919697"/>
        <row pinID="1009564405864" typeID="3062" typeName="Lava Extractor Control Unit" schematicID="0" lastLaunchTime="2015-07-29 02:15:26" cycleTime="120" quantityPerCycle="1925" installTime="2015-07-29 02:15:26" expiryTime="2015-08-02 08:15:26" contentTypeID="0" contentTypeName="" contentQuantity="0" longitude="-1.94888869978" latitude="1.27919018972"/>
        <row pinID="1009564416193" typeID="2555" typeName="Lava Launchpad" schematicID="0" lastLaunchTime="0001-01-01 00:00:00" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="2389" contentTypeName="Plasmoids" contentQuantity="20260" longitude="-1.77328132701" latitude="1.31561528674"/>
        <row pinID="1009564438251" typeID="2469" typeName="Lava Basic Industry Facility" schematicID="122" lastLaunchTime="2015-07-23 03:43:31" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="2308" contentTypeName="Suspended Plasma" contentQuantity="1024" longitude="-1.78528278433" latitude="1.29670715686"/>
        <row pinID="1009564438252" typeID="2469" typeName="Lava Basic Industry Facility" schematicID="129" lastLaunchTime="2015-07-22 19:13:31" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="2306" contentTypeName="Non-CS Crystals" contentQuantity="2006" longitude="-1.75855213447" latitude="1.29539116693"/>
        <row pinID="1009564438253" typeID="2470" typeName="Lava Advanced Industry Facility" schematicID="71" lastLaunchTime="2015-07-22 19:43:31" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="2389" contentTypeName="Plasmoids" contentQuantity="40" longitude="-1.7736430669" latitude="1.27606869848"/>
        <row pinID="1009564438253" typeID="2470" typeName="Lava Advanced Industry Facility" schematicID="71" lastLaunchTime="2015-07-22 19:43:31" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="2401" contentTypeName="Chiral Structures" contentQuantity="20" longitude="-1.7736430669" latitude="1.27606869848"/>
        <row pinID="1010009138733" typeID="2558" typeName="Lava Storage Facility" schematicID="0" lastLaunchTime="0001-01-01 00:00:00" cycleTime="0" quantityPerCycle="0" installTime="0001-01-01 00:00:00" expiryTime="0001-01-01 00:00:00" contentTypeID="0" contentTypeName="" contentQuantity="0" longitude="-1.77787254933242" latitude="1.33187818274077"/>
    </rowset>
</result>
```  

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>pins</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per planetary pin.</td>
        </tr>
        <tr>
            <td></td>
            <td>pinID</td>
            <td><strong>long</strong></td>
            <td>Unique pin ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td>
            	<strong>int</strong>
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html" title="Inventory Types file">[1]</a>
                </sup>
	    </td>
            <td>Type ID of facility installed at this pin.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeName</td>
            <td><strong>string</strong></td>
            <td>Type name of facility installed at this pin.</td>
        </tr>
        <tr>
            <td></td>
            <td>schematicID</td>
            <td>
            	<strong>int</strong>
                <sup>
                	<a href="../../sde/mssql/mssql_planetSchematics.html#schematicID" title="planetSchematics.schematicID">[1]</a>
                </sup>
	        </td>
            <td>Schematic ID of schematic installed in this facility.</td>
        </tr>
        <tr>
            <td></td>
            <td>lastLaunchTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when last operation at facility was started.</td>
        </tr>
        <tr>
            <td></td>
            <td>cycleTime</td>
            <td><strong>int</strong></td>
            <td>Facility cycle time in minutes.</td>
        </tr>
        <tr>
            <td></td>
            <td>quantityPerCycle</td>
            <td><strong>int</strong></td>
            <td>Number of items produced by this facility per cycle time (if this facility produces something).</td>
        </tr>
        <tr>
            <td></td>
            <td>installTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when the current operation was started at this facility (if this facility has an operation to perform).</td>
        </tr>
        <tr>
            <td></td>
            <td>expiryTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when this facility will finish the current operation (if this facility has an operation to perform).</td>
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
            <td>Type ID of content stored at this facility.</td>
        </tr>
        <tr>
            <td></td>
            <td>contentTypeName</td>
            <td><strong>string</strong></td>
            <td>Name of content stored at facility at this facility.</td>
        </tr>
        <tr>
            <td></td>
            <td>contentQuantity</td>
            <td><strong>int</strong></td>
            <td>Amount of content currently stored in facility at pin location.</td>
        </tr>
        <tr>
            <td></td>
            <td>longitude</td>
            <td><strong>float</strong></td>
            <td>Pin longitude.</td>
        </tr>
        <tr>
            <td></td>
            <td>latitude</td>
            <td><strong>float</strong></td>
            <td>Pin latitude.</td>
        </tr>
    </tbody>
</table>

### Notes

* Unlike other API data, planetary information is only updated when the colony is accessed through the EVE Online client.  The information returned by this endpoint will remain unchanged until the next time the colony is viewed through the client.
