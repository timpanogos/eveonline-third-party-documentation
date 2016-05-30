# Jumps
Returns the number of jumps in solarsystems within the last hour, doesn't include wormhole space. Only solar system where jumps have been made are listed, so assume zero in case the system is not listed.

* __Path:__ ``/map/Jumps.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <rowset name="solarSystems" key="solarSystemID" columns="solarSystemID,shipJumps">
        <row solarSystemID="30002410" shipJumps="1"/>
        <row solarSystemID="30001343" shipJumps="1"/>
        <row solarSystemID="30001675" shipJumps="32"/>
        <row solarSystemID="30005304" shipJumps="357"/>
        <row solarSystemID="30000656" shipJumps="45"/>
        <row solarSystemID="30004832" shipJumps="2"/>
        <row solarSystemID="30003498" shipJumps="60"/>
        <row solarSystemID="30004732" shipJumps="20"/>
        <row solarSystemID="30002293" shipJumps="1"/>
        <row solarSystemID="30000155" shipJumps="295"/>
        <row solarSystemID="30002811" shipJumps="46"/>
        <row solarSystemID="30003329" shipJumps="36"/>
    </rowset>
    <dataTime>2015-11-25 01:10:18</dataTime>
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
            <td>shipJumps</td>
            <td>int</td>
            <td>The number of jumps into the system in the last hour.</td>
        </tr>
    </tbody>
</table>

