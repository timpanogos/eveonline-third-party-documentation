## Blueprints

* __Path:__ ``/char/Blueprints.xml.aspx``
* __Access mask:__ 2
* __Cache timer:__ 24 hours
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
            <tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            <tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>Character ID for which blueprints will be requested</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="blueprints" key="itemID" columns="itemID,locationID,typeID,typeName,flagID,quantity,timeEfficiency,materialEfficiency,runs">
        <row itemID="1000000012172" locationID="60014506" typeID="11872" typeName="R.A.M.- Ammunition Tech Blueprint" flagID="4" quantity="-1" timeEfficiency="0" materialEfficiency="0" runs="-1" />
        <row itemID="1000000012173" locationID="60014506" typeID="11872" typeName="R.A.M.- Ammunition Tech Blueprint" flagID="4" quantity="-1" timeEfficiency="20" materialEfficiency="10" runs="-1" />
        <row itemID="1000000012175" locationID="60014506" typeID="808" typeName="Mjolnir Heavy Missile Blueprint" flagID="4" quantity="-2" timeEfficiency="0" materialEfficiency="10" runs="490" />
        <row itemID="1000000012176" locationID="1015338129650" typeID="10681" typeName="125mm Railgun II Blueprint" flagID="116" quantity="-2" timeEfficiency="2" materialEfficiency="3" runs="12"/>
        <row itemID="1000000012177" locationID="1015338129650" typeID="972" typeName="Thorax Blueprint" flagID="117" quantity="-2" timeEfficiency="20" materialEfficiency="10" runs="1"/>
    </rowset>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>blueprints</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per blueprint.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>itemID</td>
            <td nowrap>
                <strong>long</strong>
                <sup>
                <a href="../char_assetlist/" title="itemID in AssetList">[1]</a>
                </sup>
            </td>
            <td>Unique blueprint ID.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>locationID</td>
            <td nowrap>
                <strong>long</strong>
                <sup>
                <a href="../char_assetlist/" title="locationID in AssetList">[1]</a>
                </sup>
            </td>
            <td>Blueprint location ID.  This is normally the itemID of the location of the blueprint.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
            </td>
            <td>Blueprint type ID.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>typeName</td>
            <td nowrap>
                <strong>string</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
            </td>
            <td>Blueprint type name.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>flagID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="../../sde/mssql_invFlags/" title="Inventory Flags table">[1]</a>
                </sup>
            </td>
            <td>Item storage location flag (see cross reference).</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>quantity</td>
            <td><strong>int</strong></td>
            <td>If this item represents a stack of as yet unused blueprint originals, then this field gives the number of blueprints.  If this item represents a single blueprint, then this field is -1 for a blueprint original; and -2 for a blueprint copy.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>timeEfficiency</td>
            <td><strong>int</strong></td>
            <td>Time efficiency of blueprint.  Valid values are 0 through 10.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>materialEfficiency</td>
            <td><strong>int</strong></td>
            <td>Material efficiency of blueprint.  Valid values are 0 through 10.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>runs</td>
            <td><strong>int</strong></td>
            <td>Number of runs remaining for a blueprint copy.  -1 for a blueprint original.</td>
            <td></td>
        </tr>
    </tbody>
</table>

### Notes

* Blueprint endpoints were originally announced in [this devblog](https://community.eveonline.com/news/dev-blogs/what-third-party-developers-probably-want-to-know-about-hyperion/).


