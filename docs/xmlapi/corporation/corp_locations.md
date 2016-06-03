# Locations

Returns location of an item or character.

* __Path:__ ``/corp/Locations.xml.aspx``
* __Access mask:__ 16777216
* __Cache timer:__ 1 hour  
* __Parameters:__
	<table border="1">
		<tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Meaning</th>
            </tr>
             <tr>
                <td>ids</td>
                <td><strong>long</strong></td>
                <td>ID of item to retrieve location information for</td>
            </tr>
		</tbody>
	</table>

* __Sample Output:__
```xml
  <result>
    <rowset name="locations" key="itemID" columns="itemID,itemName,x,y,z">
      <row itemID="1020171077193" itemName="Gallente Control Tower" x="-67142925360" y="-8145422240" z="-1403156520"/>
    </rowset>
  </result>
```
