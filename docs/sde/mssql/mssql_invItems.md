# Inventory Items Table (MSSQL)
Names of all in-game items.

## Inventory Items

* __Table Name:__ ``invItems``
* __Description:__ Basic attributes of all static items.

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
            <td nowrap id="itemID">
                itemID
                <code title="Belongs to primary key">PK</code>
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>bigint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql/mssql_invNames.html#itemID">invNames.itemID</a><br>
                <a href="mssql/mssql_invPositions.html#itemID">invPositions.itemID</a><br>
                <a href="mssql/mssql_invUniqueNames.html#itemID">invUniqueNames.itemID</a><br>
                <a href="../sqlite/sqlite_mapDenormalize.html#itemID">mapDenormalize.itemID</a>
            </td>
            <td>In-game item ID.</td>
        </tr>
        <tr>
            <td nowrap>
                typeID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_crpNPCCorporationTrades.html#typeID">crpNPCCorporationTrades.typeID</a><br>
                <a href="mssql_dgmTypeAttributes.html#typeID">dgmTypeAttributes.typeID</a><br>
                <a href="mssql_dgmTypeEffects.html#typeID">dgmTypeEffects.typeID</a><br>
                <a href="mssql_invTypeMaterials.html#typeID">invTypeMaterials.typeID</a><br>
                <a href="mssql_invTypeReactions.html#typeID">invTypeReactions.typeID</a><br>
                <a href="../yaml/yaml_typeIDs.html#typeID">typeIDs</a><br>
                <a href="../sqlite/sqlite_mapDenormalize.html#typeID">mapDenormalize.typeID</a>
            </td>
            <td>Type of in-game item.</td>
        </tr>
        <tr>
            <td nowrap>
                ownerID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_ramAssemblyLineStations.html#ownerID">ramAssemblyLineStations.ownerID</a>
            </td>
            <td>Item owner ID.</td>
        </tr>
        <tr>
            <td nowrap>
                locationID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>bigint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_agtAgents.html#locationID">agtAgents.locationID</a><br>
                <a href="../sqlite/sqlite_mapLandmarks.html#locationID">mapLandmarks.locationID</a><br>
                <a href="../sqlite/sqlite_mapLocationScenes.html#locationID">mapLocationScenes.locationID</a><br>
                <a href="../sqlite/sqlite_mapLocationWormholeClasses.html#locationID">mapLocationWormholeClasses.locationID</a><br>
            </td>
            <td>Item location ID.</td>
        </tr>
        <tr>
            <td nowrap>
                flagID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>smallint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_invFlags.html#flagID">invFlags.flagID</a>
            </td>
            <td>Item flags.</td>
        </tr>
        <tr>
            <td nowrap>
                quantity
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td></td>
            <td>Item quantity.</td>
        </tr>
    </tbody>
</table>
