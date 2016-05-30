# ConquerableStationList
Returns a list of conquerable stations in New Eden.

* __Path:__ ``/eve/ConquerableStationList.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <rowset name="outposts" key="stationID" columns="stationID,stationName,stationTypeID,solarSystemID,corporationID,corporationName,x,y,z">
        <row stationID="61001046" stationName="W-XY4J X - HAKOHELITO" stationTypeID="21646" solarSystemID="30001105" corporationID="98315839" corporationName="Intergalactic Conquest and Development" x="394820444160" y="-18220769280" z="-6131542302720"/>
        <row stationID="61001047" stationName="7MD-S1 XI - Roland's Place" stationTypeID="21645" solarSystemID="30001232" corporationID="98132485" corporationName="Bailiffs" x="-2950319185920" y="-500139909120" z="2101918064640"/>
        <row stationID="61001048" stationName="E9KD-N IX - RIP Vile Rat" stationTypeID="21645" solarSystemID="30003694" corporationID="418183520" corporationName="EXPCS Corp" x="1474703155200" y="-198735421440" z="450142740480"/>
        <row stationID="61001049" stationName="27-HP0 VI - A punch in the face" stationTypeID="21644" solarSystemID="30000832" corporationID="98384608" corporationName="SN Holdings" x="785816985600" y="4615004160" z="-576230154240"/>
        <row stationID="61001050" stationName="L-5JCJ VIII - RUSTARBASE" stationTypeID="21645" solarSystemID="30002142" corporationID="98160985" corporationName="LUX AETERNA INT" x="-2645266391040" y="533918883840" z="-6264785510400"/>
        <row stationID="61001051" stationName="Y5-E1U VII - The Dibby Parlour" stationTypeID="21646" solarSystemID="30000729" corporationID="98415166" corporationName="Zero.Four Holdings" x="-1276127109120" y="32335749120" z="4544564551680"/>
        <row stationID="61001052" stationName="F2-NXA II - The Valley of Eternal Night" stationTypeID="21645" solarSystemID="30000695" corporationID="98025393" corporationName="Fleet of the Eternal Night" x="-47411404800" y="7704944640" z="139655454720"/>
        <row stationID="61001053" stationName="3-SFWG V - DRASY Jobcenter" stationTypeID="21644" solarSystemID="30001212" corporationID="98278570" corporationName="Das Raumfahrer Syndikat" x="922842685440" y="85610864640" z="-2470096035840"/>
        <row stationID="61001054" stationName="UQ-PWD III - Home of the Demon Clown Legion" stationTypeID="21646" solarSystemID="30001208" corporationID="261632485" corporationName="Fink Operations" x="-49921351680" y="4879687680" z="-123196661760"/>
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
            <td>stationID</td>
            <td>int</td>
            <td>The unique identification number of the station.</td>
        </tr>
        <tr>
            <td>stationName</td>
            <td>string</td>
            <td>The name of the station set by the occupying corporation</td>
        </tr>
        <tr>
            <td>stationTypeID</td>
            <td>int</td>
            <td>The typeID of the station.</td>
        </tr>
        <tr>
            <td>solarSystemID</td>
            <td>int</td>
            <td>The Solar System ID where the station is anchored.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>The corporationID of the occupying corporation.</td>
        </tr>
        <tr>
            <td>corporationName</td>
            <td>string</td>
            <td>The name of the occupying corporation.</td>
        </tr>
        <tr>
            <td>x</td>
            <td>long</td>
            <td>x, y and z make up the coordinates in the solar system of the station</td>
        </tr>
        <tr>
            <td>y</td>
            <td>long</td>
            <td>x, y and z make up the coordinates in the solar system of the station</td>
        </tr>
        <tr>
            <td>z</td>
            <td>long</td>
            <td>x, y and z make up the coordinates in the solar system of the station</td>
        </tr>
    </tbody>
</table>
