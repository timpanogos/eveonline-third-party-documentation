# AllianceList
Returns active Alliances in New Eden and their member Corporations.

* __Path:__ ``/eve/AllianceList.xml.aspx``
* __Access mask:__ None
* __Cache timer:__ 60 minutes
* __Parameters:__
    <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>version</td>
                <td>Int</td>
                <td>
                    Optional parameter <br />
                    0 _(default)_ - return a list of alliances and member corporations<br />
                    1 - return a list of alliances only
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response
#### (Alliance & Member Response)

```xml
<eveapi version="2">
    <currentTime>2015-11-23 07:59:20</currentTime>
    <result>
        <rowset name="alliances" key="allianceID" columns="name,shortName,allianceID,executorCorpID,memberCount,startDate">
            <row name="Goonswarm Federation" shortName="CONDI" allianceID="1354830081" executorCorpID="1344654522" memberCount="16042" startDate="2010-06-01 05:36:00">
                <rowset name="memberCorporations" key="corporationID" columns="corporationID,startDate">
                    <row corporationID="98002506" startDate="2014-11-12 22:20:00"/>
                    <row corporationID="98007214" startDate="2012-01-28 05:36:00"/>
                    <row corporationID="98007645" startDate="2015-10-28 12:25:00"/>
                    <row corporationID="98008630" startDate="2010-12-20 19:40:00"/>
                </rowset>
            </row>
            <row name="SpaceMonkey's Alliance" shortName="SMA" allianceID="679584932" executorCorpID="669646544" memberCount="5082" startDate="2009-02-14 06:55:00">
                <rowset name="memberCorporations" key="corporationID" columns="corporationID,startDate">
                    <row corporationID="98029473" startDate="2015-04-21 21:05:00"/>
                    <row corporationID="98036267" startDate="2015-08-03 04:15:00"/>
                    <row corporationID="869043665" startDate="2015-10-14 23:30:00"/>
                    <row corporationID="98051175" startDate="2014-04-06 17:10:00"/>
                </rowset>
            </row>
        </rowset>
    </result>
    <cachedUntil>2015-11-23 09:03:42</cachedUntil>
</eveapi>
```

#### (Alliance Only Response)

```xml
<result>
    <rowset name="alliances" key="allianceID" columns="name,shortName,allianceID,executorCorpID,memberCount,startDate">
        <row name="Goonswarm Federation" shortName="CONDI" allianceID="1354830081" executorCorpID="1344654522" memberCount="16043" startDate="2010-06-01 05:36:00"/>
        <row name="SpaceMonkey's Alliance" shortName="SMA" allianceID="679584932" executorCorpID="669646544" memberCount="5082" startDate="2009-02-14 06:55:00"/>
        <row name="FACTION WARFARE ALLIANCE" shortName="FWALL" allianceID="99004126" executorCorpID="98261065" memberCount="4663" startDate="2014-02-07 23:55:48"/>
        <row name="Fidelas Constans" shortName="FCON" allianceID="1006830534" executorCorpID="1371955702" memberCount="4401" startDate="2009-01-30 18:07:00"/>
        <row name="Test Alliance Please Ignore" shortName="TEST" allianceID="498125261" executorCorpID="416584095" memberCount="4398" startDate="2010-05-12 21:05:00"/>
        <row name="RvB - BLUE Republic" shortName="RVB-B" allianceID="99000652" executorCorpID="98037851" memberCount="3774" startDate="2011-05-02 14:18:00"/>
        <row name="RAZOR Alliance" shortName="-RZR-" allianceID="741557221" executorCorpID="147823541" memberCount="3524" startDate="2005-09-23 05:24:00"/>
        <row name="Alternate Allegiance" shortName="ALTS" allianceID="99003805" executorCorpID="515709294" memberCount="3345" startDate="2013-11-06 03:49:27"/>
        <row name="The Bastion" shortName="BASTN" allianceID="99004425" executorCorpID="98203764" memberCount="3114" startDate="2014-05-06 21:37:13"/>
        <row name="RUST415" shortName="RUST" allianceID="99003212" executorCorpID="98160985" memberCount="2742" startDate="2013-05-06 18:21:21"/>
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
            <td colspan="3">Rowset <strong>alliances</strong></td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of the alliance.</td>
        </tr>
        <tr>
            <td>shortName</td>
            <td>string</td>
            <td>Alliance ticker.</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>int</td>
            <td>ID number of the alliance.</td>
        </tr>
        <tr>
            <td>executorCorpID</td>
            <td>int</td>
            <td>Corporation ID of the executor corporation.</td>
        </tr>
        <tr>
            <td>memberCount</td>
            <td>int</td>
            <td>Number of pilots in the alliance.</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>datetime</td>
            <td>Date the alliance was founded.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>memberCorporations</strong></td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>int</td>
            <td>Corporation ID of the member corporation.</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>datetime</td>
            <td>Date the corporation joined the alliance.</td>
        </tr>     
    </tbody>
</table>