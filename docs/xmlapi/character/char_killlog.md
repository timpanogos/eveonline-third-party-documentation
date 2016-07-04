``` eval_rst 
.. warning:: 
   This endpoint has been marked as deprecated in favor of `Char/KillMails <../character/char_killmails.html>`_.
   See the `Notes <#notes>`_ section for discussions on the topic.
```

# KillLog
Retrieve a list of character kills and deaths.

* __Path:__ ``/char/KillLog.xml.aspx``
* __Cache timer:__ 1 hour*
* __Access mask:__ 256
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
                <td>ID of character</td>
            </tr>
            <tr>
                <td>beforeKillID</td>
                <td><strong>long</strong></td>
                <td>Optional kill ID to show data after</td>
            </tr>
        </tbody>
    </table>

\* This page is exhausted after the single request in the hour, and will return an error on subsequent requests in that time. See [Notes](#notes).

### Sample Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
  <currentTime>2016-07-04 21:52:47</currentTime>
  <result>
    <rowset name="kills" key="killID" columns="killID,solarSystemID,killTime,moonID">
      <row killID="54933226" solarSystemID="31001222" killTime="2016-07-03 22:29:19" moonID="0">
        <victim characterID="93811169" characterName="Madcat326" corporationID="98008818" corporationName="Haight Industries LLC" allianceID="0" allianceName="" factionID="0" factionName="" damageTaken="63039" shipTypeID="17918" x="59788513854.179" y="-13687850177.3741" z="157817245029.115" />
        <rowset name="attackers" columns="characterID,characterName,corporationID,corporationName,allianceID,allianceName,factionID,factionName,securityStatus,damageDone,finalBlow,weaponTypeID,shipTypeID">
          <row characterID="91316135" characterName="Celeo Servasse" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="-1.0646369409683" damageDone="7825" finalBlow="1" weaponTypeID="3520" shipTypeID="12003" />
          <row characterID="95273329" characterName="Mupoc Kashuken" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="-0.2" damageDone="16656" finalBlow="0" weaponTypeID="31882" shipTypeID="12023" />
          <row characterID="94389072" characterName="Johanis Cal-dahari" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="2" damageDone="11999" finalBlow="0" weaponTypeID="24486" shipTypeID="29986" />
          <row characterID="92090484" characterName="Foxstar Damaskeenus" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="-0.4" damageDone="10383" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="95708401" characterName="Bibet Shakure" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="-1.3" damageDone="6928" finalBlow="0" weaponTypeID="24490" shipTypeID="29986" />
          <row characterID="0" characterName="" corporationID="500020" corporationName="Serpentis" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="0" damageDone="3903" finalBlow="0" weaponTypeID="0" shipTypeID="38659" />
          <row characterID="96420826" characterName="D Joker" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="0" damageDone="2858" finalBlow="0" weaponTypeID="2488" shipTypeID="33470" />
          <row characterID="0" characterName="" corporationID="500011" corporationName="Angel Cartel" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="0" damageDone="2487" finalBlow="0" weaponTypeID="0" shipTypeID="42127" />
          <row characterID="94791823" characterName="chaosInjection" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="-1" damageDone="0" finalBlow="0" weaponTypeID="12267" shipTypeID="29986" />
          <row characterID="90957994" characterName="Conner Asanari" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" securityStatus="0.5" damageDone="0" finalBlow="0" weaponTypeID="16521" shipTypeID="22452" />
        </rowset>
        <rowset name="items" columns="typeID,flag,qtyDropped,qtyDestroyed,singleton">
          <row typeID="394" flag="20" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="24427" flag="32" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="2446" flag="87" qtyDropped="1" qtyDestroyed="1" singleton="0" />
          <row typeID="28209" flag="87" qtyDropped="2" qtyDestroyed="0" singleton="0" />
          <row typeID="4405" flag="15" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="33450" flag="27" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="19215" flag="23" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="2456" flag="87" qtyDropped="5" qtyDestroyed="0" singleton="0" />
          <row typeID="26448" flag="93" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="33450" flag="28" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="394" flag="24" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="394" flag="21" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="19215" flag="19" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="4405" flag="14" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="1422" flag="12" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="2048" flag="16" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="26448" flag="94" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="33450" flag="29" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="33450" flag="30" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="2629" flag="5" qtyDropped="1750" qtyDestroyed="0" singleton="0" />
          <row typeID="33450" flag="31" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="2281" flag="22" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="19241" flag="25" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="1422" flag="13" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="26448" flag="92" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="1422" flag="11" qtyDropped="0" qtyDestroyed="1" singleton="0" />
        </rowset>
      </row>
      <row killID="54868503" solarSystemID="31000868" killTime="2016-06-30 03:39:22" moonID="0">
        <victim characterID="91316135" characterName="Celeo Servasse" corporationID="98134538" corporationName="Wormbro" allianceID="0" allianceName="" factionID="0" factionName="" damageTaken="18472" shipTypeID="11987" x="685670430496.578" y="-376814977944.382" z="-365907110851.975" />
        <rowset name="attackers" columns="characterID,characterName,corporationID,corporationName,allianceID,allianceName,factionID,factionName,securityStatus,damageDone,finalBlow,weaponTypeID,shipTypeID">
          <row characterID="641035756" characterName="Lenex Raay" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="5.00297218487895" damageDone="1169" finalBlow="1" weaponTypeID="2969" shipTypeID="22444" />
          <row characterID="1817541889" characterName="gr33nCO" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-0.1" damageDone="2163" finalBlow="0" weaponTypeID="2456" shipTypeID="22444" />
          <row characterID="92060039" characterName="Braxus Deninard" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-0.7" damageDone="1770" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="1734877398" characterName="Pantuf" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="4.9" damageDone="1681" finalBlow="0" weaponTypeID="2456" shipTypeID="22444" />
          <row characterID="92941592" characterName="Foedus Latro" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-1.2" damageDone="1663" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="782985098" characterName="AwingendeR" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="1.9" damageDone="1501" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="93802816" characterName="Tycho Loor" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-1.9" damageDone="1405" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="91004291" characterName="Broxis Khoros" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-1.8" damageDone="1228" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="92007576" characterName="Dean Mintar" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="3.1" damageDone="1057" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="91702100" characterName="EMU EVIL" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-1.4" damageDone="792" finalBlow="0" weaponTypeID="2488" shipTypeID="11978" />
          <row characterID="95430803" characterName="Violet Dawn" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="1" damageDone="789" finalBlow="0" weaponTypeID="2488" shipTypeID="33157" />
          <row characterID="647412341" characterName="Lysus" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-2" damageDone="761" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="91986431" characterName="sHanQ Myteia" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-1" damageDone="497" finalBlow="0" weaponTypeID="2456" shipTypeID="11963" />
          <row characterID="90571681" characterName="Pyrric Skloric" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="0.1" damageDone="356" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="964223112" characterName="Tisisan" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="0.9" damageDone="313" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="1039287135" characterName="J3rz11" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="0.4" damageDone="265" finalBlow="0" weaponTypeID="2488" shipTypeID="22444" />
          <row characterID="91343130" characterName="Sophia Utama" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="0.6" damageDone="237" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="94149890" characterName="Minnie Sodom" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="2.6" damageDone="225" finalBlow="0" weaponTypeID="2488" shipTypeID="11978" />
          <row characterID="91875279" characterName="Derek Itinen" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="0.8" damageDone="210" finalBlow="0" weaponTypeID="2488" shipTypeID="11978" />
          <row characterID="1556079273" characterName="Alita Hayes" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-0.1" damageDone="186" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="2086742079" characterName="Turd Destroyer" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="3.3" damageDone="115" finalBlow="0" weaponTypeID="22444" shipTypeID="22444" />
          <row characterID="91044028" characterName="Viktoria Bernhardt" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="2.8" damageDone="89" finalBlow="0" weaponTypeID="28215" shipTypeID="11978" />
          <row characterID="941167595" characterName="Justin Cody" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="1.6" damageDone="0" finalBlow="0" weaponTypeID="15891" shipTypeID="11969" />
          <row characterID="686125406" characterName="NoobMan" corporationID="98040755" corporationName="Hard Knocks Inc." allianceID="99005065" allianceName="Hard Knocks Citizens" factionID="0" factionName="" securityStatus="-0.1" damageDone="0" finalBlow="0" weaponTypeID="2873" shipTypeID="11186" />
        </rowset>
        <rowset name="items" columns="typeID,flag,qtyDropped,qtyDestroyed,singleton">
          <row typeID="16455" flag="30" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="16455" flag="28" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="31366" flag="92" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="16487" flag="32" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="6005" flag="19" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="16487" flag="31" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="29011" flag="5" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="31366" flag="93" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="29009" flag="5" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="13970" flag="11" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="13982" flag="12" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="2048" flag="14" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="18712" flag="13" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="20353" flag="15" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="16455" flag="27" qtyDropped="1" qtyDestroyed="0" singleton="0" />
          <row typeID="16455" flag="29" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="2488" flag="87" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="41155" flag="20" qtyDropped="0" qtyDestroyed="1" singleton="0" />
          <row typeID="1952" flag="20" qtyDropped="1" qtyDestroyed="0" singleton="0" />
        </rowset>
      </row>
    </rowset>
  </result>
  <cachedUntil>2016-07-04 22:49:47</cachedUntil>
</eveapi>
```
### Result Data

