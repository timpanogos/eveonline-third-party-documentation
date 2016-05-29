# Kills
Provides number of ship, pod and NPC kills per solar system within the last hour, doesn't include wormhole space. Only solar system where kills have been made are listed, so assume zero in case the system is not listed.

* __Path:__ ``/map/kills.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <rowset name="solarSystems" key="solarSystemID" columns="solarSystemID,shipKills,factionKills,podKills">
        <row solarSystemID="30034971" shipKills="4" factionKills="12" podKills="0"/>
        <row solarSystemID="30003976" shipKills="0" factionKills="12" podKills="0"/>
        <row solarSystemID="30004162" shipKills="0" factionKills="5" podKills="0"/>
        <row solarSystemID="30004262" shipKills="0" factionKills="3" podKills="0"/>
        <row solarSystemID="30003744" shipKills="0" factionKills="37" podKills="0"/>
        <row solarSystemID="30000779" shipKills="0" factionKills="2" podKills="0"/>
        <row solarSystemID="30003876" shipKills="1" factionKills="328" podKills="0"/>
        <row solarSystemID="30002608" shipKills="0" factionKills="116" podKills="0"/>
        <row solarSystemID="30011407" shipKills="9" factionKills="372" podKills="0"/>
        <row solarSystemID="30003492" shipKills="0" factionKills="108" podKills="0"/>
        <row solarSystemID="30003535" shipKills="0" factionKills="12" podKills="0"/>
        <row solarSystemID="30001815" shipKills="0" factionKills="47" podKills="0"/>
        <row solarSystemID="30004912" shipKills="0" factionKills="111" podKills="0"/>
        <row solarSystemID="30003040" shipKills="0" factionKills="133" podKills="0"/>
        <row solarSystemID="30045324" shipKills="0" factionKills="58" podKills="1"/>
        <row solarSystemID="30004294" shipKills="0" factionKills="50" podKills="0"/>
        <row solarSystemID="30005055" shipKills="0" factionKills="24" podKills="0"/>
        <row solarSystemID="30002399" shipKills="1" factionKills="0" podKills="0"/>
        <row solarSystemID="30004723" shipKills="0" factionKills="124" podKills="0"/>
        <row solarSystemID="30003249" shipKills="0" factionKills="246" podKills="0"/>
    </rowset>
    <dataTime>2015-11-25 01:52:40</dataTime>
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
            <td>shipKills</td>
            <td>int</td>
            <td>Number of player ships killed in this system.</td>
        </tr>
        <tr>
            <td>factionKills</td>
            <td>int</td>
            <td>Number of NPC ships killed in this system.</td>
        </tr>
        <tr>
            <td>podKills</td>
            <td>int</td>
            <td>Number of pods killed in this system.</td>
        </tr>
    </tbody>
</table>

