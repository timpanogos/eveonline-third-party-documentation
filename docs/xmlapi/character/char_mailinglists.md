# MailingLists
Returns the mailing list the character is a member of.

* __Path:__ ``/char/mailinglists.xml.aspx``
* __Access mask:__ 1024
* __Cache timer:__ 6 hours
* __Parameters:__
    <table border="1">
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
    <rowset name="mailingLists" key="listID" columns="listID,displayName">
    <row listID="98889028" displayName="Dark Market Mailing"/>
    <row listID="139658202" displayName="CyberDyne R-D"/>
    <row listID="145103663" displayName="TEST DIRECTORS"/>
    <row listID="145108697" displayName="Kicking Peoples"/>
    <row listID="145119013" displayName="Welcome INDY"/>
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
            <td>listID</td>
            <td>int</td>
            <td>The ID of the mailing list.</td>
        </tr>
        <tr>
            <td>displayName</td>
            <td>string</td>
            <td>The name of the mailing list.</td>
        </tr>
    </tbody>
</table>