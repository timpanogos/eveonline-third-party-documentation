# AccountStatus
Information about a player's EVE account like creation time, minutes spent in game etc.  

* __Path:__ ``/account/AccountStatus.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ 33554432
* __Parameters:__ none

### Sample Response

```xml
<result>
    <paidUntil>2015-06-27 10:20:57</paidUntil>
    <createDate>2007-05-04 17:47:00</createDate>
    <logonCount>3177</logonCount>
    <logonMinutes>235243</logonMinutes>
    <rowset name="multiCharacterTraining" key="trainingEnd" columns="trainingEnd" />
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
            <td>paidUntil</td>
            <td><strong>datetime</strong></td>
            <td>The date until which the account is currently subscribed</td>
        </tr>
        <tr>
            <td>createDate</td>
            <td><strong>datetime</strong></td>
            <td>The date the account was created</td>
        </tr>
        <tr>
            <td>logonCount</td>
            <td><strong>long</strong></td>
            <td>The number of times you logged into CCP's services</td>
        </tr>
        <tr>
            <td>logonMinutes</td>
            <td><strong>long</strong></td>
            <td>The amount of time you actually spent logged on in the game</td>
        </tr>
    </tbody>
</table>


### Notes

* logonCount includes not only the game logons, but also forum logons, likely also EVEGate logons.

### References

[The API Dev Blog Trilogy - Volume Three -- He who controls the data (Tyrannis 1.2)](http://community.eveonline.com/news/dev-blogs/the-api-dev-blog-trilogy-volume-three-he-who-controls-the-data-tyrannis-1.2/)
