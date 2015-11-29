## CharacterInfo

* __Path:__ ``/eve/CharacterInfo.xml.aspx ``
* __Access mask:__ 0 or 8388608 or 16777216
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
                <td>API key ID <em>(Optional)</em></td>
            </tr>
            <tr>
                <td>vCode</td>
                <td><strong>char(64)</strong></td>
                <td>API verification code <em>(Optional)</em></td>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>String</strong></td>
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response (access mask 0)

```xml
<eveapi version="2">
  <currentTime>2015-11-29 01:26:54</currentTime>
  <result>
    <characterID>2019641225</characterID>
    <characterName>Consumata</characterName>
    <race>Caldari</race>
    <bloodlineID>2</bloodlineID>
    <bloodline>Civire</bloodline>
    <ancestryID>8</ancestryID>
    <ancestry>Mercs</ancestry>
    <corporationID>671798908</corporationID>
    <corporation>Strange Energy</corporation>
    <corporationDate>2014-12-22 14:36:00</corporationDate>
    <allianceID>99004425</allianceID>
    <alliance>The Bastion</alliance>
    <allianceDate>2014-05-23 02:07:00</allianceDate>
    <securityStatus>1.80713623452395</securityStatus>
    <rowset name="employmentHistory" key="recordID" columns="recordID,corporationID,corporationName,startDate">
      <row recordID="36393053" corporationID="671798908" corporationName="Strange Energy" startDate="2014-12-22 14:36:00" />
      <row recordID="10452736" corporationID="1000167" corporationName="State War Academy" startDate="2008-12-20 13:22:00" />
    </rowset>
  </result>
  <cachedUntil>2015-11-29 01:40:22</cachedUntil>
</eveapi>
```

### Sample Response (access mask 8388608)

```xml
<eveapi version="2">
  <currentTime>2015-11-29 01:26:54</currentTime>
  <result>
    <characterID>2019641225</characterID>
    <characterName>Consumata</characterName>
    <race>Caldari</race>
    <bloodlineID>2</bloodlineID>
    <bloodline>Civire</bloodline>
    <ancestryID>8</ancestryID>
    <ancestry>Mercs</ancestry>
    <skillPoints>13013</skillPoints>
    <nextTrainingEnds>2015-07-22 05:33:56</nextTrainingEnds>
    <shipName>Batu</shipName>
    <shipTypeID>601</shipTypeID>
    <shipTypeName>Ibis</shipTypeName>
    <corporationID>671798908</corporationID>
    <corporation>Strange Energy</corporation>
    <corporationDate>2014-12-22 14:36:00</corporationDate>
    <allianceID>99004425</allianceID>
    <alliance>The Bastion</alliance>
    <allianceDate>2014-05-23 02:07:00</allianceDate>
    <securityStatus>1.80713623452395</securityStatus>
    <rowset name="employmentHistory" key="recordID" columns="recordID,corporationID,corporationName,startDate">
      <row recordID="36393053" corporationID="671798908" corporationName="Strange Energy" startDate="2014-12-22 14:36:00" />
      <row recordID="10452736" corporationID="1000167" corporationName="State War Academy" startDate="2008-12-20 13:22:00" />
    </rowset>
  </result>
  <cachedUntil>2015-11-29 01:40:22</cachedUntil>
</eveapi>
```

### Sample Response (access mask 16777216)

