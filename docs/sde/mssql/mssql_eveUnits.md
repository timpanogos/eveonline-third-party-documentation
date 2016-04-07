# EVE Units Table (MSSQL)
In game units.

## EVE Units

* __Table Name:__ ``eveUnits``
* __Description:__ EVE in game units.

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
            <td nowrap id="unitID">
                unitID
                <code title="Belongs to primary key">PK</code>
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Unit ID.</td>
        </tr>
        <tr>
            <td nowrap>
                unitName
            </td>
            <td>
                <strong>varchar(100)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Unit name, usually describing measure (e.g. Length).</td>
        </tr>
        <tr>
            <td nowrap>
                displayName
            </td>
            <td>
                <strong>varchar(50)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Displayed name of unit, usually an abbreviation (e.g. m).</td>
        </tr>
        <tr>
            <td nowrap>
                description
            </td>
            <td>
                <strong>varchar(1000)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Unit description, usually the full unit name (e.g. Meter).</td>
        </tr>
    </tbody>
</table>
