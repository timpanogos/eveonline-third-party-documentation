# FacWarSystems
Returns a list of contestable solarsystems and the NPC faction currently occupying them. It should be noted that this file only returns a non-zero ID if the occupying faction is not the sovereign faction.

* __Path:__ ``/map/FacWarSystems.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <rowset name="solarSystems" key="solarSystemID" columns="solarSystemID,solarSystemName,occupyingFactionID,owningFactionID,occupyingFactionName,owningFactionName,contested,victoryPoints,victoryPointThreshold">
        <row solarSystemID="30002094" solarSystemName="Ebolfer" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="False" victoryPoints="0" victoryPointThreshold="3000"/>
        <row solarSystemID="30002537" solarSystemName="Amamake" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="False" victoryPoints="0" victoryPointThreshold="3000"/>
        <row solarSystemID="30002539" solarSystemName="Siseide" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="False" victoryPoints="0" victoryPointThreshold="3000"/>
        <row solarSystemID="30002538" solarSystemName="Vard" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="True" victoryPoints="60" victoryPointThreshold="3081"/>
        <row solarSystemID="30002514" solarSystemName="Bosboger" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="False" victoryPoints="0" victoryPointThreshold="3033"/>
        <row solarSystemID="30002516" solarSystemName="Lulm" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="False" victoryPoints="0" victoryPointThreshold="2863"/>
        <row solarSystemID="30002096" solarSystemName="Hofjaldgund" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="True" victoryPoints="500" victoryPointThreshold="3000"/>
        <row solarSystemID="30002091" solarSystemName="Ontorn" occupyingFactionID="0" owningFactionID="500002" occupyingFactionName="" owningFactionName="Minmatar Republic" contested="True" victoryPoints="240" victoryPointThreshold="3060"/>
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
            <td>solarSystemID</td>
            <td>int</td>
            <td>The unique identification number of a solar system. You can look up the details of the solar system in the table mapSolarSystems of the SDE</td>
        </tr>
        <tr>
            <td>solarSystemName</td>
            <td>string</td>
            <td>The name of a solar system.</td>
        </tr>
        <tr>
            <td>occupyingFactionID</td>
            <td>int</td>
            <td>The ID of the NPC Faction that has occupied this constellation, or 0 if the default(sovereign) faction occupies the system.</td>
        </tr>
        <tr>
            <td>occupyingFactionName</td>
            <td>string</td>
            <td>The name of the occupying NPC Faction.</td>
        </tr>
        <tr>
            <td>owningFactionID</td>
            <td>int</td>
            <td>The ID of the NPC Faction who owns the system, it may be occupied by another Faction.</td>
        </tr>
        <tr>
            <td>owningFactionName</td>
            <td>string</td>
            <td>The name of the NPC Faction who owns the system, it may be occupied by another Faction.</td>
        </tr>
        <tr>
            <td>contested</td>
            <td>boolean</td>
            <td>Whether system is being fought over.</td>
        </tr>
        <tr>
            <td>victoryPoints</td>
            <td>int</td>
            <td>Current number of victory points earned in the system by the aggressing faction.</td>
        </tr>
        <tr>
            <td>victoryPointThreshold</td>
            <td>int</td>
            <td>The amount of victory points required for the aggressing faction to take ownership of the system.</td>
        </tr>
    </tbody>
</table>
