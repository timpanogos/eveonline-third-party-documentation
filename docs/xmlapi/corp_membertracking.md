## MemberTracking

* __Path:__ ``/corp/MemberTracking.xml.aspx``
* __Access mask:__ 2048 (MemberTrackingLimited) or 33554432 (MemberTrackingExtended)
* __Cache timer:__ 5 hours 30 minutes
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
                <td>extended</td>
                <td><strong>bool</strong></td>
                <td>
                    0 _(False, default)_ - return the limited member tracking<br />
                    1 _(True)_ - return the extended member tracking
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response
#### (Limited response)

```xml
<eveapi version="2">
    <currentTime>2016-01-10 19:02:13</currentTime>
    <result>
        <rowset name="members" key="characterID" columns="characterID,name,startDateTime,baseID,base,title">
            <row characterID="91808937" name="Brasshauler" startDateTime="2015-11-08 17:45:00" baseID="0" base="" title=""/>
            <row characterID="92279832" name="Tiberious Udan" startDateTime="2015-07-28 16:03:00" baseID="0" base="" title=""/>
            <row characterID="91701964" name="Pi-eter Panala" startDateTime="2014-08-20 20:33:00" baseID="0" base="" title=""/>
            <row characterID="94037045" name="katarina premium" startDateTime="2014-09-15 19:49:00" baseID="0" base="" title="CEO"/>
            <row characterID="94090434" name="Peter Stubberup" startDateTime="2014-08-30 08:16:00" baseID="0" base="" title=""/>
            <row characterID="94136088" name="Sabrina Stubberup" startDateTime="2015-11-26 18:54:00" baseID="0" base="" title=""/>
            <row characterID="93925088" name="Lucky Driver" startDateTime="2015-11-23 16:58:00" baseID="0" base="" title=""/>
            <row characterID="92630037" name="Dmitriy Hisoka" startDateTime="2015-07-10 18:33:00" baseID="0" base="" title=""/>
            <row characterID="145647343" name="Name Brand" startDateTime="2015-06-27 19:14:00" baseID="0" base="" title=""/>
            <row characterID="95570934" name="Laura Viatrix" startDateTime="2015-10-21 16:43:00" baseID="0" base="" title=""/>
            <row characterID="294023254" name="Strangey" startDateTime="2015-11-23 22:26:00" baseID="0" base="" title=""/>
            <row characterID="1094687436" name="Erygra Gerive" startDateTime="2015-07-31 15:16:00" baseID="0" base="" title=""/>
            <row characterID="1358477813" name="Golden nugget" startDateTime="2015-09-23 20:29:00" baseID="0" base="" title=""/>
            <row characterID="1564716468" name="syndrie sexton" startDateTime="2015-09-23 20:29:00" baseID="0" base="" title=""/>
            <row characterID="519668251" name="Astral Queen" startDateTime="2015-10-14 20:59:00" baseID="0" base="" title=""/>
            <row characterID="153550529" name="hak 13" startDateTime="2014-11-12 18:36:00" baseID="0" base="" title=""/>
        </rowset>
    </result>
    <cachedUntil>2016-01-10 23:23:18</cachedUntil>
</eveapi>
```

### Sample Response
#### (Extended response)

