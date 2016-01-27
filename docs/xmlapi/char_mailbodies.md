## MailBodies

* __Path:__ ``/char/MailBodies.xml.aspx``
* __Access mask:__ 512
* __Cache timer:__ 10 years - see notes below
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
            <tr>
                <td>IDs</td>
                <td>list of <strong>long</strong></td>
                <td>Comma separated list of message IDs for which texts should be retrieved (see notes below)</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
    <currentTime>2016-01-27 22:16:23</currentTime>
    <result>
        <rowset name="messages" key="messageID" columns="messageID">
            <row messageID="290285276">
            	Mail message body.
            </row>
        </rowset>
    </result>
    <cachedUntil>2026-01-24 22:16:23</cachedUntil>
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
            <td>messageID</td>
            <td>int</td>
            <td>The unique message ID number.</td>
        </tr>
        <tr>
            <td>message text</td>
            <td>CDATA</td>
            <td>DATA (character data) encoded message text.</td>
        </tr>
    </tbody>
</table>

### Sample Response for Missing IDs

```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
    <currentTime>2016-01-27 22:16:53</currentTime>
    	<result>
			<rowset name="messages" key="messageID" columns="messageID"/>
			<missingMessageIDs>1234,5678</missingMessageIDs>
		</result>
    <cachedUntil>2026-01-24 22:16:53</cachedUntil>
</eveapi>
```  

### Result Data for Missing IDs

<table>
    <tbody>
    	<tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>messages</td>
            <td><strong>rowset</strong></td>
            <td>Contains the message texts for message IDs for which texts could be retrieved.</td>
        </tr>
        <tr>
            <td>missingMessageIDs</td>
            <td>list of <strong>long</strong></td>
            <td>Comma separated list of message IDs for which texts could not be retrieved.</td>
        </tr>
    </tbody>
</table>

### Notes

* Message headers must be requested first before the corresponding message texts can be retrieved.
* Message texts typically report a "cached until" time of ten years from the current time.  It's not clear whether texts are really cached for this long.