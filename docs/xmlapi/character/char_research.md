# Research
Retrieve character research.

* __Path:__ ``/char/Research.xml.aspx``
* __Cache timer:__ 15 minutes
* __Access mask:__ 65536
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
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="research" key="agentID" columns="agentID,skillTypeID,researchStartDate,pointsPerDay,remainderPoints">
        <row agentID="3009358" skillTypeID="11450" researchStartDate="2014-11-27 16:34:47" pointsPerDay="53.5346162146776" remainderPoints="53604.0634303189"/>
        <row agentID="3012617" skillTypeID="11453" researchStartDate="2015-01-31 21:31:02" pointsPerDay="37.0312810778599" remainderPoints="65.140031465693"/>
        <row agentID="3012662" skillTypeID="11452" researchStartDate="2015-01-31 05:38:13" pointsPerDay="53.3700894238397" remainderPoints="23.557288895885"/>
        <row agentID="3013460" skillTypeID="11449" researchStartDate="2015-01-31 21:11:04" pointsPerDay="5.8" remainderPoints="0"/>
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
            <td>agentID</td>
            <td nowrap>
	        int
                <sup>
                    <a href="../../sde/mssql/mssql_agtAgents.html" title="Agents table">[1]</a>
                    <a href="../../sde/mssql/mssql_agtResearchAgents.html" title="Research Agents table">[2]</a>
                </sup>
            </td>
            <td>
                Agent ID of research agent character is conducting research with.
            </td>
        </tr>
        <tr>
            <td>skillTypeID</td>
            <td nowrap>
	        int
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html" title="Inventory Types file">[1]</a>
                </sup>
            </td>
            <td>
	        Skill type being used to conduct research with this agent.
            </td>
        </tr>
        <tr>
            <td>researchStartDate</td>
            <td>datetime</td>
            <td>Date and time when research started with this agent.</td>
        </tr>
        <tr>
            <td>pointsPerDay</td>
            <td>decimal</td>
            <td>Number of research points generated per day.</td>
        </tr>
        <tr>
            <td>remainderPoints</td>
            <td>decimal</td>
            <td>Number of research points remaining since last datacore purchase and/or pointsPerDay update.  Mision research points are also added to this value.</td>
        </tr>
    </tbody>
</table>

### Notes

* remainderPoints can be negative if you've purchased datacores from an agent.
* The formula for finding the current research points with an agent is: \( currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate) \)
