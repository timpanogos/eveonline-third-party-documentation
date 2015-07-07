## CallList

* __Path:__ ``/api/CallList.xml.aspx``  
* __Access mask:__ -  
* __Cache timer:__ 6 hours  
* __Parameters:__ -  

### Sample Response

```xml
<eveapi version="2">
  <currentTime>2015-05-01 15:24:29</currentTime>
  <result>
    <rowset name="callGroups" key="groupID" columns="groupID,name,description">
      <row groupID="1" name="Account and Market" description="Market Orders, account balance and journal history." />
      <row groupID="7" name="Communications" description="Private communications such as contact lists, Eve Mail and Notifications." />
      <row groupID="5" name="Corporation Members" description="Member information for Corporations." />
      <row groupID="6" name="Outposts and Starbases" description="Outpost and Starbase information for Corporations" />
      <row groupID="3" name="Private Information" description="Personal information about the owner. Asset lists, skill training for characters, Private Calendar and more." />
      <row groupID="4" name="Public Information" description="Achievements such as Medals, Kill Mails, Fational Warfare Statistics and NPC Standings." />
      <row groupID="2" name="Science and Industry" description="Datacore production and job listing." />
    </rowset>
    <rowset name="calls" key="accessMask,type" columns="accessMask,type,name,groupID,description">
      <row accessMask="134217728" type="Character" name="Locations" groupID="3" description="Allows the fetching of coordinate and name data for items owned by the character." />
      <row accessMask="67108864" type="Character" name="Contracts" groupID="3" description="List of all Contracts the character is involved in." />
      <row accessMask="33554432" type="Character" name="AccountStatus" groupID="3" description="EVE player account status." />
      <row accessMask="16777216" type="Character" name="CharacterInfo" groupID="3" description="Sensitive Character Information, exposes account balance and last known location on top of the other Character Information call." />
      <row accessMask="8388608" type="Character" name="CharacterInfo" groupID="4" description="Character information, exposes skill points and current ship information on top of'Show Info'information." />
      <row accessMask="4194304" type="Character" name="WalletTransactions" groupID="1" description="Market transaction journal of character." />
      <row accessMask="2097152" type="Character" name="WalletJournal" groupID="1" description="Wallet journal of character." />
      <row accessMask="1048576" type="Character" name="UpcomingCalendarEvents" groupID="3" description="Upcoming events on characters calendar." />
      <row accessMask="524288" type="Character" name="Standings" groupID="4" description="NPC Standings towards the character." />
      <row accessMask="262144" type="Character" name="SkillQueue" groupID="3" description="Entire skill queue of character." />
      <row accessMask="131072" type="Character" name="SkillInTraining" groupID="3" description="Skill currently in training on the character. Subset of entire Skill Queue." />
      <row accessMask="65536" type="Character" name="Research" groupID="2" description="List of all Research agents working for the character and the progress of the research." />
      <row accessMask="32768" type="Character" name="NotificationTexts" groupID="7" description="Actual body of notifications sent to the character. Requires Notification access to function." />
      <row accessMask="16384" type="Character" name="Notifications" groupID="7" description="List of recent notifications sent to the character." />
      <row accessMask="8192" type="Character" name="Medals" groupID="4" description="Medals awarded to the character." />
      <row accessMask="4096" type="Character" name="MarketOrders" groupID="1" description="List of all Market Orders the character has made." />
      <row accessMask="2048" type="Character" name="MailMessages" groupID="7" description="List of all messages in the characters EVE Mail Inbox." />
      <row accessMask="1024" type="Character" name="MailingLists" groupID="7" description="List of all Mailing Lists the character subscribes to." />
      <row accessMask="512" type="Character" name="MailBodies" groupID="7" description="EVE Mail bodies. Requires MailMessages as well to function." />
      <row accessMask="256" type="Character" name="KillLog" groupID="4" description="Characters kill log." />
      <row accessMask="128" type="Character" name="IndustryJobs" groupID="2" description="Character jobs, completed and active." />
      <row accessMask="64" type="Character" name="FacWarStats" groupID="4" description="Characters Factional Warfare Statistics." />
      <row accessMask="32" type="Character" name="ContactNotifications" groupID="7" description="Most recent contact notifications for the character." />
      <row accessMask="16" type="Character" name="ContactList" groupID="7" description="List of character contacts and relationship levels." />
      <row accessMask="8" type="Character" name="CharacterSheet" groupID="3" description="Character Sheet information. Contains basic'Show Info'information along with clones, account balance, implants, attributes, skills, certificates and corporation roles." />
      <row accessMask="4" type="Character" name="CalendarEventAttendees" groupID="3" description="Event attendee responses. Requires UpcomingCalendarEvents to function." />
      <row accessMask="2" type="Character" name="AssetList" groupID="3" description="Entire asset list of character." />
      <row accessMask="1" type="Character" name="AccountBalance" groupID="1" description="Current balance of characters wallet." />
      <row accessMask="33554432" type="Corporation" name="MemberTrackingExtended" groupID="5" description="Extensive Member information. Time of last logoff, last known location and ship." />
      <row accessMask="16777216" type="Corporation" name="Locations" groupID="3" description="Allows the fetching of coordinate and name data for items owned by the corporation." />
      <row accessMask="8388608" type="Corporation" name="Contracts" groupID="3" description="List of recent Contracts the corporation is involved in." />
      <row accessMask="4194304" type="Corporation" name="Titles" groupID="5" description="Titles of corporation and the roles they grant." />
      <row accessMask="2097152" type="Corporation" name="WalletTransactions" groupID="1" description="Market transactions of all corporate accounts." />
      <row accessMask="1048576" type="Corporation" name="WalletJournal" groupID="1" description="Wallet journal for all corporate accounts." />
      <row accessMask="524288" type="Corporation" name="StarbaseList" groupID="6" description="List of all corporate starbases." />
      <row accessMask="262144" type="Corporation" name="Standings" groupID="4" description="NPC Standings towards corporation." />
      <row accessMask="131072" type="Corporation" name="StarbaseDetail" groupID="6" description="List of all settings of corporate starbases." />
      <row accessMask="65536" type="Corporation" name="Shareholders" groupID="1" description="Shareholders of the corporation." />
      <row accessMask="32768" type="Corporation" name="OutpostServiceDetail" groupID="6" description="List of all service settings of corporate outposts." />
      <row accessMask="16384" type="Corporation" name="OutpostList" groupID="6" description="List of all outposts controlled by the corporation." />
      <row accessMask="8192" type="Corporation" name="Medals" groupID="4" description="List of all medals created by the corporation." />
      <row accessMask="4096" type="Corporation" name="MarketOrders" groupID="1" description="List of all corporate market orders." />
      <row accessMask="2048" type="Corporation" name="MemberTrackingLimited" groupID="5" description="Limited Member information." />
      <row accessMask="1024" type="Corporation" name="MemberSecurityLog" groupID="5" description="Member role and title change log." />
      <row accessMask="512" type="Corporation" name="MemberSecurity" groupID="5" description="Member roles and titles." />
      <row accessMask="256" type="Corporation" name="KillLog" groupID="4" description="Corporation kill log." />
      <row accessMask="128" type="Corporation" name="IndustryJobs" groupID="2" description="Corporation jobs, completed and active." />
      <row accessMask="64" type="Corporation" name="FacWarStats" groupID="4" description="Corporations Factional Warfare Statistics." />
      <row accessMask="32" type="Corporation" name="ContainerLog" groupID="3" description="Corporate secure container acess log." />
      <row accessMask="16" type="Corporation" name="ContactList" groupID="7" description="Corporate contact list and relationships." />
      <row accessMask="8" type="Corporation" name="CorporationSheet" groupID="3" description="Exposes basic'Show Info'information as well as Member Limit and basic division and wallet info." />
      <row accessMask="4" type="Corporation" name="MemberMedals" groupID="5" description="List of medals awarded to corporation members." />
      <row accessMask="2" type="Corporation" name="AssetList" groupID="3" description="List of all corporation assets." />
      <row accessMask="1" type="Corporation" name="AccountBalance" groupID="1" description="Current balance of all corporation accounts." />
    </rowset>
  </result>
  <cachedUntil>2015-05-01 21:21:29</cachedUntil>
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
        </tr>
            <td colspan='3'><strong>callGroups rows</strong> - list of the predefined API access groups</td>
        <tr>
            <td>groupID</td>
            <td><strong>long</strong></td>
            <td>Group ID</td>
        </tr>
        <tr>
            <td>name</td>
            <td><strong>char</strong></td>
            <td>Names of the predefined API access groups as listed at the <a href="https://community.eveonline.com/support/api-key">API key management page</a></td>
        </tr>
        <tr>
            <td>description</td>
            <td><strong>char</strong></td>
            <td>Description of the included access rights</td>
        </tr>
        <tr>
           <td colspan='3'><strong>calls rows</strong> - list of every access right</td>
        </tr>
        <tr>
            <td>accessMask</td>
            <td><strong>long</strong></td>
            <td>Necessary access mask of an API key for accessing this API endpoint</td>
        </tr>
        <tr>
            <td>type</td>
            <td><strong>char</strong></td>
            <td>Type of API access (Character, Corporation etc.) this mask grants</td>
        </tr>
        <tr>
            <td>name</td>
            <td><strong>char</strong></td>
            <td>API endpoint name</td>
        </tr>
        <tr>
            <td>groupID</td>
            <td><strong>long</strong></td>
            <td>callGroup <em>(see above)</em> to which this endpoint belongs</td>
        </tr>
        <tr>
            <td>description</td>
            <td><strong>char</strong></td>
            <td>Describes which data can be access by this accessMask</td>
        </tr>
    </tbody>
</table>
