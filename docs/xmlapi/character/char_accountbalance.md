# AccountBalance
Retrieve character account balance.

* __Path:__ ``/char/AccountBalance.xml.aspx``
* __Access mask:__ 1
* __Cache timer:__ 15 minutes  
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
    <rowset name="accounts" key="accountID" columns="accountID,accountKey,balance">
        <row accountID="12636870" accountKey="1000" balance="1234567.89" />
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
            <td>accountID</td>
            <td>int</td>
            <td>ID of the account</td>
        </tr>
        <tr>
            <td>accountKey</td>
            <td>int</td>
            <td>Account identifier</td>
        </tr>
        <tr>
            <td>balance</td>
            <td>decimal</td>
            <td>Amount of ISK in this character's wallet</td>
        </tr>
    </tbody>
</table>

### Notes

* __accountKey:__ This is always 1000 for a character's account balance as opposed to a corporation, where accountKey ranges from 1000 to 1006 for the seven corporate wallet divisions.
