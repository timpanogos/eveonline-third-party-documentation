## Standings (NPC)

* __Path:__ ``/char/Standings.xml.aspx``
* __Access mask:__ 524288
* __Cache timer:__ 3 hours
* __Parameters:__
    <table>
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
            <tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>Character ID for which standings will be requested</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <characterNPCStandings>
        <rowset name="agents" key="fromID" columns="fromID,fromName,standing">
            <row fromID="3009841" fromName="Pausent Ansin" standing="0.1" />
            <row fromID="3009846" fromName="Charie Octienne" standing="0.19" />
        </rowset>
        <rowset name="NPCCorporations" key="fromID" columns="fromID,fromName,standing">
            <row fromID="1000061" fromName="Freedom Extension" standing="0" />
            <row fromID="1000064" fromName="Carthum Conglomerate" standing="0.34" />
            <row fromID="1000094" fromName="TransStellar Shipping" standing="0.02" />
        </rowset>
        <rowset name="factions" key="fromID" columns="fromID,fromName,standing">
            <row fromID="500003" fromName="Amarr Empire" standing="-0.1" />
            <row fromID="500020" fromName="Serpentis" standing="-1" />
        </rowset>
    </characterNPCStandings>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>characterNPCStandings</td>
            <td><strong>object</strong></td>
            <td>Object containing one rowset each for standings from agents, NPC corporations, and factions.</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>agents</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing 1 row for each agent standing.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromID</td>
            <td>
	        <strong>int</strong>
                <sup>
                <a href="../../sde/mssql_agtAgents/">[1]</a>
                </sup>
            </td>
            <td>ID of agent this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromName</td>
            <td><strong>string</strong></td>
            <td>Name of agent this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>standing</td>
            <td><strong>float</strong></td>
            <td>Current base standing with this entity.</td>
        </tr>
        <tr>
            <td></td>
            <td>NPCCorporations</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing 1 row for each NPC corporation standing.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromID</td>
            <td>
	        <strong>int</strong>
                <sup>
                <a href="../../sde/mssql_crpNPCCorporations/">[1]</a>
                </sup>
            </td>
            <td>ID of NPC corporation this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromName</td>
            <td><strong>string</strong></td>
            <td>Name of NPC corporation this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>standing</td>
            <td><strong>float</strong></td>
            <td>Current base standing with this entity.</td>
        </tr>
        <tr>
            <td></td>
            <td>factions</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing 1 row for each faction standing.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromID</td>
            <td>
	        <strong>int</strong>
                <sup>
                <a href="../../sde/mssql_chrFactions/">[1]</a>
                </sup>
            </td>
            <td>ID of faction this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>fromName</td>
            <td><strong>string</strong></td>
            <td>Name of faction this character has standing with.</td>
        </tr>
        <tr>
            <td></td>
	    <td></td>
            <td>standing</td>
            <td><strong>float</strong></td>
            <td>Current base standing with this entity.</td>
        </tr>
    </tbody>
</table>

### Notes

* All standings are reported in the range [-10, 10].
* Standings reported in this response do not take into account character skills like Connections or Diplomacy.
