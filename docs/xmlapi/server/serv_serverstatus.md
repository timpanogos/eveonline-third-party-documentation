# Server Status
Provides status of the server up/down and the number of users logged onto the server.

* __Path:__ ``/server/ServerStatus.xml.aspx``
* __Cache timer:__ 3 minutes
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <serverOpen>True</serverOpen>
    <onlinePlayers>16491</onlinePlayers>
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