```xml
<eveapi version="2">
  <currentTime>2015-11-29 01:26:54</currentTime>
  <result>
    <characterID>2019641225</characterID>
    <characterName>Consumata</characterName>
    <race>Caldari</race>
    <bloodlineID>2</bloodlineID>
    <bloodline>Civire</bloodline>
    <ancestryID>8</ancestryID>
    <ancestry>Mercs</ancestry>
    <accountBalance>2488.81</accountBalance>
    <skillPoints>13013</skillPoints>
    <nextTrainingEnds>2015-07-22 05:33:56</nextTrainingEnds>
    <shipName>Batu</shipName>
    <shipTypeID>601</shipTypeID>
    <shipTypeName>Ibis</shipTypeName>
    <corporationID>671798908</corporationID>
    <corporation>Strange Energy</corporation>
    <corporationDate>2014-12-22 14:36:00</corporationDate>
    <allianceID>99004425</allianceID>
    <alliance>The Bastion</alliance>
    <allianceDate>2014-05-23 02:07:00</allianceDate>
    <lastKnownLocation>Obe</lastKnownLocation>
    <securityStatus>1.80713623452395</securityStatus>
    <rowset name="employmentHistory" key="recordID" columns="recordID,corporationID,corporationName,startDate">
      <row recordID="36393053" corporationID="671798908" corporationName="Strange Energy" startDate="2014-12-22 14:36:00" />
      <row recordID="10452736" corporationID="1000167" corporationName="State War Academy" startDate="2008-12-20 13:22:00" />
    </rowset>
  </result>
  <cachedUntil>2015-11-29 01:40:22</cachedUntil>
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
            <td>Character ID</td>
        </tr>
        <tr>
            <td>characterName</td>
            <td>string</td>
            <td>Character name</td>
        </tr>
        <tr>
            <td>race</td>
            <td>string</td>
            <td>Character's race</td>
        </tr>
        <tr>
            <td>bloodlineID</td>
            <td>long</td>
            <td>ID for character's bloodline</td>
        </tr>
        <tr>
            <td>bloodline</td>
            <td>string</td>
            <td>Character's bloodline</td>
        </tr>
        <tr>
            <td>ancestryID</td>
            <td>long</td>
            <td>ID for character's ancestry</td>
        </tr>
        <tr>
            <td>ancestry</td>
            <td>string</td>
            <td>Character's ancestry</td>
        </tr>
        <tr>
            <td>accountBalance</td>
            <td>decimal</td>
            <td>Amount of ISK the character has (only for access mask 16777216)</td>
        </tr>
        <tr>
            <td>skillPoints</td>
            <td>long</td>
            <td>Amount of skill points the character has (only for access masks 8388608 and 16777216)</td>
        </tr>
        <tr>
            <td>nextTrainingEnds</td>
            <td>datetime</td>
            <td>Time when the current skill finishes training (only for access masks 8388608 and 16777216)<br />
            <strong>Note:</strong> Author could not verify this.</td>
        </tr>
        <tr>
            <td>shipName</td>
            <td>string</td>
            <td>Name of the ship the character is in (only for access masks 8388608 and 16777216)</td>
        </tr>
        <tr>
            <td>shipTypeID</td>
            <td>long</td>
            <td>typeID of the ship the character is in (only for access masks 8388608 and 16777216)</td>
        </tr>
        <tr>
            <td>shipTypeName</td>
            <td>string</td>
            <td>typeName of the ship the character is in (only for access masks 8388608 and 16777216)</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>long</td>
            <td>ID of character's corporation</td>
        </tr>        
        <tr>
            <td>corporation</td>
            <td>string</td>
            <td>Character's corporation</td>
        </tr>
        <tr>
            <td>corporationDate</td>
            <td>datetime</td>
            <td>Time and date when the character joined the corporation</td>
        </tr>
        <tr>
            <td>allianceID</td>
            <td>long</td>
            <td>ID of character's alliance</td>
        </tr>
        <tr>
            <td>alliance</td>
            <td>string</td>
            <td>Character's alliance</td>
        </tr>
        <tr>
            <td>allianceDate</td>
            <td>datetime</td>
            <td>Time and date when the character became part of the alliance</td>
        </tr>
        <tr>
            <td>lastKnownLocation</td>
            <td>string</td>
            <td>Name of the character's current location (only for access mask 16777216)</td>
        </tr>
        <tr>
            <td>securityStatus</td>
            <td>decimal</td>
            <td>Character's security status</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>employmentHistory</strong></td>
        </tr>
        <tr>
            <td>recordID</td>
            <td>long</td>
            <td>Seems to be a unique number for that specific change in character/corporation affiliation.<br />
            <strong>Note:</strong> Author could not verify this.</td>
        </tr>
        <tr>
            <td>corporationID</td>
            <td>long</td>
            <td>ID of the corporation that the character joined</td>
        </tr>
        <tr>
            <td>corporationName</td>
            <td>string</td>
            <td>Name of the corporation</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>datetime</td>
            <td>Time and date when the character joined this specific corporation</td>
        </tr>
    </tbody>
</table>

### Notes

* Provide keyID and vCode to get access to the private data sets for the characterID.
* If the keyID and vCode does not give access to either of the two private data sets the public data set is returned instead.
* In addition to the public data set, access mask 8388608 gives information about skill points, skill training ending, and what ship type the character is sitting in.
* In addition to the first private data set, access mask 16777216 gives information about wallet status and last known location.

### References

* [Devblog](https://community.eveonline.com/news/dev-blogs/the-api-dev-blog-trilogy-volume-three-he-who-controls-the-data-tyrannis-1.2/) from 2010 about the introduction of this XML API endpoint in Tyrannis 1.2.
* [Thread](https://forums.eveonline.com/default.aspx?g=posts&m=5910312) in EVE-O Tech Lab subforum about confusing use of bloodline/bloodLine between /EVE/CharacterInfo and /Char/CharacterSheet.
