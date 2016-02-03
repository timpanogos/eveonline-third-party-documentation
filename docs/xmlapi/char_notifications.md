## Notifications

* __Path:__ ``/char/Notifications.xml.aspx``
* __Access mask:__ 16384
* __Cache timer:__ 30 minutes
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
                <td>Character ID for which notification headers will be retrieved</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
  <rowset name="notifications" key="notificationID" columns="notificationID,typeID,senderID,senderName,sentDate,read">
    <row notificationID="399058968" typeID="73" senderID="3017794" senderName="Some guy" sentDate="2012-12-22 23:34:00" read="0" />
  </rowset>
</result>
```  

### Result Data

<table>
    <tbody>
        <tr>
            <td>notifications</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per notification header.</td>
        </tr>
        <tr>
            <td></td>
            <td>notificationID</td>
            <td><strong>long</strong></td>
            <td>Unique notification ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td>
	        <strong>int</strong>
		<sup>
                <a href="../../xmlapi/enumerations/#notification-type">[1]</a>
                </sup>
            </td>
            <td>Type ID describing the notification.</td>
        </tr>
        <tr>
            <td></td>
            <td>senderID</td>
            <td><strong>long</strong></td>
            <td>ID of entity which sent notification.</td>
        </tr>
        <tr>
            <td></td>
            <td>senderName</td>
            <td><strong>string</strong></td>
            <td>Name of entity which sent notification.</td>
        </tr>
        <tr>
            <td></td>
            <td>sentDate</td>
            <td><strong>datetime</strong></td>
            <td>Date when notification was sent.</td>
        </tr>
        <tr>
            <td></td>
            <td>read</td>
            <td><strong>boolean</strong></td>
            <td>1 if this notification has been read in the EVE client, 0 otherwise.</td>
        </tr>
    </tbody>
</table>

### Notes

* The first call to this endpoint returns the latest 200 notifications received by the character within the last week.
* Subsequent requests return only the new items received since the last request.
* You can request new items every 30 minutes.
* To "reset the timer" and retrieve from the start, you'll need to wait 6 hours before calling this endpoint.
