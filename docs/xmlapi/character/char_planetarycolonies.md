# Planetary Colonies
Retrieve planetary colonies owned by character.

* __Path:__ ``/char/PlanetaryColonies.xml.aspx``
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
                <td>Character ID for which planetary colonies will be retrieved</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
  <rowset name="colonies" key="planetID" columns="solarSystemID,solarSystemName,planetID,planetName,planetTypeID,planetTypeName,ownerID,ownerName,lastUpdate,upgradeLevel,numberOfPins">
    <row solarSystemID="30003396" solarSystemName="Maturat" planetID="40215260" planetName="Maturat II" planetTypeID="2015" planetTypeName="Planet (Lava)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:17:47" upgradeLevel="5" numberOfPins="8" />
    <row solarSystemID="30003399" solarSystemName="Vorsk" planetID="40215544" planetName="Vorsk I" planetTypeID="2063" planetTypeName="Planet (Plasma)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:16:05" upgradeLevel="4" numberOfPins="7" />
    <row solarSystemID="30003399" solarSystemName="Vorsk" planetID="40215545" planetName="Vorsk II" planetTypeID="2063" planetTypeName="Planet (Plasma)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:16:18" upgradeLevel="4" numberOfPins="7" />
    <row solarSystemID="30003399" solarSystemName="Vorsk" planetID="40215546" planetName="Vorsk III" planetTypeID="2015" planetTypeName="Planet (Lava)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:31:16" upgradeLevel="5" numberOfPins="9" />
    <row solarSystemID="30003399" solarSystemName="Vorsk" planetID="40215548" planetName="Vorsk IV" planetTypeID="11" planetTypeName="Planet (Temperate)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:32:04" upgradeLevel="4" numberOfPins="12" />
    <row solarSystemID="30003399" solarSystemName="Vorsk" planetID="40215551" planetName="Vorsk VI" planetTypeID="13" planetTypeName="Planet (Gas)" ownerID="1801683792" ownerName="reygar burnt" lastUpdate="2015-07-29 02:16:43" upgradeLevel="4" numberOfPins="7" />
  </rowset>
</result>
```  

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>colonies</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per planetary colony.</td>
        </tr>
        <tr>
            <td></td>
            <td>solarSystemID</td>
            <td>
            <strong>int</strong>
            <sup>
                <a href="../../sde/sqlite/sqlite_mapSolarSystems.html#solarSystemID" title="mapSolarSystems.solarSystemID">[1]</a>
            </sup>
	    </td>
            <td>Solar system where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>solarSystemName</td>
            <td><strong>string</strong></td>
            <td>Name of solar system where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>planetID</td>
            <td>
                <strong>int</strong>
                <sup> 
                    <a href="../../sde/sqlite/sqlite_mapDenormalize.html#itemID" title="mapDenormalize.itemID">[1]</a>
                </sup>
	        </td>
            <td>Planet where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>planetName</td>
            <td><strong>string</strong></td>
            <td>Name of planet where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>planetTypeID</td>
            <td>
            	<strong>int</strong>
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html" title="Inventory Types file">[1]</a>
                </sup>
	        </td>
            <td>Type of planet where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>planetTypeName</td>
            <td><strong>string</strong></td>
            <td>Type name of planet where colony is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerID</td>
            <td><strong>long</strong></td>
            <td>Character ID of owner.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerName</td>
            <td><strong>string</strong></td>
            <td>Character name of owner.</td>
        </tr>
        <tr>
            <td></td>
            <td>lastUpdate</td>
            <td><strong>datetime</strong></td>
            <td>Time when colony was last modified.</td>
        </tr>
        <tr>
            <td></td>
            <td>upgradeLevel</td>
            <td><strong>int</strong></td>
            <td>Command center level for this colony.</td>
        </tr>
        <tr>
            <td></td>
            <td>numberOfPins</td>
            <td><strong>int</strong></td>
            <td>Colony pin count.</td>
        </tr>
    </tbody>
</table>

### Notes

* Unlike other API data, planetary information is only updated when the colony is accessed through the EVE Online client.  The information returned by this endpoint will remain unchanged until the next time the colony is viewed through the client.

