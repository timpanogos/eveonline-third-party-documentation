## Server Status

* __Path:__ ``/server/ServerStatus.xml.aspx``
* __Access mask:__ none
* __Cache timer:__ 3 minutes
* __Parameters:__ None, this function accepts no arguments.

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-08-24 03:54:38</currentTime>
        <result>
            <serverOpen>True</serverOpen>
            <onlinePlayers>16491</onlinePlayers>
        </result>
    <cachedUntil>2015-08-24 03:56:10</cachedUntil>
</eveapi>
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
            <td>serverOpen</td>
            <td>boolean</td>
            <td>Server status</td>
        </tr>
        <tr>
            <td>onlinePlayers</td>
            <td>integer</td>
            <td>How many players are currently signed into EVE.</em>.</td>
        </tr>
    </tbody>
</table>
