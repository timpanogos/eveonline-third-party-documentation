## AccountStatus

* __Path:__ ``/account/AccountStatus.xml.aspx``
* __Access mask:__ 33554432
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
            <tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-05-01 10:18:49</currentTime>
    <result>
        <paidUntil>2015-06-27 10:20:57</paidUntil>
        <createDate>2007-05-04 17:47:00</createDate>
        <logonCount>3177</logonCount>
        <logonMinutes>235243</logonMinutes>
        <rowset name="multiCharacterTraining" key="trainingEnd" columns="trainingEnd" />
    </result>
    <cachedUntil>2015-05-01 11:15:03</cachedUntil>
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
            <td>paidUntil</td>
            <td>datetime</td>
            <td>The date until which the account is currently subscribed</td>
        </tr>
        <tr>
            <td>createDate</td>
            <td>datetime</td>
            <td>The date the account was created</td>
        </tr>
        <tr>
            <td>logonCount</td>
            <td>int</td>
            <td>The number of times you logged into CCP's services</td>
        </tr>
        <tr>
            <td>logonMinutes</td>
            <td>int</td>
            <td>The amount of time you actually spent logged on in the game</td>
        </tr>
    </tbody>
</table>


### Notes

* logonCount includes not only the game logons, but also forum logons, likely also EVEGate logons.

### References

[The API Dev Blog Trilogy - Volume Three -- He who controls the data (Tyrannis 1.2)](http://community.eveonline.com/news/dev-blogs/the-api-dev-blog-trilogy-volume-three-he-who-controls-the-data-tyrannis-1.2/)
