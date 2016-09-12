# Skills
Retrieve skills portion of character sheet.

* __Path:__ ``/char/Skills.xml.aspx``
* __Cache timer:__ 1 hour
* __Access mask:__ 1073741824 or 8
* __Parameters:__
    <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>Character ID for which skill list will be requested</td>
            </tr>
        </tbody>
    </table>

### Sample Response (shortened for readability)

```xml
<result>
    <freeSkillPoints>0</freeSkillPoints>
    <rowset name="skills" key="typeID" columns="typeID,typeName,skillpoints,level,published">
        <row typeID="2403" typeName="Advanced Planetology" skillpoints="1250" level="1" published="1"/>
        <row typeID="2406" typeName="Planetology" skillpoints="768000" level="5" published="1"/>
        <row typeID="2495" typeName="Interplanetary Consolidation" skillpoints="1024000" level="5" published="1"/>
        <row typeID="2505" typeName="Command Center Upgrades" skillpoints="1024000" level="5" published="1"/>
        <row typeID="3300" typeName="Gunnery" skillpoints="256000" level="5" published="1"/>
        <row typeID="3301" typeName="Small Hybrid Turret" skillpoints="45255" level="4" published="1"/>
        <row typeID="30651" typeName="Caldari Strategic Cruiser" skillpoints="1280000" level="5" published="1"/>
        <row typeID="32918" typeName="Mining Frigate" skillpoints="2829" level="2" published="1"/>
        <row typeID="33092" typeName="Caldari Destroyer" skillpoints="512000" level="5" published="1"/>
        <row typeID="33096" typeName="Caldari Battlecruiser" skillpoints="1536000" level="5" published="1"/>
        <row typeID="33699" typeName="Medium Drone Operation" skillpoints="512000" level="5" published="1"/>
    </rowset>
</result>
```

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>freeSkillPoints</td>
            <td><strong>int</strong></td>
            <td></td>
            <td>Skillpoints available to be assigned.</td>
        </tr>
        <tr>
	    <td>skills</td>
	    <td><strong>rowset</strong></td>
	    <td></td>
	    <td>Rowset containing one row per character skill</td>
        </tr>
        <tr>
	    <td></td>
            <td>typeID</td>
            <td nowrap>
                <strong>int<strong>
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html">[1]</a>
                </sup>
            </td>
            <td>Skill type ID.</td>
        </tr>
        <tr>
	    <td></td>
            <td>typeName</td>
            <td><strong>string</strong></td>
            <td>Skill name.</td>
        </tr>
        <tr>
	    <td></td>
            <td>skillpoints</td>
            <td><strong>int</strong></td>
            <td>Number of skillpoints trained in this skill.</td>
        </tr>
        <tr>
	    <td></td>
            <td>level</td>
            <td><strong>int</strong></td>
            <td>Level skill has been trained to.</td>
        </tr>
        <tr>
	    <td></td>
            <td>published</td>
            <td><strong>boolean</strong></td>
            <td>0 = unpublished, 1 = published</td>
        </tr>
    </tbody>
</table>

### Notes

* This call returns a subset of the information available in the <a href="../char_charactersheet.html">CharacterSheet</a> endpoint, but with a different mask so that API keys can be configured to only return skills information.  That is, if an API key allows <a href="../char_charactersheet.html">CharacterSheet</a>, then calling the Skills endpoint is unnecessary.

