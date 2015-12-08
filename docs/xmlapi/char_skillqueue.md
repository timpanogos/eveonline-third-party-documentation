## Skill Queue

* __Path:__ ``/char/SkillQueue.xml.aspx``
* __Access mask:__ 262144
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
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>Character ID for which skill queue will be requested</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="skillqueue" key="queuePosition" columns="queuePosition,typeID,level,startSP,endSP,startTime,endTime">
        <row queuePosition="0" typeID="3440" level="5" startSP="181020" endSP="1024000" startTime="2015-11-25 07:50:03" endTime="2015-12-11 14:06:09"/>
        <row queuePosition="1" typeID="3427" level="5" startSP="380865" endSP="512000" startTime="2015-12-11 14:06:09" endTime="2015-12-14 02:48:48"/>
        <row queuePosition="2" typeID="3396" level="2" startSP="750" endSP="4243" startTime="2015-12-14 02:48:48" endTime="2015-12-14 04:25:49"/>
        <row queuePosition="3" typeID="3396" level="3" startSP="4243" endSP="24000" startTime="2015-12-14 04:25:49" endTime="2015-12-14 13:34:38"/>
        <row queuePosition="4" typeID="21718" level="4" startSP="24000" endSP="135765" startTime="2015-12-14 13:34:38" endTime="2015-12-16 17:19:13"/>
        <row queuePosition="5" typeID="3396" level="4" startSP="24000" endSP="135765" startTime="2015-12-16 17:19:13" endTime="2015-12-18 21:03:48"/>
        <row queuePosition="6" typeID="3396" level="5" startSP="135765" endSP="768000" startTime="2015-12-18 21:03:48" endTime="2015-12-31 01:45:53"/>
        <row queuePosition="7" typeID="13278" level="4" startSP="24000" endSP="135765" startTime="2015-12-31 01:45:53" endTime="2016-01-02 05:30:28"/>
        <row queuePosition="8" typeID="13278" level="5" startSP="135765" endSP="768000" startTime="2016-01-02 05:30:28" endTime="2016-01-14 10:12:33"/>
        <row queuePosition="9" typeID="21718" level="5" startSP="135765" endSP="768000" startTime="2016-01-14 10:12:33" endTime="2016-01-26 14:54:38"/>
        <row queuePosition="10" typeID="3398" level="5" startSP="362039" endSP="2048000" startTime="2016-01-26 14:54:38" endTime="2016-02-28 03:26:53"/>
        <row queuePosition="11" typeID="22578" level="5" startSP="181020" endSP="1024000" startTime="2016-02-28 03:26:53" endTime="2016-03-15 09:42:59"/>
        <row queuePosition="12" typeID="26260" level="5" startSP="135765" endSP="768000" startTime="2016-03-15 09:42:59" endTime="2016-03-27 14:25:04"/>
    </rowset>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>skillqueue</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per skill in queue.</td>
        </tr>
        <tr>
            <td></td>
            <td>queuePosition</td>
            <td><strong>int</strong></td>
            <td>Zero based queue position.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
	    </td>
            <td>Type ID of the skill in training.</td>
        </tr>
        <tr>
            <td></td>
            <td>level</td>
            <td><strong>int</strong></td>
            <td>Level being trained on this skill.</td>
        </tr>
        <tr>
            <td></td>
            <td>startSP</td>
            <td><strong>int</strong></td>
            <td>Number of skill points character had in this skill when training started.</td>
        </tr>
        <tr>
            <td></td>
            <td>endSP</td>
            <td><strong>int</strong></td>
            <td>Number of skill points this character will have when training completes.</td>
        </tr>
        <tr>
            <td></td>
            <td>startTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when training will start (or started), or null if the queue is paused.</td>
        </tr>
        <tr>
            <td></td>
            <td>endTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when training will complete, or null if the queue is paused.</td>
        </tr>
    </tbody>
</table>

### Notes

* If the skill queue is paused, then resumed, then startSP may report the number of skill points in a skill at the beginning of the level being trained, instead of the number of skill points accumulated when the queue was paused (possible bug).
