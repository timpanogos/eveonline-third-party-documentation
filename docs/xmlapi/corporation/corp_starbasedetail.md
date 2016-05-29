# StarbaseDetail
Returns details for specified starbase.

* __Path:__ ``/corp/StarbaseDetail.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ 131072
* __Parameters:__
     <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>itemID</td>
                <td><strong>long</strong></td>
                <td>ItemID of the POS as given in the <a href="corp_starbaselist.html">starbase list</a></td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
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
            <td>Current POS state. See <a href="../constants.html#known-pos-states">known POS states</a>.</td>
        </tr>
        <tr>
            <td>stateTimestamp</td>
            <td>datetime</td>
            <td>Depend on current POS stete. See <a href="../constants.html#known-pos-states">known POS states</a>.</td>
        </tr>
        <tr>
            <td>onlineTimestamp</td>
            <td>datetime</td>
            <td>When the POS will be online or most recently was put online.  See <a href="../constants.html#known-pos-states">known POS states</a>.</td>
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

* __How it works__:
There are two flags - the usage flag and the deploy flag. Each flags contain the information about which roles can perform which activity for the POS. That information is encoded in a 4 bit (usage) or 8 bit (deploy) field.
A role is encoded in 2 bits, so each flag is divided into sections of 2 bits. Each of that sections correspond with a role.

* __Roles:__
The role needed to get access to a POS facilities is encoded in 2 bits:
<ul>
	<li>00 'Starbase Config'</li>
	<li>01 'Corporation Members'</li>
	<li>10 'Alliance Members'</li>
	<li>11 'Starbase Fuel Tech'</li>
</ul>

* __Usage Flags:__
Access restrictions to the POS fuel bay are encoded in this 4 bit field.
     <table border="1">
        <thead>
        <tr>
                <th>Bits</th>
                <th>Role</th>
        </tr>
        </thead>
        <tbody>
        <tr>
                <td>0, 1</td>
                <td>view</td>
        </tr>
        <tr>
                <td>2, 3</td>
                <td>take</td>
        </tr>
        </tbody>
    </table>

__Example__:

usage field = 3 decimal => 0011 binary

bits 0,1 = 11 => Starbase Fuel Tech can view

bits 2,3 = 00 => Starbase Config can take

* __Deploy Flags:__
Access restrictions to who is able to change state of this POS are encoded in this 8 bit field.

 <table border="1">
        <thead>
        <tr>
                <th>Bits</th>
                <th>Role</th>
        </tr>
        </thead>
        <tbody>
        <tr>
                <td>0, 1</td>
                <td>anchor</td>
        </tr>
        <tr>
                <td>2, 3</td>
                <td>unanchor</td>
        </tr>
          <tr>
                <td>4, 5</td>
                <td>online</td>
        </tr>
        <tr>
                <td>6, 7</td>
                <td>offline</td>
        </tr>
        </tbody>
    </table>

__Example__:

deploy field = 99 decimal => 01100011 binary

bits 0,1 = 11 => Starbase Fuel Tech can anchor

bits 2,3 = 00 => Starbase Config can unanchor

bits 4,5 = 10 => Alliance Members can online

bits 6,7 = 01 => Corporation Members can offline
