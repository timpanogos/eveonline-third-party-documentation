# Locations

Retrieve location and name of specific items that belong to the character / corporation of the api key. This call can be used to
retrieve the player-set name of containers and ships.

* __Path:__ ``/char/Locations.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ 134217728
* __Parameters:__
    <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>characterID</td>
                <td>long</td>
                <td>ID of character</td>
            </tr>
            <tr>
                <td>IDs</td>
                <td>list of long</td>
                <td>comma separated list of itemIDs that belong to the owner of the API key</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="locations" key="itemID" columns="itemID,itemName,x,y,z">
        <row itemID="1017795212344" itemName="awesome ship" x="0" y="0" z="0"/>
        <row itemID="1017795212345" itemName="my container" x="0" y="0" z="0"/>
    </rowset>
</result>
```  

### Result Data

<table border="1">
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>itemID</td>
            <td>long</td>
            <td>Unique ID for the item.</td>
        </tr>
        <tr>
            <td>itemName</td>
            <td>string</td>
            <td>
                The name of the item.
            </td>
        </tr>
        <tr>
            <td>x</td>
            <td>double</td>
            <td>The x coordinate of the item's location</td>
        </tr>
        <tr>
            <td>y</td>
            <td>double</td>
            <td>The y coordinate of the item's location</td>
        </tr>
        <tr>
            <td>z</td>
            <td>double</td>
            <td>The z coordinate of the item's location</td>
        </tr>
    </tbody>
</table>

### Notes

* Coordinates for items in hangars/stations are set to (0,0,0)
* Unknown or invalid itemIDs are ignored (there will be no row in the resulting rowset).  
