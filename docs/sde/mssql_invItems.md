## Inventory Items

* __Table Name:__ ``invItems``
* __Description:__ Basic attributes of all static items.

### Columns

<table>
    <tbody>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Default</th>
            <th>Xrefs</th>
            <th>Description</th>
        </tr>
        <tr>
            <td nowrap>
                itemID
                <code title="Belongs to primary key">PK</code>
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>bigint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_invNames">invNames.itemID</a><br>
                <a href="mssql_invPositions">invPositions.itemID</a><br>
                <a href="mssql_invUniqueNames">invUniqueNames.itemID</a><br>
                <a href="sqlite_mapDenormalize">mapDenormalize.itemID</a>
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
                <a href="mssql_crpNPCCorporationTrades">crpNPCCorporationTrades.typeID</a><br>
                <a href="mssql_dgmTypeAttributes">dgmTypeAttributes.typeID</a><br>
                <a href="mssql_dgmTypeEffects">dgmTypeEffects.typeID</a><br>
                <a href="mssql_invTypeMaterials">invTypeMaterials.typeID</a><br>
                <a href="mssql_invTypeReactions">invTypeReactions.typeID</a><br>
                <a href="yaml_typeIDs">typeIDs</a><br>
                <a href="sqlite_mapDenormalize">mapDenormalize.typeID</a>
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
                <a href="mssql_ramAssemblyLineStations">ramAssemblyLineStations.ownerID</a>
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
                <a href="mssql_agtAgents">agtAgents.locationID</a><br>
                <a href="sqlite_mapLandmarks">mapLandmarks.locationID</a><br>
                <a href="sqlite_mapLocationScenes">mapLocationScenes.locationID</a><br>
                <a href="sqlite_mapLocationWormholeClasses">mapLocationWormholeClasses.locationID</a><br>
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
                <a href="mssql_invFlags">invFlags.flagID</a>
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
