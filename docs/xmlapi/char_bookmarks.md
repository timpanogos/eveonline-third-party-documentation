## Bookmarks

* __Path:__ ``/char/Bookmarks.xml.aspx``
* __Access mask:__ 268435456
* __Cache timer:__ 1 hour
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
                <td>Character ID for which bookmarks will be requested</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="folders" key="folderID" columns="folderName">
        <row folderID="0" folderName="">
            <rowset name="bookmarks" key="bookmarkID" columns="creatorID,created,itemID,typeID,locationID,x,y,z,memo,note">
                <row bookmarkID="12" creatorID="90000001" created="2015-07-08 21:34:14" itemID="60014689" typeID="57" locationID="30004971" x="0" y="0" z="0" memo="Home Station" note="Our base of residence" />
                <row bookmarkID="13" creatorID="90000001" created="2015-07-08 21:35:07" itemID="40314792" typeID="8" locationID="30004971" x="0" y="0" z="0" memo="Sun" note="" />
            </rowset>
        </row>
        <row folderID="1" folderName="A lovely empty folder">
            <rowset name="bookmarks" key="bookmarkID" columns="creatorID,created,itemID,typeID,locationID,x,y,z,memo,note" />
        </row>
        <row folderID="3" folderName="Sites">
            <rowset name="bookmarks" key="bookmarkID" columns="creatorID,created,itemID,typeID,locationID,x,y,z,memo,note">
                <row bookmarkID="16" creatorID="90000001" created="2015-07-08 21:37:12" itemID="40314827" typeID="15" locationID="30004971" x="0" y="0" z="0" memo="Duripant VII - Asteroid Belt 2 ( Asteroid Belt )" note="" />
                <row bookmarkID="17" creatorID="90000001" created="2015-07-08 21:37:22" itemID="40314829" typeID="15" locationID="30004971" x="0" y="0" z="0" memo="Duripant VII - Asteroid Belt 3 ( Asteroid Belt )" note="" />
                <row bookmarkID="18" creatorID="90000001" created="2015-07-08 21:37:29" itemID="40314794" typeID="15" locationID="30004971" x="0" y="0" z="0" memo="Duripant I - Asteroid Belt 1 ( Asteroid Belt )" note="" />
                <row bookmarkID="19" creatorID="90000001" created="2015-07-08 21:37:39" itemID="40314811" typeID="15" locationID="30004971" x="0" y="0" z="0" memo="Duripant VII - Asteroid Belt 1 ( Asteroid Belt )" note="" />
            </rowset>
        </row>
        <row folderID="4" folderName="Random crap">
            <rowset name="bookmarks" key="bookmarkID" columns="creatorID,created,itemID,typeID,locationID,x,y,z,memo,note">
                <row bookmarkID="14" creatorID="90000001" created="2015-07-08 21:36:08" itemID="0" typeID="5" locationID="30004971" x="-373405654941.733" y="42718621667.0746" z="-1415023302173.46" memo="spot in Duripant solar system" note="" />
                <row bookmarkID="15" creatorID="90000001" created="2015-07-08 21:36:46" itemID="0" typeID="5" locationID="30004971" x="-373405652840.03" y="42718623812.4957" z="-1415023308332.07" memo="spot in Duripant solar system" note="" />
            </rowset>
        </row>
    </rowset>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>folders</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per bookmark folder.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>folderID</td>
            <td><strong>int</strong></td>
            <td>Unique folder ID.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>folderName</td>
            <td><strong>string</strong></td>
            <td>Folder name.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>bookmarks</td>
            <td><strong>rowset</strong></td>
            <td>Rowset container 1 row per bookmark in the current folder.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>bookmarkID</td>
            <td nowrap><strong>int</strong></td>
            <td>Unique bookmark ID.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>creatorID</td>
            <td nowrap><strong>long</strong></td>
            <td>Bookmark creator ID.  Can be character or corporation ID.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>created</td>
            <td nowrap><strong>datetime</strong></td>
            <td>Date and time when bookmark was created.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>itemID</td>
            <td nowrap>
                <strong>long</strong>
                <sup>
                <a href="../../sde/mssql_invItems/">[1]</a>
                </sup>
            </td>
            <td>Item ID of the item to which the bookmark refers, or 0 if the bookmark refers to a location.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>typeID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/">[1]</a>
                </sup>
            </td>
            <td>Type ID of the item to which the bookmark refers (even if the bookmark refers to a location instead of an item).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>locationID</td>
            <td nowrap>
                <strong>long</strong>
                <sup>
                <a href="../../sde/tableref/#map-solar-systems">[1]</a>
                </sup>
            </td>
            <td>Location ID of the solar sytem to which this bookmark refers.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>x</td>
            <td nowrap><strong>double</strong></td>
            <td>X location of bookmark (relative to system sun) if this bookmark does not refer to an item.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>y</td>
            <td nowrap><strong>double</strong></td>
            <td>Y location of bookmark (relative to system sun) if this bookmark does not refer to an item.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>z</td>
            <td nowrap><strong>double</strong></td>
            <td>Z location of bookmark (relative to system sun) if this bookmark does not refer to an item.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>memo</td>
            <td nowrap><strong>string</strong></td>
            <td>Bookmark description (owner specified).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>note</td>
            <td nowrap><strong>string</strong></td>
            <td>Bookmark annotation (owner specified).</td>
        </tr>
    </tbody>
</table>

### Notes

* A bookmark will either refer to a specific item (e.g. station), or a location in space.  Bookmarks which refer to an item will have a non-zero
item ID.  Otherwise, the bookmark will specify x, y and z coordinates of the location it refers to.


