# Locations

Returns location of an item or character.

* __Path:__ ``/corp/Locations.xml.aspx``
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
                <td>ids</td>
                <td><strong>long</strong></td>
                <td>ID of item to retrieve location information for</td>
            </tr>
		</tbody>
	</table>

* __Sample Output:__
```
<eveapi version="2">
  <currentTime>2016-05-20 05:06:32</currentTime>
  <result>
    <rowset name="locations" key="itemID" columns="itemID,itemName,x,y,z">
      <row itemID="1020171077193" itemName="Gallente Control Tower" x="-67142925360" y="-8145422240" z="-1403156520"/>
    </rowset>
  </result>
  <cachedUntil>2016-05-20 06:06:32</cachedUntil>
</eveapi>
```
