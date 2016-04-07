# Sovereignty
Provides Sovereignty / Ownership information for solar systems in New Eden excluding wormhole space.
  
* __Path:__ ``/map/Sovereignty.xml.aspx``
* __Access mask:__ none
* __Cache timer:__ 1 hour
* __Parameters:__ None, this function accepts no arguments.

### Sample Response

```xml
<result>
    <rowset name="solarSystems" key="solarSystemID" columns="solarSystemID,allianceID,factionID,solarSystemName,corporationID">
    <row solarSystemID="30000001" allianceID="0" factionID="500007" solarSystemName="Tanoo" corporationID="0"/>
    <row solarSystemID="30000002" allianceID="0" factionID="500007" solarSystemName="Lashesih" corporationID="0"/>
    <row solarSystemID="30000003" allianceID="0" factionID="500007" solarSystemName="Akpivem" corporationID="0"/>
    <row solarSystemID="30000004" allianceID="0" factionID="500007" solarSystemName="Jark" corporationID="0"/>
    <row solarSystemID="30000673" allianceID="99003806" factionID="0" solarSystemName="RNM-Y6" corporationID="98138647"/>
    <row solarSystemID="30000674" allianceID="99003806" factionID="0" solarSystemName="V-KDY2" corporationID="98138647"/>
    <row solarSystemID="30000675" allianceID="99003806" factionID="0" solarSystemName="FYD-TO" corporationID="98138647"/>
    <row solarSystemID="30000676" allianceID="99003806" factionID="0" solarSystemName="ER2O-Y" corporationID="98138647"/>
    <row solarSystemID="30000677" allianceID="99003806" factionID="0" solarSystemName="J2-PZ6" corporationID="98138647"/>
    <row solarSystemID="30000678" allianceID="99000814" factionID="0" solarSystemName="XV-MWG" corporationID="98045636"/>
    </rowset>
    <dataTime>2015-08-24 09:27:17</dataTime>
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
            <td>solarSystemID</td>
            <td>int</td>
            <td>The unique identification number of a solar system. You can look up the details of the solar system in the table mapSolarSystems of the SDE</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>int</td>
            <td>The ID of the alliance that has sovereignty of this solar system, or 0 if nobody has sovereignty. The Alliance List provides a list of the alliances.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>The ID of the corporation that owns the Territorial Claim Unit (TCU) if there is one in the system.</td>
        </tr>
        <tr>
            <td>factionID</td>
            <td>int</td>
            <td>The NPC Faction controlling the system. The SDE has a table with the faction names.</td>
        </tr>
        <tr>
            <td>solarSystemName</td>
            <td>string</td>
            <td>The name of the solar system.</td>
        </tr>
    </tbody>
</table>
