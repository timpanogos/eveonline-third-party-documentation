# Inventory Name Table (MSSQL)
Names of all in-game items.

## Inventory Names

* __Table Name:__ ``invNames``
* __Description:__ Names of all static items with names.

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
                <a href="mssql_invItems.html#itemID" title="invItems.itemID">invItems.itemID</a><br>
                <a href="mssql_invPositions.html#itemID" title="invPositions.itemID">invPositions.itemID</a><br>
                <a href="mssql_invUniqueNames.html#itemID" title="invUniqueNames.itemID">invUniqueNames.itemID</a><br>
                <a href="../sqlite/sqlite_mapDenormalize.html#itemID" title="mapDenormalize.itemID">mapDenormalize.itemID</a>
            </td>
            <td>In-game item ID.</td>
        </tr>
        <tr>
            <td nowrap>
                itemName
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>nvarchar(200)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Name of in-game item.</td>
        </tr>
    </tbody>
</table>