<table border="1">
    <thead>
        <tr>
            <th>Tag</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>kills</td>
            <td></td>
            <td>rowset</td>
            <td>Rowset containing 1 row per kill or death.</td>
        </tr>
        <tr>
            <td></td>
            <td>killID</td>
            <td>long</td>
            <td>ID of the kill.</td>
        </tr>
        <tr>
            <td></td>
            <td>solarSystemID</td>
            <td>long <sup><a href="../../sde/sqlite/sqlite_mapSolarSystems.html#solarSystemID" title="mapSolarSystems.solarSystemID">[1]</a></td>
            <td>ID of the solarsystem containing the kill.</td>
        </tr>
        <tr>
            <td></td>
            <td>killTime</td>
            <td>datetime</td>
            <td>Time of the kill.</td>
        </tr>
        <tr>
            <td></td>
            <td>moonID</td>
            <td>int <sup><a href="../../sde/yaml/yaml_typeIDs.html" title="Inventory Types file">[2]</a></sup></td>
            <td>Moon by which the kill occurred at.</td>
        </tr>
        <tr>
            <td>victim</td>
            <td></td>
            <td>row</td>
            <td>Single row of the victim's information.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterID</td>
            <td>long</td>
            <td>ID of the victim.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterName</td>
            <td>string</td>
            <td>Name of the victim.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationID</td>
            <td>long</td>
            <td>ID of the victim's corporation.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationName</td>
            <td>string</td>
            <td>Name of the victim's corporation.</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceID</td>
            <td>long</td>
            <td>ID of the victim's alliance (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceName</td>
            <td>string</td>
            <td>Name of the victim's alliance (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>factionID</td>
            <td>long</td>
            <td>ID of the victim's faction (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>factionName</td>
            <td>string</td>
            <td>Name of the victim's faction (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>damageTaken</td>
            <td>long</td>
            <td>Total damage the victim took before being killed.</td>
        </tr>
        <tr>
            <td></td>
            <td>shipTypeID</td>
            <td>long</td>
            <td>ID of the victim's ship or the structure destroyed.</td>
        </tr>
        <tr>
            <td></td>
            <td>x</td>
            <td>double</td>
            <td>X location in space of the kill.</td>
        </tr>
        <tr>
            <td></td>
            <td>y</td>
            <td>double</td>
            <td>Y location in space of the kill.</td>
        </tr>
        <tr>
            <td></td>
            <td>z</td>
            <td>double</td>
            <td>Z location in space of the kill.</td>
        </tr>
        <tr>
            <td>attackers</td>
            <td></td>
            <td>rowset</td>
            <td>Rowset containing 1 row per attacker.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterID</td>
            <td>long</td>
            <td>ID of the attacker.</td>
        </tr>
        <tr>
            <td></td>
            <td>characterName</td>
            <td>string</td>
            <td>Name of the attacker.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationID</td>
            <td>long</td>
            <td>ID of the attacker's corporation.</td>
        </tr>
        <tr>
            <td></td>
            <td>corporationName</td>
            <td>string</td>
            <td>Name of the attacker's corporation.</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceID</td>
            <td>long</td>
            <td>ID of the attacker's alliance.</td>
        </tr>
        <tr>
            <td></td>
            <td>allianceName</td>
            <td>string</td>
            <td>Name of the attacker's alliance (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>factionID</td>
            <td>long</td>
            <td>ID of the attacker's faction (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>factionName</td>
            <td>string</td>
            <td>Name of the attacker's faction (if applicable).</td>
        </tr>
        <tr>
            <td></td>
            <td>securityStatus</td>
            <td>double</td>
            <td>This attacker's security status.</td>
        </tr>
        <tr>
            <td></td>
            <td>damageDone</td>
            <td>long</td>
            <td>Damage dealt by this attacker.</td>
        </tr>
        <tr>
            <td></td>
            <td>finalBlow</td>
            <td>int</td>
            <td>"1" if this attacker got the final blow, "0" if not.</td>
        </tr>
        <tr>
            <td></td>
            <td>weaponTypeID</td>
            <td>long</td>
            <td>ID of the type of weapon used by this attacher, or drone, or NPC weapon.</td>
        </tr>
        <tr>
            <td></td>
            <td>shipTypeID</td>
            <td>long</td>
            <td>ID of the type of ship used by this attacker.</td>
        </tr>
        <tr>
            <td>items</td>
            <td></td>
            <td>rowset</td>
            <td>Rowset containing 1 row per item on the victim's ship.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td>long</td>
            <td>ID of the item.</td>
        </tr>
        <tr>
            <td></td>
            <td>flag</td>
            <td>byte <sup><a href="../../sde/mssql/mssql_invFlags.html" title="Inventory Flags">[3]</a></sup></td>
            <td>The flag value of this item.</td>
        </tr>
        <tr>
            <td></td>
            <td>qtyDropped</td>
            <td>int</td>
            <td>Number of this item that was dropped.</td>
        </tr>
        <tr>
            <td></td>
            <td>qtyDestroyed</td>
            <td>int</td>
            <td>Number of this item that was destroyed.</td>
        </tr>
        <tr>
            <td></td>
            <td>singleton</td>
            <td>int</td>
            <td>"2" if the item is a blueprint copy, "0" if not.</td>
        </tr>
    </tbody>
