## Blueprints

* __Path:__ ``/char/Blueprints.xml.aspx``
* __Access mask:__ 2
* __Cache timer:__ 720 minutes  
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
    <rowset columns="itemID,locationID,typeID,typeName,flagID,quantity,timeEfficiency,materialEfficiency,runs" key="itemID" name="blueprints">
        <row runs="1" materialEfficiency="0" timeEfficiency="0" quantity="-2" flagID="4" typeName="Rattlesnake Victory Edition Blueprint" typeID="34153" locationID="60003466" itemID="1014573377908"/>
        <row runs="10" materialEfficiency="0" timeEfficiency="0" quantity="-2" flagID="4" typeName="Council Diplomatic Shuttle Blueprint" typeID="34497" locationID="60003466" itemID="1012538208557"/>
        <row runs="1" materialEfficiency="0" timeEfficiency="0" quantity="-2" flagID="4" typeName="Victorieux Luxury Yacht Blueprint" typeID="34591" locationID="60003466" itemID="1017147043703"/>
    </rowset>
</result>
```  

### Result Data

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>itemID</td>
            <td>long</td>
            <td>
                Unique ID for this item.  The ID of an item is stable if that item is not repackaged,
		stacked, detached from a stack, assembled, or otherwise altered.  If an item is changed
		in one of these ways, then the ID will also change (see notes below).
            </td>
        </tr>
        <tr>
            <td>locationID</td>
            <td>long</td>
            <td>
                References a solar system, station or itemID if this blueprint is located within a container.
                If an itemID the <a href="../char_assetlist">Char - AssetList</a> API must be queried to find the container using the itemID,
                from which the correct location of the Blueprint can be derived.
            </td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
                int
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
            </td>
            <td>The type of this item.</td>
        </tr>
        <tr>
            <td>typeName</td>
            <td>string</td>
            <td>The name of this item.</td>
        </tr>
        <tr>
            <td>quantity</td>
            <td>long</td>
            <td>Typically will be -1 or -2 designating a singleton item, where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (no activities performed on them yet).</td>
        </tr>
        <tr>
            <td>flagID</td>
            <td nowrap>
                long
                <sup>
                <a href="../../sde/mssql_invFlags/" title="Inventory Flags table">[1]</a>
                </sup>
            </td>
            <td>
                Indicates something about this item's storage location. The flag is used to differentiate 
                between hangar divisions, drone bay, fitting location, and similar. Please see the 
                <a href="../enumerations/#inventory-flags">Inventory Flags</a> documentation.
            </td>
        </tr>
        <tr>
            <td>timeEfficiency</td>
            <td>long</td>
            <td>Time Efficiency Level of the blueprint, can be any even integer between 0 and 20.</td>
        </tr>
        <tr>
            <td>materialEfficiency</td>
            <td>long</td>
            <td>Material Efficiency Level of the blueprint, can be any integer between 0 and 10.</td>
        </tr>
        <tr>
            <td>runs</td>
            <td>long</td>
            <td>Number of runs remaining if the blueprint is a copy, -1 if it is an original.</td>
        </tr>
    </tbody>
</table>

### References

* [Hyperion API Improvements](http://community.eveonline.com/news/dev-blogs/what-third-party-developers-probably-want-to-know-about-hyperion/)
* Uniqueness of itemIDs - [Location Id problem with EVE API -- /char/blueprints.xml.aspx --](https://forums.eveonline.com/default.aspx?g=posts&t=459727)
