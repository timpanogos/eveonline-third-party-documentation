## StarbaseDetail

* __Path:__ ``/corp/StarbaseDetail.xml.aspx``
* __Access mask:__ 131072
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
            </tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            </tr>
            <tr>
                <td>itemID</td>
                <td><strong>long</strong></td>
                <td>ItemID of the POS as given in the <a href="../corp_starbaselist/">starbase list</a></td>
            </tr>
        </tbody>
    </table>

### Sample Response
```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
  <currentTime>2010-05-29 20:36:56</currentTime>
  <result>
    <state>4</state>
    <stateTimestamp>2009-05-02 21:31:36</stateTimestamp>
    <onlineTimestamp>2009-04-18 23:30:29</onlineTimestamp>
    <generalSettings>
      <usageFlags>3</usageFlags>
      <deployFlags>0</deployFlags>
      <allowCorporationMembers>1</allowCorporationMembers>
      <allowAllianceMembers>1</allowAllianceMembers>
    </generalSettings>
    <combatSettings>
      <useStandingsFrom ownerID="154683985" />
      <onStandingDrop standing="990" />
      <onStatusDrop enabled="0" standing="0" />
      <onAggression enabled="0" />
      <onCorporationWar enabled="1" />
    </combatSettings>
    <rowset name="fuel" key="typeID" columns="typeID,quantity">
      <row typeID="16275" quantity="2447" />
      <row typeID="16274" quantity="18758" />
      <row typeID="9848" quantity="166" />
      <row typeID="9832" quantity="332" />
      <row typeID="3689" quantity="332" />
      <row typeID="44" quantity="166" />
      <row typeID="16273" quantity="6142" />
      <row typeID="16272" quantity="5644" />
      <row typeID="3683" quantity="1162" />
    </rowset>
  </result>
  <cachedUntil>2010-05-29 21:36:56</cachedUntil>
</eveapi>
```
### ResultData
<table border="1">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Data type</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>state</td>
			<td>int</td>
			<td>Current POS state. See <a href="../enumerations/#known-pos-states">known POS states</a>.</td>
		</tr>
		<tr>
			<td>stateTimestamp</td>
			<td>datetime</td>
			<td>Depend on current POS stete. See <a href="../enumerations/#known-pos-states">known POS states</a>.</td>
		</tr>
		<tr>
			<td>onlineTimestamp</td>
			<td>datetime</td>
			<td>When the POS will be online or most recently was put online.  See <a href="../enumerations/#known-pos-states">known POS states</a>.</td>
		</tr>
		<tr>
			<th colspan="3">generalSettings</th>
		</tr>
		<tr>
			<td>usageFlags</td>
			<td>int</td>
			<td>Access restrictions to the POS fuel bay are encoded in this 4 bit field. See <a href="#flags-description">flags description</a>.</td>
		</tr>
		<tr>
			<td>deployFlags</td>
			<td>int</td>
			<td>Access restrictions to who is able to operate this POS are encoded in this 8 bit field. See <a href="#flags-description">flags description</a>.</td>
		</tr>
		<tr>
			<td>allowCorporationMembers</td>
			<td>int</td>
			<td>POS Usage restriction for corporation members. 1- allowed, 0 - not allowed.</td>
		</tr>
		<tr>
			<td>allowAllianceMembers</td>
			<td>int</td>
			<td>POS Usage restriction for alliance members. 1- allowed, 0 - not allowed.</td>
		</tr>
		<tr>
			<th colspan="3">combatSettings</th>
		</tr>
		<tr>
			<td>useStandingsFrom</td>
			<td></td>
			<td>Represents POS "Use alliance standings" settings.</td>
		</tr>
		<tr>
			<td>ownerID</td>
			<td>long</td>
			<td>ID of standings holder - corporation or alliance. </td>
		</tr>
		<tr>
			<td>onStandingDrop</td>
			<td></td>
			<td>Represents POS "Attack if standings lower than" settings.</td>
		</tr>
		<tr>
			<td>standing</td>
			<td>int</td>
			<td>Standing below that POS will attack targets.</td>
		</tr>
		<tr>
			<td>onStatusDrop</td>
			<td></td>
			<td>Represents POS "Attack if security status lower than" and "Attack if other security status is dropping" settings.</td>
		</tr>
		<tr>
			<td>standing</td>
			<td>int</td>
			<td>Represents POS "Attack if security status lower than" settings.</td>
		</tr>
		<tr>
			<td>enabled</td>
			<td>int</td>
			<td>"Attack if other security status is dropping" 1 = enabled, 0 = disabled</td>
		</tr>
		<tr>
			<td>onAggression</td>
			<td></td>
			<td>Represents POS "Attack if agression" setting</td>
		</tr>
		<tr>
			<td>enabled</td>
			<td>int</td>
			<td>1 = enabled, 0 = disabled</td>
		</tr>
		<tr>
			<td>onCorporationWar</td>
			<td></td>
			<td>Represents POS "Attack if at war" settings</td>
		</tr>
		<tr>
			<td>enabled</td>
			<td>int</td>
			<td>1 = enabled, 0 = disabled</td>
		</tr>
		<tr>
			<th colspan="3">rowset fuel</th>
		</tr>
		<tr>
			<td>typeID</td>
			<td>long</td>
			<td>typeID of fuel that presents in POS fuel bay or strontium bay</td>
		</tr>
		<tr>
			<td>quantity</td>
			<td>int</td>
			<td>quantity of specified fuel type in POS fuel bay or strontium bay</td>
		</tr>
	</tbody>
</table>

### Flags Description
* __Access Restrictions:__
	They store access restrictions to the POS facilities on 2 bits:
		<ol start="0">
			<li>'Starbase Config'</li>
			<li>'Starbase Fuel Tech'</li>
			<li>'Corporation Members'</li>
			<li>'Alliance Members'</li>
		</ol>

* __Usage Flags:__
access restrictions to the POS fuel bay are encoded in this 4 bit field.
```
if usageFlags == 9 == 0b1001   -->   10    01
                                    view  take
    0b10 == 2 --> 'Corporation Members' can view
    0b01 == 1 --> 'Starbase Fuel Tech' can take
```

* __Deploy Flags:__
	access restrictions to who is able to operate this POS are encoded in this 8 bit field.
```
if usageFlags == 68 == 0b01000100  -->   01       00       01      00
                                        anchor  unanchor  online  offline
    0b01 == 1 --> 'Starbase Fuel Tech' can anchor
    0b00 == 0 --> 'Starbase Config' can unanchor
    0b01 == 1 --> 'Starbase Fuel Tech' can online
    0b00 == 0 --> 'Starbase Config' can offline
```
