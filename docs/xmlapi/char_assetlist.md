## AssetList


* __Path:__ ``/char/AssetList.xml.aspx``
* __Access mask:__ 2
* __Cache timer:__ ca. 2 hours (XML cache), 6 hours (data cache)  
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
                <td>flat</td>
                <td><strong>bool</strong></td>
                <td>
                    0 _(False, default)_ - return a nested assets list<br />
                    1 _(True)_ - return flat assets list
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response
#### (Nested response)

```xml
<eveapi version="2">
    <currentTime>2015-07-10 10:32:32</currentTime>
        <result>
            <rowset name="assets" key="itemID" columns="itemID,locationID,typeID,quantity,flag,singleton">
                <row itemID="1018649971138" locationID="60001864" typeID="1319" quantity="5" flag="4" singleton="0" />
                <row itemID="1787288209" locationID="60003760" typeID="12743" quantity="1" flag="4" singleton="1" rawQuantity="-1">
                    <rowset name="contents" key="itemID" columns="itemID,typeID,quantity,flag,singleton">
                        <row itemID="589965999" typeID="8433" quantity="1" flag="20" singleton="1" rawQuantity="-1" />
                        <row itemID="824051273" typeID="26060" quantity="1" flag="92" singleton="1" rawQuantity="-1" />
                        <row itemID="1017307387" typeID="1319" quantity="1" flag="5" singleton="1" rawQuantity="-1" />
                        <row itemID="1018184692465" typeID="25589" quantity="2" flag="5" singleton="0" />
                        <row itemID="1018563763395" typeID="11132" quantity="1" flag="5" singleton="0" />
                    </rowset>
                </row>
                <row itemID="1017933248702" locationID="60003760" typeID="24594" quantity="89000" flag="4" singleton="0" />
                <row itemID="1018046062102" locationID="60003760" typeID="16247" quantity="17" flag="4" singleton="0" />
                <row itemID="1018482760487" locationID="60003760" typeID="24595" quantity="46604" flag="4" singleton="0" />
            </rowset>
        </result>
    <cachedUntil>2015-07-10 12:14:50</cachedUntil>
</eveapi>
```  

### Sample Response
#### (Flat response)

```xml
<eveapi version="2">
    <currentTime>2015-07-10 10:32:32</currentTime>
        <result>
            <rowset name="assets" key="itemID" columns="itemID,locationID,typeID,quantity,flag,singleton">
                <row itemID="1787288209" locationID="60003760" typeID="12743" quantity="1" flag="4" singleton="1" rawQuantity="-1" />
                <row itemID="1018046062102" locationID="60003760" typeID="16247" quantity="17" flag="4" singleton="0" />
                <row itemID="1018482760487" locationID="60003760" typeID="24595" quantity="51207" flag="4" singleton="0" />
                <row itemID="1018510338105" locationID="60003760" typeID="24593" quantity="62656" flag="4" singleton="0" />
                <row itemID="1018511379483" locationID="60003760" typeID="19689" quantity="19" flag="4" singleton="0" />
                <row itemID="1018526577354" locationID="60003760" typeID="21918" quantity="348589" flag="4" singleton="0" />
            </rowset>
        </result>
    <cachedUntil>2015-07-10 12:14:50</cachedUntil>
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
            <td>itemID</td>
            <td>long</td>
            <td>
                Unique ID for this item.  The ID of an item is stable if that item is not repackaged,
		stacked, detached from a stack, assembled, or otherwise altered.  If an item is changed
		in one of these ways, then the ID will also change (see notes below).
            </td>
        </tr>
        <tr>
            <td>locationID</td>
            <td>long</td>
            <td>
                References a solar system or station. Note that in the <em>nested XML</em> response this 
                column is not present in the sub-asset lists, as those share the locationID of their parent node. 
                <em>Example: a module in a container in a ship in a station.</em>. Whereas the <em>flat XML</em> 
                returns a locationID for each item. (See the notes on how to resolve the locationID to a 
                solar system or station)
            </td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
	        <strong>int</strong>
		<sup>
                <a href="../../sde/yaml_typeIDs/">[1]</a>
                </sup>
	    </td>
            <td>The type of this item.</td>
        </tr>
        <tr>
            <td>quantity</td>
            <td>long</td>
            <td>How many items are in this stack.</td>
        </tr>
        <tr>
            <td>flag</td>
            <td>int</td>
            <td>
                Indicates something about this item's storage location. The flag is used to differentiate 
                between hangar divisions, drone bay, fitting location, and similar. Please see the 
                <a href="../enumerations/#inventory-flags">Inventory Flags</a> documentation.
            </td>
        </tr>
        <tr>
            <td>singleton</td>
            <td>bool</td>
            <td>If <em>True</em> (1), indicates that this item is a singleton. This means that the item is not packaged.</td>
        </tr>
        <tr>
            <td>rawQuantity</td>
            <td>long</td>
            <td>Items in the AssetList (and ContractItems) now include a rawQuantity attribute if the quantity in the DB is negative (see notes).</td>
        </tr>
    </tbody>
</table>

### Notes

* __locationID:__    
    * _officeID to stationID conversion_    
        To convert locationIDs greater than or equal to 66000000 
        and less than 67000000 to stationIDs from staStations subtract 6000001 from the locationID. 
        To convert locationIDs greater than or equal to 67000000 and less than 68000000 to 
        stationIDs from ConquerableStationList subtract 6000000 from the locationID.    
    * _locationID to StationID/itemID conversion_    
        The locationID is not always an officeID (for 
        example, when you never had an office there, but have items in the Deliveries area for 
        items bought/sold (flag=62). In cases like these the officeID to stationID conversion 
        above will not always work. There is a small group of dbo.staStations.stationID mapReferences, 
        or locationIDs that are part of the ConquerableStationList and less than the 61000000 base 
        for Player Outposts.    
        Basically, when 60000000 < locationID <61000000 the mapReference (eveName, mapDenormailze, 
        staStations) will give you the name of the object. The exception is the range 60014861 
        through (including) 60014928. This is the range of stationID's that are actually the 
        conquerableStations that pre-date player Outposts. When the locationID is greater than or 
        equal to 66000000 the the officeID conversion works. When the locationID is greater than 
        61000000 and less than 66000000 then it is a ConquerableOutpost. When the locationID 
        < 60000000 then the asset is somewhere in space - I have only seen solarSystem numbers.        
* __rawQuantity:__ Items in the AssetList (and ContractItems) include a rawQuantity attribute if 
    the quantity in the DB is negative. Negative quantities are in fact codes, -1 indicates that 
    the item is a singleton (non-stackable). If the item happens to be a blueprint, -1 is an 
    _Original_ and -2 is a blueprint _Copy_.    
    
### References
* General information - [Forum thread _"API: Change Log"_ by CCP Garthagk _(see post #10)_](http://oldforums.eveonline.com/?a=topic&threadID=575626&page=1)
* locationID - [Forum thread about how to convert the locationID to a "proper" location](http://oldforums.eveonline.com/?a=topic&threadID=667487)    
* rawQuantity - [Dev blog _"CAKs and Contracts in the API"_](http://community.eveonline.com/news/dev-blogs/caks-and-contracts-in-the-api/)
* Uniqueness of itemIDs - [Location Id problem with EVE API -- /char/blueprints.xml.aspx --](https://forums.eveonline.com/default.aspx?g=posts&t=459727)
