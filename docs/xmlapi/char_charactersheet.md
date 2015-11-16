## CharacterSheet

* __Path:__ ``/char/CharacterSheet.xml.aspx``
* __Access mask:__ 8
* __Cache timer:__ 60 minutes
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
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-10-29 12:41:22</currentTime>
    <result>
        <characterID>632424020</characterID>
        <name>Ernest Borgnine</name>
        <homeStationID>60009646</homeStationID>
        <DoB>2006-03-05 12:41:00</DoB>
        <race>Amarr</race>
        <bloodLineID>13</bloodLineID>
        <bloodLine>Khanid</bloodLine>
        <ancestryID>37</ancestryID>
        <ancestry>Cyber Knights</ancestry>
        <gender>Male</gender>
        <corporationName>Mine. Now. Please</corporationName>
        <corporationID>790988403</corporationID>
        <allianceName>Alliance. Now. Please.</allianceName>
        <allianceID>1538759362</allianceID>
        <factionName/>
        <factionID>0</factionID>
        <cloneTypeID>164</cloneTypeID>
        <cloneName>Clone Grade Alpha</cloneName>
        <cloneSkillPoints>0</cloneSkillPoints>
        <freeSkillPoints>0</freeSkillPoints>
        <freeRespecs>3</freeRespecs>
        <cloneJumpDate>2014-07-29 19:21:47</cloneJumpDate>
        <lastRespecDate>2014-06-01 15:50:22</lastRespecDate>
        <lastTimedRespec>2014-06-01 15:50:22</lastTimedRespec>
        <remoteStationDate>2014-07-29 19:21:47</remoteStationDate>
        <rowset columns="jumpCloneID,typeID,locationID,cloneName" key="jumpCloneID" name="jumpClones">
            <row cloneName="" locationID="61000253" typeID="164" jumpCloneID="18965660"/>
            <row cloneName="" locationID="61000336" typeID="164" jumpCloneID="11203936"/>
            <row cloneName="" locationID="61000637" typeID="164" jumpCloneID="15754983"/>
            <row cloneName="" locationID="61000902" typeID="164" jumpCloneID="19027562"/>
        </rowset>
        <rowset columns="jumpCloneID,typeID,typeName" key="jumpCloneID" name="jumpCloneImplants">
            <row typeID="9941" jumpCloneID="18965660" typeName="Memory Augmentation - Basic"/>
            <row typeID="10212" jumpCloneID="18965660" typeName="Neural Boost - Standard"/>
            <row typeID="10216" jumpCloneID="18965660" typeName="Ocular Filter - Standard"/>
            <row typeID="10228" jumpCloneID="18965660" typeName="Zainou 'Gnome' Shield Management SM-703"/>
            <row typeID="10208" jumpCloneID="11203936" typeName="Memory Augmentation - Standard"/>
            <row typeID="10212" jumpCloneID="11203936" typeName="Neural Boost - Standard"/>
            <row typeID="10216" jumpCloneID="11203936" typeName="Ocular Filter - Standard"/>
            <row typeID="10221" jumpCloneID="11203936" typeName="Cybernetic Subprocessor - Standard"/>
            <row typeID="9941" jumpCloneID="15754983" typeName="Memory Augmentation - Basic"/>
            <row typeID="9943" jumpCloneID="15754983" typeName="Cybernetic Subprocessor - Basic"/>
            <row typeID="10212" jumpCloneID="15754983" typeName="Neural Boost - Standard"/>
            <row typeID="10216" jumpCloneID="15754983" typeName="Ocular Filter - Standard"/>
            <row typeID="10228" jumpCloneID="15754983" typeName="Zainou 'Gnome' Shield Management SM-703"/>
            <row typeID="13256" jumpCloneID="15754983" typeName="Inherent Implants 'Noble' Hull Upgrades HG-1003"/>
            <row typeID="13260" jumpCloneID="15754983" typeName="Inherent Implants 'Squire' Capacitor Systems Operation EO-603"/>
        </rowset>
        <jumpActivation>2015-08-15 21:09:23</jumpActivation>
        <jumpFatigue>2015-08-15 21:42:41</jumpFatigue>
        <jumpLastUpdate>2015-08-15 21:05:42</jumpLastUpdate>
        <balance>509647769.03</balance>
        <rowset columns="typeID,typeName" key="typeID" name="implants">
            <row typeID="10209" typeName="Memory Augmentation - Improved"/>
            <row typeID="10213" typeName="Neural Boost - Improved"/>
            <row typeID="10217" typeName="Ocular Filter - Improved"/>
            <row typeID="10222" typeName="Cybernetic Subprocessor - Improved"/>
            <row typeID="10226" typeName="Social Adaptation Chip - Improved"/>
            <row typeID="33329" typeName="Genolution 'Auroral' AU-79"/>
        </rowset>
        <attributes>
            <intelligence>17</intelligence>
            <memory>17</memory>
            <charisma>27</charisma>
            <perception>17</perception>
            <willpower>21</willpower>
        </attributes>
        <rowset columns="typeID,skillpoints,level,published" key="typeID" name="skills">
            <row typeID="11584" published="1" level="1" skillpoints="750"/>
            <row typeID="24624" published="1" level="0" skillpoints="28"/>
            <row typeID="3394" published="1" level="2" skillpoints="2829"/>
            <row typeID="3411" published="1" level="1" skillpoints="750"/>
            <row typeID="3551" published="1" level="3" skillpoints="8000"/>
            <row typeID="3426" published="1" level="1" skillpoints="250"/>
            <row typeID="25863" published="1" level="1" skillpoints="750"/>
            <row typeID="3328" published="1" level="3" skillpoints="16000"/>
            <row typeID="3340" published="1" level="2" skillpoints="5663"/>
            <row typeID="3363" published="1" level="1" skillpoints="250"/>
            <row typeID="24270" published="1" level="1" skillpoints="750"/>
            <row typeID="21059" published="1" level="3" skillpoints="16000"/>
            <row typeID="12367" published="1" level="2" skillpoints="2829"/>
            <row typeID="12366" published="1" level="2" skillpoints="2829"/>
            <row typeID="12365" published="1" level="2" skillpoints="2829"/>
            <row typeID="12195" published="1" level="1" skillpoints="250"/>
            <row typeID="11566" published="1" level="3" skillpoints="16000"/>
            <row typeID="3443" published="1" level="3" skillpoints="8000"/>
            <row typeID="3425" published="1" level="4" skillpoints="90510"/>
            <row typeID="3422" published="1" level="2" skillpoints="2829"/>
            <row typeID="3417" published="1" level="3" skillpoints="8000"/>
            <row typeID="3416" published="1" level="5" skillpoints="256000"/>
            <row typeID="3413" published="1" level="3" skillpoints="8000"/>
            <row typeID="3406" published="1" level="5" skillpoints="256000"/>
            <row typeID="3403" published="1" level="4" skillpoints="45255"/>
            <row typeID="3402" published="1" level="3" skillpoints="8000"/>
            <row typeID="3392" published="1" level="3" skillpoints="8000"/>
            <row typeID="3387" published="1" level="1" skillpoints="500"/>
            <row typeID="3386" published="1" level="2" skillpoints="1415"/>
            <row typeID="3385" published="1" level="4" skillpoints="45255"/>
            <row typeID="3380" published="1" level="3" skillpoints="8000"/>
            <row typeID="3330" published="1" level="1" skillpoints="500"/>
            <row typeID="3327" published="1" level="3" skillpoints="21351"/>
            <row typeID="3320" published="1" level="3" skillpoints="8000"/>
            <row typeID="3319" published="1" level="2" skillpoints="1415"/>
            <row typeID="3301" published="1" level="1" skillpoints="250"/>
            <row typeID="3300" published="1" level="1" skillpoints="250"/>
        </rowset>
        <rowset columns="certificateID" key="certificateID" name="certificates"/>
        <rowset columns="roleID,roleName" key="roleID" name="corporationRoles">
            <row roleName="roleEquipmentConfig" roleID="2199023255552"/>
            <row roleName="roleInfrastructureTacticalOfficer" roleID="144115188075855872"/>
        </rowset>
        <rowset columns="roleID,roleName" key="roleID" name="corporationRolesAtHQ">
            <row roleName="roleHangarCanTake1" roleID="8192"/>
            <row roleName="roleHangarCanTake3" roleID="32768"/>
            <row roleName="roleHangarCanQuery1" roleID="1048576"/>
            <row roleName="roleHangarCanQuery3" roleID="4194304"/>
            <row roleName="roleHangarCanQuery4" roleID="8388608"/>
            <row roleName="roleHangarCanQuery5" roleID="16777216"/>
            <row roleName="roleContainerCanTake1" roleID="4398046511104"/>
            <row roleName="roleContainerCanTake2" roleID="8796093022208"/>
            <row roleName="roleContainerCanTake3" roleID="17592186044416"/>
        </rowset>
        <rowset columns="roleID,roleName" key="roleID" name="corporationRolesAtBase">
            <row roleName="roleHangarCanTake1" roleID="8192"/>
            <row roleName="roleHangarCanTake3" roleID="32768"/>
            <row roleName="roleHangarCanQuery1" roleID="1048576"/>
            <row roleName="roleHangarCanQuery3" roleID="4194304"/>
            <row roleName="roleHangarCanQuery4" roleID="8388608"/>
            <row roleName="roleHangarCanQuery5" roleID="16777216"/>
            <row roleName="roleContainerCanTake1" roleID="4398046511104"/>
            <row roleName="roleContainerCanTake2" roleID="8796093022208"/>
            <row roleName="roleContainerCanTake3" roleID="17592186044416"/>
        </rowset>
        <rowset columns="roleID,roleName" key="roleID" name="corporationRolesAtOther">
            <row roleName="roleHangarCanTake1" roleID="8192"/>
            <row roleName="roleHangarCanTake3" roleID="32768"/>
            <row roleName="roleHangarCanQuery1" roleID="1048576"/>
            <row roleName="roleHangarCanQuery2" roleID="2097152"/>
            <row roleName="roleHangarCanQuery3" roleID="4194304"/>
            <row roleName="roleHangarCanQuery4" roleID="8388608"/>
            <row roleName="roleHangarCanQuery5" roleID="16777216"/>
            <row roleName="roleContainerCanTake1" roleID="4398046511104"/>
            <row roleName="roleContainerCanTake2" roleID="8796093022208"/>
            <row roleName="roleContainerCanTake3" roleID="17592186044416"/>
        </rowset>
        <rowset columns="titleID,titleName" key="titleID" name="corporationTitles">
            <row titleName="**" titleID="8"/>
        </rowset>
    </result>
    <cachedUntil>2015-10-29 13:31:49</cachedUntil>
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
            <td>characterID</td>
            <td>long</td>
            <td>The character ID.</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Character Name.</td>
        </tr>
        <tr>
            <td>homeStationID</td>
            <td>long</td>
            <td>ID for station where clone will spawn on demise.</td>
        </tr>
        <tr>
            <td>DoB</td>
            <td>datetime</td>
            <td>Date character was created.</td>
        </tr>
        <tr>
            <td>race</td>
            <td>string</td>
            <td>Characters race.</td>
        </tr>
        <tr>
            <td>bloodLineID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/tableref/#chr-bloodlines">[1]</a>
                </sup>
            </td>
            <td>ID for characters bloodline.</td>
        </tr>
        <tr>
            <td>bloodLine</td>
            <td>string</td>
            <td>Characters bloodline.</td>
        </tr>
        <tr>
            <td>ancestryID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/tableref/#chr-ancestries">[2]</a>
                </sup>
            </td>
            <td>ID for characters ancestry.</td>
        </tr>
        <tr>
            <td>ancestry</td>
            <td>string</td>
            <td>Characters ancestry.</td>
        </tr>
        <tr>
            <td>gender</td>
            <td>string</td>
            <td>Characters gender.</td>
        </tr>
        <tr>
            <td>corporationName</td>
            <td>string</td>
            <td>Characters corporation.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>long</td>
            <td>ID for characters corporation.</td>
        </tr>
        <tr>
            <td>allianceName</td>
            <td>string</td>
            <td>Characters alliance.</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>long</td>
            <td>ID for characters alliance.</td>
        </tr>
        <tr>
            <td>factionName</td>
            <td>string</td>
            <td>Characters faction.</td>
        </tr>
        <tr>
            <td>factionID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/tableref/#chr-factions">[3]</a>
                </sup>
            </td>
            <td>ID for characters faction.</td>
        </tr>
        <tr>
            <td>cloneTypeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/">[4]</a>
                </sup>
            </td>
            <td>Characters typeID for clone. <em>(deprecated)<em></td>
        </tr>
        <tr>
            <td>cloneName</td>
            <td>string</td>
            <td>Name of Clone Type. <em>(deprecated)<em></td>
        </tr>
        <tr>
            <td>cloneSkillPoints</td>
            <td>long</td>
            <td>Skillpoints covered by clone. <em>(deprecated)<em></td>
        </tr>
        <tr>
            <td>freeSkillPoints</td>
            <td>long</td>
            <td>Skillpoints available to be assigned.</td>
        </tr>
        <tr>
            <td>freeRespecs</td>
            <td>int</td>
            <td>Number of available character attribute respecs.</td>
        </tr>
        <tr>
            <td>cloneJumpDate</td>
            <td>datetime</td>
            <td>Characters last clone jump.</td>
        </tr>
        <tr>
            <td>lastRespecDate</td>
            <td>datetime</td>
            <td>Characters last character attribute respec.</td>
        </tr>
        <tr>
            <td>lastTimedRespec</td>
            <td>datetime</td>
            <td>Characters last character attribute respec. (Using respec accrued over time (1 year))</td>
        </tr>
        <tr>
            <td>remoteStationDate</td>
            <td>datetime</td>
            <td>Characters last change of home station remotely.</td>
        </tr>
        <tr>
            <td>jumpActivation</td>
            <td>datetime</td>
            <td>Characters last capital jump activation.</td>
        </tr>
        <tr>
            <td>jumpFatigue</td>
            <td>datetime</td>
            <td>Characters jump fatigue expiry.</td>
        </tr>
        <tr>
            <td>jumpLastUpdate</td>
            <td>datetime</td>
            <td>Characters last jump update.</td>
        </tr>
        <tr>
            <td>balance</td>
            <td>decimal</td>
            <td>Characters wallet balance.</td>
        </tr>
        <tr>
            <td colspan="3"><strong>Attributes</strong></td>
        </tr>
        <tr>
            <td>intelligence</td>
            <td>int</td>
            <td>Characters intelligence attribute.</td>
        </tr>
        <tr>
            <td>memory</td>
            <td>int</td>
            <td>Characters memory attribute.</td>
        </tr>
        <tr>
            <td>charisma</td>
            <td>int</td>
            <td>Characters charisma attribute.</td>
        </tr>
        <tr>
            <td>perception</td>
            <td>int</td>
            <td>Characters perception attribute.</td>
        </tr>
        <tr>
            <td>willpower</td>
            <td>int</td>
            <td>Characters willpower attribute.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>jumpClones</strong></td>
        </tr>
        <tr>
            <td>jumpCloneID</td>
            <td>int</td>
            <td>Unique jump clone identifier.</td>
        </tr>
        <tr>
            <td>cloneTypeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/">[4]</a>
                </sup>
            </td>
            <td>Characters typeID for clone. <em>(deprecated)<em></td>
        </tr>
        <tr>
            <td>locationID</td>
            <td>long</td>
            <td>References location ID.</td>
        </tr>
        <tr>
            <td>cloneName</td>
            <td>string</td>
            <td>Name given to clone.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>jumpCloneImplants</strong></td>
        </tr>
        <tr>
            <td>jumpCloneID</td>
            <td>int</td>
            <td>Unique jump clone identifier.</td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/">[4]</a>
                </sup>
            </td>
            <td>Type ID for implant</td>
        </tr>
        <tr>
            <td>typeName</td>
            <td>string</td>
            <td>Name for implant.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>implants</strong></td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/">[4]</a>
                </sup>
            </td>
            <td>Type ID for implant</td>
        </tr>
        <tr>
            <td>typeName</td>
            <td>string</td>
            <td>Name for implant.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>skills</strong></td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/">[4]</a>
                </sup>
            </td>
            <td>Type ID for implant.</td>
        </tr>
        <tr>
            <td>skillpoints</td>
            <td>int</td>
            <td>Number of skillpoints trained in this skill.</td>
        </tr>
        <tr>
            <td>level</td>
            <td>int</td>
            <td>Level skill has been trained to.</td>
        </tr>
        <tr>
            <td>published</td>
            <td>int</td>
            <td>0 = unpublished, 1 = published</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>certificates</strong> <em>(deprecated)<em></td>
        </tr>
        <tr>
            <td>certificateID</td>
            <td>int</td>
            <td>ID of certificate.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporationRoles</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int</td>
            <td>ID of role.</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of role.</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporationRolesAtHQ</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as corporationRoles.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporationRolesAtBase</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as corporationRoles.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporationRolesAtOther</strong></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <em>Same as corporationRoles.</em>
            </td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>corporationTitles</strong></td>
        </tr>
        <tr>
            <td>titleID</td>
            <td>int</td>
            <td>ID of title.</td>
        </tr>
        <tr>
            <td>titleName</td>
            <td>string</td>
            <td>Name of title.</td>
        </tr>
    </tbody>
</table>

### References

* [December 2014 third-party developer update](https://developers.eveonline.com/blog/article/december-2014-third-party-developer-update)
* [More Phoebe changes to char/CharacterSheet](https://developers.eveonline.com/blog/article/more-additions-to-char-charactersheet)
* [Jump clones, implants, skills, and more](https://developers.eveonline.com/blog/article/jump-clones-implants-skills-and-more)
* [EVE API vs. Empyrean Age 1.1](http://community.eveonline.com/news/dev-blogs/eve-api-vs.-empyrean-age-1.1/)
