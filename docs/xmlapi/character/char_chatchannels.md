# ChatChannels
Retrieve character Chat Channels.

* __Path:__ ``/char/ChatChannels.xml.aspx``
* __Cache timer:__ 14 minutes
* __Access mask:__ 536870912
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
                <td><strong>long</strong></td>
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="channels" key="channelID" columns="channelID,ownerID,ownerName,displayName,comparisonKey,hasPassword,motd">
        <row channelID="-69329950" ownerID="95578451" ownerName="CCP Tellus" displayName="Players' Haven" comparisonKey="players'haven" hasPassword="False" motd="<b>Feed pineapples to the cats!</b>">
            <rowset name="allowed" key="accessorID" columns="accessorID,accessorName">
                <row accessorID="99005629" accessorName="Tellus Alliance" />
            </rowset>
            <rowset name="blocked" key="accessorID" columns="accessorID,accessorName,untilWhen,reason">
                <row accessorID="98396389" accessorName="Tellus Corporation" untilWhen="0001-01-01 00:00:00" reason="" />
            </rowset>
            <rowset name="muted" key="accessorID" columns="accessorID,accessorName,untilWhen,reason">
                <row accessorID="90006031" accessorName="CCP Nestor" untilWhen="2015-08-07 15:17:40" reason="Test success! You can't speak now." />
            </rowset>
            <rowset name="operators" key="accessorID" columns="accessorID,accessorName">
                <row accessorID="92168909" accessorName="CCP FoxFour" />
                <row accessorID="95465499" accessorName="CCP Bartender" />
            </rowset>
        </row>
    </rowset>
</result>
```

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>channels</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per channel.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>channelID</td>
            <td nowrap><strong>long</strong></td>
            <td>Unique channel ID.  Always negative for player-created channels.  Permanent (CCP created) channels have a positive ID, but don't appear in the API.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>ownerID</td>
            <td><strong>long</strong></td>
            <td>Channel owner ID.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>ownerName</td>
            <td><strong>string</strong></td>
            <td>Channel owner name.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>displayName</td>
            <td><strong>string</strong></td>
            <td>Displayed name of channel.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>comparisonKey</td>
            <td><strong>rowset</strong></td>
            <td>Normalized, unique string used to compare channel names.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>hasPassword</td>
            <td><strong>boolean</strong></td>
            <td>If true, then this is a password protected channel.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>motd</td>
            <td><strong>string</strong></td>
            <td>Current channel message of the day.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>allowed</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing one row per allowed channel member.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorID</td>
            <td><strong>long</strong></td>
            <td>ID of allowed channel member (see notes below).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorName</td>
            <td><strong>string</strong></td>
            <td>Name of allowed channel member.</td>
        </tr>
        <tr>
            <td></td>
            <td>blocked</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing one row per blocked channel member.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorID</td>
            <td><strong>long</strong></td>
            <td>ID of blocked channel member (see notes below).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorName</td>
            <td><strong>string</strong></td>
            <td>Name of blocked channel member.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>untilWhen</td>
            <td><strong>datetime</strong></td>
            <td>Time at which accessor will no longer be blocked.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>reason</td>
            <td><strong>string</strong></td>
            <td>Reason accessor is blocked.</td>
        </tr>
        <tr>
            <td></td>
            <td>muted</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing one row per muted channel member.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorID</td>
            <td><strong>long</strong></td>
            <td>ID of muted channel member (see notes below).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorName</td>
            <td><strong>string</strong></td>
            <td>Name of muted channel member.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>untilWhen</td>
            <td><strong>datetime</strong></td>
            <td>Time at which accessor will no longer be muted.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>reason</td>
            <td><strong>string</strong></td>
            <td>Reason accessor is muted.</td>
        </tr>
        <tr>
            <td></td>
            <td>operators</td>
            <td><strong>rowset</strong></td>
            <td>Rowset containing one row per channel operator.</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorID</td>
            <td><strong>long</strong></td>
            <td>ID of channel operator (see notes below).</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>accessorName</td>
            <td><strong>string</strong></td>
            <td>Name of channel operator.</td>
        </tr>
    </tbody>
</table>

### Notes

* Chat channel accessor IDs can be characters, corporations or alliances.