```xml
<eveapi version="2">
    <currentTime>2016-01-10 19:08:08</currentTime>
    <result>
        <rowset name="members" key="characterID" columns="characterID,name,startDateTime,baseID,base,title,logonDateTime,logoffDateTime,locationID,location,shipTypeID,shipType,roles,grantableRoles">
            <row characterID="91808937" name="Brasshauler" startDateTime="2015-11-08 17:45:00" baseID="0" base="" title="" logonDateTime="2016-01-10 14:39:16" logoffDateTime="2016-01-10 14:36:43" locationID="61000473" location="VYO-68 VII - Space Port" shipTypeID="655" shipType="Epithal" roles="3379903038751744" grantableRoles="0"/>
            <row characterID="92279832" name="Tiberious Udan" startDateTime="2015-07-28 16:03:00" baseID="0" base="" title="" logonDateTime="2016-01-10 16:49:22" logoffDateTime="2016-01-10 16:52:45" locationID="60003916" location="Sobaseki VII - Caldari Navy Logistic Support" shipTypeID="670" shipType="Capsule" roles="3379903038751744" grantableRoles="0"/>
            <row characterID="91701964" name="Pi-eter Panala" startDateTime="2014-08-20 20:33:00" baseID="0" base="" title="" logonDateTime="2016-01-09 18:08:09" logoffDateTime="2016-01-09 18:30:53" locationID="61000473" location="VYO-68 VII - Space Port" shipTypeID="17478" shipType="Retriever" roles="147495091114607616" grantableRoles="0"/>
            <row characterID="94037045" name="katarina premium" startDateTime="2014-09-15 19:49:00" baseID="0" base="" title="CEO" logonDateTime="2016-01-10 11:13:17" logoffDateTime="2016-01-10 10:59:58" locationID="61000046" location="L5D-ZL VI - The Gyde" shipTypeID="11176" shipType="Crow" roles="9223372036854775807" grantableRoles="0"/>
            <row characterID="94090434" name="Peter Stubberup" startDateTime="2014-08-30 08:16:00" baseID="0" base="" title="" logonDateTime="2016-01-10 11:26:14" logoffDateTime="2016-01-04 20:06:50" locationID="61000473" location="VYO-68 VII - Space Port" shipTypeID="2161" shipType="Crucifier" roles="9223372036854775807" grantableRoles="0"/>
            <row characterID="94136088" name="Sabrina Stubberup" startDateTime="2015-11-26 18:54:00" baseID="0" base="" title="" logonDateTime="2016-01-10 11:14:50" logoffDateTime="2016-01-09 16:44:40" locationID="61000473" location="VYO-68 VII - Space Port" shipTypeID="28844" shipType="Rhea" roles="9223372036854775807" grantableRoles="0"/>
            <row characterID="93925088" name="Lucky Driver" startDateTime="2015-11-23 16:58:00" baseID="0" base="" title="" logonDateTime="2015-11-29 10:51:38" logoffDateTime="2015-11-29 10:52:48" locationID="61000046" location="L5D-ZL VI - The Gyde" shipTypeID="-1" shipType="Unknown Type" roles="0" grantableRoles="0"/>
            <row characterID="92630037" name="Dmitriy Hisoka" startDateTime="2015-07-10 18:33:00" baseID="0" base="" title="" logonDateTime="2016-01-10 09:12:59" logoffDateTime="2016-01-10 10:03:47" locationID="61000073" location="EIMJ-M I - Insane Asylum II" shipTypeID="17738" shipType="Machariel" roles="9223372036854775807" grantableRoles="0"/>
            <row characterID="145647343" name="Name Brand" startDateTime="2015-06-27 19:14:00" baseID="0" base="" title="" logonDateTime="2015-11-18 04:56:20" logoffDateTime="2015-11-18 04:57:30" locationID="60008371" location="Ebtesham V - Amarr Navy Assembly Plant" shipTypeID="-1" shipType="Unknown Type" roles="0" grantableRoles="0"/>
            <row characterID="95570934" name="Laura Viatrix" startDateTime="2015-10-21 16:43:00" baseID="0" base="" title="" logonDateTime="2015-12-25 11:31:27" logoffDateTime="2015-12-25 12:02:44" locationID="61000021" location="Y-CWQY VI - HAM'S HOUSE of LOVE" shipTypeID="670" shipType="Capsule" roles="1152360787902209920" grantableRoles="0"/>
            <row characterID="294023254" name="Strangey" startDateTime="2015-11-23 22:26:00" baseID="0" base="" title="" logonDateTime="2016-01-10 09:13:05" logoffDateTime="2016-01-10 09:42:56" locationID="61000045" location="1-NJLK II - Crazy House of HAMS" shipTypeID="11186" shipType="Malediction" roles="0" grantableRoles="0"/>
            <row characterID="1094687436" name="Erygra Gerive" startDateTime="2015-07-31 15:16:00" baseID="0" base="" title="" logonDateTime="2016-01-10 00:20:48" logoffDateTime="2016-01-10 00:22:02" locationID="60003760" location="Jita IV - Moon 4 - Caldari Navy Assembly Plant" shipTypeID="32880" shipType="Venture" roles="3379903038751744" grantableRoles="0"/>
            <row characterID="1358477813" name="Golden nugget" startDateTime="2015-09-23 20:29:00" baseID="0" base="" title="" logonDateTime="2016-01-10 15:56:38" logoffDateTime="2016-01-10 16:30:34" locationID="61000473" location="VYO-68 VII - Space Port" shipTypeID="11993" shipType="Cerberus" roles="3379903038751744" grantableRoles="0"/>
            <row characterID="1564716468" name="syndrie sexton" startDateTime="2015-09-23 20:29:00" baseID="0" base="" title="" logonDateTime="2016-01-10 15:27:09" logoffDateTime="2016-01-10 16:30:41" locationID="61000046" location="L5D-ZL VI - The Gyde" shipTypeID="34562" shipType="Svipul" roles="3379903038751872" grantableRoles="0"/>
            <row characterID="519668251" name="Astral Queen" startDateTime="2015-10-14 20:59:00" baseID="0" base="" title="" logonDateTime="2016-01-01 09:22:56" logoffDateTime="2016-01-01 09:41:22" locationID="61000046" location="L5D-ZL VI - The Gyde" shipTypeID="670" shipType="Capsule" roles="3379903038751744" grantableRoles="0"/>
            <row characterID="153550529" name="hak 13" startDateTime="2014-11-12 18:36:00" baseID="0" base="" title="" logonDateTime="2014-11-20 15:24:18" logoffDateTime="2014-11-20 15:37:32" locationID="61000956" location="VK6-EZ VII - Muquifo do Brazuca" shipTypeID="-1" shipType="Unknown Type" roles="0" grantableRoles="0"/>
        </rowset>
    </result>
    <cachedUntil>2016-01-10 23:23:18</cachedUntil>
</eveapi>
```