</table>

### Notes

* The most recent 25 kills and deaths are shown unless the `beforeKillID` parameter is specified.
* The data shown in this log is data from the time of the kill, not current data - if a character changes their corporation following the kill, the data here will still reflect their status at the time of the kill.
* In the event of the destroyed ship/structure containing containers, the items rowset may contain nested rows.
* Requesting this page more frequently than once an hour will return an error code `119` stating *"Kill log exhausted (You can only fetch kills that are less than a month old): New kills will be accessible at: [time]. If you are not expecting this message it is possible that some other application is using this key!"*
    * Though the message suggests that using a different key bypasses this message, doing so does not.
* This page is a legacy page, as the KillMail XML endpoint is more up-to-date.

### References

* [Issues with KillLog.xml.aspx](https://forums.eveonline.com/default.aspx?g=posts&t=90555)
* [Killlog error 120](https://forums.eveonline.com/default.aspx?g=posts&t=71366)
* [Corp-Killmail-Import to Killboard via API - 100 Mails Limitation?](http://eve-search.com/thread/1187072-0)
* [EVE Third Party Docs - Call To Action](https://forums.eveonline.com/default.aspx?g=posts&m=6195654)
* [New Eden Dev - Char/KillLog](http://ned.karbowiak.dk/Char/KillLog)
* [CCP, zKillboard (Eve-Kill), and your API](https://docs.google.com/document/d/16YfJwjhuH5A3cS4NTMDFDkprnOVKsvgtuRIKk8xjTM8/edit)
