# Inventory Flags Table (MSSQL)
Table of ingame item location flags.

## Inventory Flags

* __Table Name:__ ``invFlags``
* __Description:__ Inventory item location flag.

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
            <td nowrap id="flagID">
                flagID
                <code title="Belongs to primary key">PK</code>
            </td>
            <td>
                <strong>smallint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Inventory item flag ID.</td>
        </tr>
        <tr>
            <td nowrap>
                flagName
            </td>
            <td>
                <strong>varchar(200)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Inventory flag name.</td>
        </tr>
        <tr>
            <td nowrap>
                flagText
            </td>
            <td>
                <strong>varchar(100)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Inventory flag descriptive text.</td>
        </tr>        
    </tbody>
</table>
