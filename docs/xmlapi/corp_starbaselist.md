## Starbase List

* __Path:__ ``/corp/StarbaseList.xml.aspx``
* __Access mask:__ 524288
* __Cache timer:__ 6 hours
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
		</tbody>
	</table>

### Sample Response
```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
	<currentTime>2011-12-08 19:20:12</currentTime>
	<result>
		<rowset name="starbases" key="itemID" columns="itemID,typeID,locationID,moonID,state,stateTimestamp,onlineTimestamp,standingOwnerID">
			<row itemID="100449451" typeID="27538" locationID="30000163" moonID="40010395" state="4" stateTimestamp="2011-12-08 20:03:41" onlineTimestamp="2009-06-04 07:00:51" standingOwnerID="673381830"/>
			<row itemID="638317993" typeID="27538" locationID="30000163" moonID="40010366" state="4" stateTimestamp="2011-12-08 19:33:36" onlineTimestamp="2008-09-17 03:52:55" standingOwnerID="673381830"/>
		</rowset>
	</result>
	<cachedUntil>2011-12-09 01:04:19</cachedUntil>
</eveapi>
```

### Result Data

* __Starbase List:__
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Data Type</th>
                <th>Description</th>
            </tr>
            <tr>
            	<td>itemID</td>
            	<td>long</td>
            	<td>Unique ID for this POS. This is used to request details via the StarbaseDetail API page.</td>
            </tr>
            <tr>
            	<td>typeID</td>
            	<td>long</td>
            	<td>Type ID. References the invTypes table.</td>
            </tr>
            <tr>
            	<td>locationID</td>
            	<td>long</td>
            	<td>Solar system ID. References the mapSolarSystems and mapDenormalize tables.</td>
            </tr>
            <tr>
            	<td>moonID</td>
            	<td>long</td>
            	<td>Celestial object ID. References the mapDenormalize table.</td>
            </tr>
            <tr>
            	<td>state</td>
            	<td>int</td>
            	<td>Mode of the POS. See Known POS States, below.</td>
            </tr>
            <tr>
            	<td>stateTimestamp</td>
            	<td>datetime</td>
            	<td>Depends on the state. See Known POS States, below.</td>
            </tr>
            <tr>
            	<td>onlineTimestamp</td>
            	<td>datetime</td>
            	<td>When the POS will be online or most recently was put online (see Known POS States, below).</td>
            </tr>
            <tr>
            	<td>standingOwnerID</td>
            	<td>long</td>
            	<td>ID of the standings holder - corporation or alliance</td>
            </tr>
        </tbody>
    </table>
* __Known POS States:__
	<table>
        <tbody>
        	<tr>
        		<th>State</th>
        		<th>Name</th>
        		<th>Notes</th>
        	</tr>
        	<tr>
        		<td>0</td>
        		<td>Unanchored</td>
        		<td>Also unanchoring? Has valid stateTimestamp. Note that moonID is zero for unanchored Towers, but locationID will still yield the solar system ID.</td>
        	</tr>
        	<tr>
        		<td>1</td>
        		<td>Anchored / Offline</td>
        		<td>No time information stored.</td>
        	</tr>
        	<tr>
        		<td>2</td>
        		<td>Onlining</td>
        		<td>Will be online at time = onlineTimestamp.</td>
        	</tr>
        	<tr>
        		<td>3</td>
        		<td>Reinforced</td>
        		<td>	Until time = stateTimestamp.</td>
        	</tr>
        	<tr>
        		<td>4</td>
        		<td>Online</td>
        		<td>Continuously since time = onlineTimestamp.</td>
        	</tr>
        </tbody>
    </table>
