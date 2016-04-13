# Standings
Returns the standings that non-player entities have to the corporation.

* __Path:__ ``/corp/Standings.xml.aspx``
* __Access mask:__ 262144
* __Cache timer:__ 3 hours 57 minutes
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
        </tbody>
    </table>

### Sample Response

```xml
  <result>
    <corporationNPCStandings>
      <rowset name="agents" key="fromID" columns="fromID,fromName,standing">
        <row fromID="3009041" fromName="Isaine Mandie" standing="0.29" />
        <row fromID="3009053" fromName="Herrent Gaudent" standing="-0.14" />
        <row fromID="3009344" fromName="Nelesse Nerrene" standing="0.10" />
        <row fromID="3009358" fromName="Aunes Isolette" standing="-0.07" />
        <row fromID="3009579" fromName="Porchomette Chandrard" standing="-0.03" />
        <row fromID="3009793" fromName="Austant Lange" standing="10.00" />
        <row fromID="3009855" fromName="Befstey Bourd" standing="0.92" />
        <row fromID="3009857" fromName="Poucke Ourd" standing="5.50" />
        <row fromID="3009894" fromName="Saonellieu Baerse" standing="4.90" />
        <row fromID="3009900" fromName="Bunarolie Vetanailles" standing="0.92" />
        <row fromID="3009910" fromName="Amerique Jostalie" standing="1.86" />
        <row fromID="3009911" fromName="Lalie Thilriegitte" standing="3.79" />
        <row fromID="3009914" fromName="Harquier Foutte" standing="3.12" />
        <row fromID="3009922" fromName="Emmeget Athonise" standing="3.45" />
        <row fromID="3009923" fromName="Rerlerante Aute" standing="4.11" />
        <row fromID="3009928" fromName="Essinan Corlobault" standing="0.87" />
        <row fromID="3009933" fromName="Ennard Famparault" standing="2.03" />
        <row fromID="3009966" fromName="Bram Vynneve" standing="1.70" />
        <row fromID="3010718" fromName="Ondanold Olsar" standing="2.97" />
      </rowset>
      <rowset name="NPCCorporations" key="fromID" columns="fromID,fromName,standing">
        <row fromID="1000005" fromName="Hyasyoda Corporation" standing="0.15" />
        <row fromID="1000007" fromName="Poksu Mineral Group" standing="0.04" />
        <row fromID="1000010" fromName="Kaalakiota Corporation" standing="0.00" />
        <row fromID="1000023" fromName="Expert Distribution" standing="0.23" />
        <row fromID="1000025" fromName="Sukuuvestaa Corporation" standing="0.14" />
        <row fromID="1000035" fromName="Caldari Navy" standing="0.05" />
        <row fromID="1000036" fromName="Internal Security" standing="0.72" />
        <row fromID="1000046" fromName="Sebiestor Tribe" standing="0.37" />
        <row fromID="1000048" fromName="Vherokior Tribe" standing="0.17" />
      </rowset>
      <rowset name="factions" key="fromID" columns="fromID,fromName,standing">
        <row fromID="500001" fromName="Caldari State" standing="-3.15" />
        <row fromID="500002" fromName="Minmatar Republic" standing="4.93" />
        <row fromID="500003" fromName="Amarr Empire" standing="-3.92" />
        <row fromID="500004" fromName="Gallente Federation" standing="5.45" />
      </rowset>
    </corporationNPCStandings>
  </result>
```

### Result Data

* __Agents rowset:__
    <table border="1">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Data Type</td>
                <td>Description</td>
            </tr>
            <tr>
                <td>fromID</td>
                <td>long</td>
                <td>Agent ID</td>
            </tr>
            <tr>
                <td>fromName</td>
                <td>string</td>
                <td>Name of the Agent.</td>
            </tr>
            <tr>
                <td>standing</td>
                <td>double</td>
                <td>Standing of the agent (as seen from the agent's perspective).</td>
            </tr>
        </tbody>
    </table>

* __NPCCorporations rowset:__
    <table border="1">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Data Type</td>
                <td>Description</td>
            </tr>
            <tr>
                <td>fromID</td>
                <td>long</td>
                <td>Corporation ID</td>
            </tr>
            <tr>
                <td>fromName</td>
                <td>string</td>
                <td>Name of the Corporation.</td>
            </tr>
            <tr>
                <td>standing</td>
                <td>double</td>
                <td>Standing of the corporation (as seen from the npc corporation's perspective).</td>
            </tr>
        </tbody>
    </table>

* __Factions rowset:__
    <table border="1">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Data Type</td>
                <td>Description</td>
            </tr>
            <tr>
                <td>fromID</td>
                <td>long</td>
                <td>Faction ID</td>
            </tr>
            <tr>
                <td>fromName</td>
                <td>string</td>
                <td>Name of the Faction.</td>
            </tr>
            <tr>
                <td>standing</td>
                <td>double</td>
                <td>Standing of the faction (as seen from the faction's perspective).</td>
            </tr>
        </tbody>
    </table>