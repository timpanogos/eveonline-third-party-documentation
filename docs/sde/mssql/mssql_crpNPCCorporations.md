# NPC Corporations Table (MSSQL)
Table of all NPC Corporations.

## NPC Corporations

* __Table Name:__ ``crpNPCCorporations``
* __Description:__ NPC Corporations list.

### Columns

<table border="1">
    <tbody>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Default</th>
            <th>Xrefs</th>
            <th>Description</th>
        </tr>
        <tr>
            <td nowrap id="corporationID">
                corporationID
                <code title="Belongs to primary key">PK</code>
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td></td>
            <td>Unique corporation ID.</td>
        </tr>
        <tr>
            <td nowrap>
                size
            </td>
            <td>
                <strong>char(1)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Corporation size.  One of 'H', 'L', 'M', 'S', or 'T' corresponding to 'Huge', 'Large', 'Medium', 'Small', and 'Tiny', respectively.</td>
        </tr>
        <tr>
            <td nowrap>
                extent
            </td>
            <td>
                <strong>char(1)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Corporation extent.  One of 'G', 'N', 'R', 'C', or 'L' corresponding to 'Global', 'National', 'Regional', 'Constellation', and 'Local', respectively.</td>
        </tr>
        <tr>
            <td nowrap>
                solarSystemID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../sqlite/sqlite_mapSolarSystems.html#solarSystemID">mapSolarSystems.solarSystemID</a><br>
            </td>
            <td>Solar system ID where corporation headquarters is located.</td>
        </tr>
        <tr>
            <td nowrap>
                investorID1
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>First investor corporation ID, if applicable.</td>
        </tr>
        <tr>
            <td nowrap>
                investorShares1
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Percent of shares held by first investor.</td>
        </tr>
        <tr>
            <td nowrap>
                investorID2
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Second investor corporation ID, if applicable.</td>
        </tr>
        <tr>
            <td nowrap>
                investorShares2
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Percent of shares held by second investor.</td>
        </tr>
        <tr>
            <td nowrap>
                investorID3
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Third investor corporation ID, if applicable.</td>
        </tr>
        <tr>
            <td nowrap>
                investorShares3
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Percent of shares held by third investor.</td>
        </tr>
        <tr>
            <td nowrap>
                investorID4
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Fourth investor corporation ID, if applicable.</td>
        </tr>
        <tr>
            <td nowrap>
                investorShares4
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Percent of shares held by fourth investor.</td>
        </tr>
        <tr>
            <td nowrap>
                friendID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Corporation ID of friendly corporation.</td>
        </tr>
        <tr>
            <td nowrap>
                enemyID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Corporation ID of enemy corporation.</td>
        </tr>
        <tr>
            <td nowrap>
                publicShares
            </td>
            <td>
                <strong>bigint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Percentage of shares available to the public.  Currently not used.</td>
        </tr>
        <tr>
            <td nowrap>
                initialPrice
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td></td>
            <td>Initial offering prce of public shares.  Currently not used.</td>
        </tr>
        <tr>
            <td nowrap>
                minSecurity
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Unknown.</td>
        </tr>
        <tr>
            <td nowrap>
                scattered
            </td>
            <td>
                <strong>bit</strong>
            </td>
            <td></td>
            <td></td>
            <td>1 if corporation's stations are scattered in Universe.  0 otherwise.</td>
        </tr>
        <tr>
            <td nowrap>
                fringe
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of fringe systems in which corporation's stations reside.</td>
        </tr>
        <tr>
            <td nowrap>
                corridor
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of corridor systems in which corporation's stations reside.</td>
        </tr>
        <tr>
            <td nowrap>
                hub
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of hub systems in which corporation's stations reside.</td>
        </tr>
        <tr>
            <td nowrap>
                border
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of border systems in which corporation's stations reside.</td>
        </tr>
        <tr>
            <td nowrap>
                factionID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_chrFactions.html#factionID">chrFactions.factionID</a><br>
            </td>
            <td>Faction ID of the faction to which this corporation belongs.</td>
        </tr>
        <tr>
            <td nowrap>
                sizeFactor
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Numeric size of corporation.</td>
        </tr>
        <tr>
            <td nowrap>
                stationCount
            </td>
            <td>
                <strong>smallint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of stations owned by corporation.</td>
        </tr>
        <tr>
            <td nowrap>
                stationSystemCount
            </td>
            <td>
                <strong>smallint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Number of systems in which this corporation has a station.</td>
        </tr>
        <tr>
            <td nowrap>
                description
            </td>
            <td>
                <strong>nvarchar(4000)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Corporation description.</td>
        </tr>
        <tr>
            <td nowrap>
                iconID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../yaml/yaml_iconIDs.html">iconIDs file</a>
            </td>
            <td>Icon ID for this corporation.</td>
        </tr>
    </tbody>
</table>