### Result Data
#### (Limited response)

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>characterID</td>
            <td>long</td>
            <td>ID of the member</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of the member</td>
        </tr>
        <tr>
            <td>startDateTime</td>
            <td>datetime</td>
            <td>join date of the member</td>
        </tr>
        <tr>
            <td>baseID</td>
            <td>long</td>
            <td>stationID where the member has its base</td>
        </tr>
        <tr>
            <td>base</td>
            <td>string</td>
            <td>station name where the member has its base</td>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>titles of the member</td>
        </tr>
    </tbody>
</table>

### Result Data
#### (Extended response)

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>characterID</td>
            <td>long</td>
            <td>ID of the member</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of the member</td>
        </tr>
        <tr>
            <td>startDateTime</td>
            <td>datetime</td>
            <td>join date of the member</td>
        </tr>
        <tr>
            <td>baseID</td>
            <td>long</td>
            <td>stationID where the member has its base</td>
        </tr>
        <tr>
            <td>base</td>
            <td>string</td>
            <td>station name where the member has its base</td>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>titles of the member</td>
        </tr>
        <tr>
            <td>logonDateTime</td>
            <td>datetime</td>
            <td>last logon time of the member</td>
        </tr>
        <tr>
            <td>logoffDateTime</td>
            <td>datetime</td>
            <td>last logoff time of the member</td>
        </tr>
        <tr>
            <td>locationID</td>
            <td>long</td>
            <td>the locationID of the member (station or solarsystem)</td>
        </tr>
        <tr>
            <td>location</td>
            <td>string</td>
            <td>the location name of the member (station or solarsystem)</td>
        </tr>
        <tr>
            <td>shipTypeID</td>
            <td>int</td>
            <td>the members current ships's typeID</td>
        </tr>
        <tr>
            <td>shipType</td>
            <td>string</td>
            <td>the members current ships's type name</td>
        </tr>
        <tr>
            <td>roles</td>
            <td>long</td>
            <td>the roles a member has</td>
        </tr>
        <tr>
            <td>grantableRoles</td>
            <td>long</td>
            <td>the grantable roles a member has</td>
        </tr>
    </tbody>
</table>