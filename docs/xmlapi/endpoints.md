# account
## AccountStatus

* __Path:__ ``/account/AccountStatus.xml.aspx``
* __Access mask:__ 33554432
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
            <tr>
            <tr>
                <td>vCode</td>
                <td><strong>char</strong></td>
                <td>API verification code</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2015-05-01 10:18:49</currentTime>
    <result>
        <paidUntil>2015-06-27 10:20:57</paidUntil>
        <createDate>2007-05-04 17:47:00</createDate>
        <logonCount>3177</logonCount>
        <logonMinutes>235243</logonMinutes>
        <rowset name="multiCharacterTraining" key="trainingEnd" columns="trainingEnd" />
    </result>
    <cachedUntil>2015-05-01 11:15:03</cachedUntil>
</eveapi>
```

### Result Data _(variant 1)_

<table>
    <tbody>
        <tr>
            <td></td>
            <td>paidUntil</td>
            <td><strong>datetime</strong></td>
            <td>The date until which the account is currently subscribed.</td>
        </tr>
        <tr>
            <td></td>
            <td>createDate</td>
            <td><strong>datetime</strong></td>
            <td>The date the account was created.</td>
        </tr>
        <tr>
            <td></td>
            <td>logonCount</td>
            <td><strong>int</strong></td>
            <td>The number of times you logged into CCP's services.</td>
        </tr>
        <tr>
            <td></td>
            <td>logonMinutes</td>
            <td><strong>int</strong></td>
            <td>The amount of time you actually spent logged on in the game.</td>
        </tr>
        <tr>
            <td>multiCharacterTraining</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per mark order.</td>
        </tr>
        <tr>
            <td></td>
            <td>trainingEnd</td>
            <td><strong>datetime</strong></td>
            <td>n/a</td>
        </tr>
    </tbody>
</table>

### Result Data _(variant 2)_

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>paidUntil</td>
            <td>datetime</td>
            <td>The date until which the account is currently subscribed</td>
        </tr>
        <tr>
            <td>createDate</td>
            <td>datetime</td>
            <td>The date the account was created</td>
        </tr>
        <tr>
            <td>logonCount</td>
            <td>int</td>
            <td>The number of times you logged into CCP's services</td>
        </tr>
        <tr>
            <td>logonMinutes</td>
            <td>int</td>
            <td>The amount of time you actually spent logged on in the game</td>
        </tr>
    </tbody>
</table>


### Notes

* logonCount includes not only the game logons but also forum logons, likely also EVEGate logons.

### References

[The API Dev Blog Trilogy - Volume Three -- He who controls the data (Tyrannis 1.2)](http://community.eveonline.com/news/dev-blogs/the-api-dev-blog-trilogy-volume-three-he-who-controls-the-data-tyrannis-1.2/)

## APIKeyInfo

## Characters

# api
## CallList

# char
******

## AccountBalance
``/char/AccountBalance.xml.aspx``  

* __Access mask:__ 1

## AssetList
``/char/AssetList.xml.aspx``

* __Access mask:__ 2
* __Parameters:__
    * __flat:__ bool (0/1)

## Blueprints
``/char/Blueprints.xml.aspx``

* __Access mask:__ 2

Data:
<table border="1">
    <tbody>
        <tr>
            <td>blueprints</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per blueprint.</td>
        </tr>
        <tr>
            <td></td>
            <td>itemID</td>
            <td><strong>long</strong></td>
            <td>The actual item ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>locationID</td>
            <td><strong>long</strong></td>
            <td>The location ID of where  the blueprint is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td><strong>int</strong></td>
            <td>Type ID of the blueprint.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeName</td>
            <td><strong>int</strong></td>
            <td>English name for the type of blueprint.</td>
        </tr>
        <tr>
            <td></td>
            <td>flagID</td>
            <td><strong>int</strong></td>
            <td>Flag for where the item is located.</td>
        </tr>
        <tr>
            <td></td>
            <td>quantity</td>
            <td><strong>int</strong></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>timeEfficiency</td>
            <td><strong>int</strong></td>
            <td>The TE level of the blueprint.</td>
        </tr>
        <tr>
            <td></td>
            <td>materialEfficiency</td>
            <td><strong>int</strong></td>
            <td>The ME level of the blueprint.</td>
        </tr>
        <tr>
            <td></td>
            <td>runs</td>
            <td><strong>int</strong></td>
            <td>The number of remaining runs for the blueprint. -1 for BPO.</td>
        </tr>
    </tbody>
</table>

|            |                    |          |                                                             |
|------------|--------------------|----------|-------------------------------------------------------------|
| blueprints | __rowset__         |          | Rowset containing 1 row per blueprint.                      |
|            | itemID             | __long__ | The actual item ID.                                         |
|            | locationID         | __long__ | The location ID of where  the blueprint is located.         |
|            | typeID             | __int__  | Type ID of the blueprint.                                   |
|            | typeName           | __int__  | English name for the type of blueprint.                     |
|            | flagID             | __int__  | Flag for where the item is located.                         |
|            | quantity           | __int__  |                                                             |
|            | timeEfficiency     | __int__  | The TE level of the blueprint.                              |
|            | materialEfficiency | __int__  | The ME level of the blueprint.                              |
|            | runs               | __int__  | The number of remaining runs for the blueprint. -1 for BPO. |

Example response: (this is test data, need to have a think about inlcuding cachedUntil for example data)
```xml
<result>
    <rowset name="blueprints" key="itemID" columns="itemID,locationID,typeID,typeName,flagID,quantity,timeEfficiency,materialEfficiency,runs">
        <row itemID="1000000029372" locationID="60014929" typeID="11568" typeName="Avatar Blueprint" flagID="4" quantity="497" timeEfficiency="0" materialEfficiency="0" runs="-1"/>
        <row itemID="1000000029377" locationID="60014929" typeID="33876" typeName="Prophecy Blood Raiders Edition Blueprint" flagID="4" quantity="-2" timeEfficiency="0" materialEfficiency="0" runs="20000"/>
    </rowset>
</result>
```

## CalendarEventAttendees
``/char/CalendarEventAttendees.xml.aspx``

* __Access mask:__ 4
* __Parameters:__
    * __eventIDs:__ comma seperated list of event IDs
    * __ids:__ comma seperated list of event IDs

## CharacterSheet
``/char/CharacterSheet.xml.aspx``

* __Access mask:__ 8

## ContactList
``/char/ContactList.xml.aspx``

* __Access mask:__ 16

## ContactNotifications
``/char/ContactNotifications.xml.aspx``

* __Access mask:__ 32

## ContractBids
accessMask = 67108864

## ContractItems
accessMask = 67108864
### Parameters
contractID:int

## Contracts
accessMask = 67108864
### Parameters
contractID:int

## FacWarStats
accessMask = 64

## IndustryJobs
accessMask = 128

## IndustryJobsHistory
accessMask = 128

## KillLog
accessMask = 256
### Parameters
beforeKillID:int

## KillMails
accessMask = 256
### Parameters
fromID:int, beforeKillID:int, rowCount:int

## Locations
accessMask = 134217728
### Parameters
ids:"," separated list

## MailBodies
accessMask = 512
### Parameters
ids:"," separated list

## MailingLists
accessMask = 1024

## MailMesages
accessMask = 2048
### Parameters
fromID:int
rowCount:int

## MarketOrders

* __Path:__ ``/char/MarketOrders.xml.aspx``
* __Access mask:__ 4096
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
                <td>orderID</td>
                <td><strong>long</strong></td>
                <td>Optional order ID of order to retrieve.  If omitted, retrieves an order batch (see notes).</td>
            <tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="orders" key="orderID" columns="orderID,charID,stationID,volEntered,volRemaining,minVolume,orderState,typeID,range,accountKey,duration,escrow,price,bid,issued">
        <row orderID="4053334100" charID="1801683792" stationID="60005686" volEntered="340000" volRemaining="245705" minVolume="1" orderState="0" typeID="24488" range="32767" accountKey="1000" duration="90" escrow="0.00" price="92.00" bid="0" issued="2015-05-19 03:16:16"/>
        <row orderID="4097983513" charID="1801683792" stationID="60005686" volEntered="390" volRemaining="336" minVolume="1" orderState="0" typeID="3568" range="32767" accountKey="1000" duration="14" escrow="0.00" price="480000.00" bid="0" issued="2015-05-20 03:40:06"/>
        <row orderID="4111136138" charID="1801683792" stationID="60005701" volEntered="27" volRemaining="0" minVolume="1" orderState="2" typeID="20417" range="-1" accountKey="1000" duration="0" escrow="0.00" price="122000.00" bid="1" issued="2015-05-16 04:16:28"/>
        <row orderID="4111136288" charID="1801683792" stationID="60007294" volEntered="79" volRemaining="0" minVolume="1" orderState="2" typeID="20417" range="-1" accountKey="1000" duration="0" escrow="0.00" price="130000.00" bid="1" issued="2015-05-16 04:16:37"/>
    </rowset>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>orders</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per mark order.</td>
        </tr>
        <tr>
            <td></td>
            <td>orderID</td>
            <td><strong>long</strong></td>
            <td>Unique order ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>charID</td>
            <td><strong>long</strong></td>
            <td>Character ID of the character which placed this order.</td>
        </tr>
        <tr>
            <td></td>
            <td>stationID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="/sde/tableref/#inventory-names">[1]</a>,
                <a href="/sde/tableref/#inventory-items">[2]</a>,
                <a href="/sde/tableref/#inventory-positions">[3]</a>,
                <a href="/sde/tableref/#inventory-unique-names">[4]</a>
                </sup>
            </td>
            <td>Station ID where order was placed.</td>
        </tr>
        <tr>
            <td></td>
            <td>volEntered</td>
            <td><strong>int</strong></td>
            <td>Quantity of items required or offered at time order was placed.</td>
        </tr>
        <tr>
            <td></td>
            <td>volRemaining</td>
            <td><strong>int</strong></td>
            <td>Quantity of items still required or offered.</td>
        </tr>
        <tr>
            <td></td>
            <td>minVolume</td>
            <td><strong>int</strong></td>
            <td>For bids (buy orders), the minimum quantity that will be accepted in a matching offer (sell order).</td>
        </tr>
        <tr>
            <td></td>
            <td>orderState</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="/xmlapi/enumerations/#order-state">[1]</a>
                </sup>
            </td>
            <td>Current order state.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="/sde/tableref/#inventory-items">[1]</a>,
                <a href="/sde/tableref/#inventory-meta-types">[2]</a>,
                <a href="/sde/tableref/#inventory-traits">[3]</a>,
                <a href="/sde/tableref/#inventory-type-materials">[4]</a>,
                <a href="/sde/tableref/#inventory-type-reactions">[5]</a>,
                <a href="/sde/tableref/#inventory-types">[6]</a>,
                <a href="/sde/tableref/#inventory-volumes">[7]</a>
                </sup>
            </td>
            <td>The type ID of the item transacted in this order.</td>
        </tr>
        <tr>
            <td></td>
            <td>range</td>
            <td nowrap>
                <strong>int</strong>
                <sup>
                <a href="/xmlapi/enumerations/#order-range">[1]</a>
                </sup>
            </td>
            <td>Valid order range.</td>
        </tr>
        <tr>
            <td></td>
            <td>accountKey</td>
            <td><strong>int</strong></td>
            <td>Wallet division for the buyer or seller of this order.  Always 1000 for characters.  Currently 1000 through 1006 for corporations.</td>
        </tr>
        <tr>
            <td></td>
            <td>duration</td>
            <td><strong>int</strong></td>
            <td>Numer of days for which order is valid (starting from the issued date).  An order expires at time issued + duration.</td>
        </tr>
        <tr>
            <td></td>
            <td>escrow</td>
            <td><strong>decimal</strong></td>
            <td>For buy orders, the amount of ISK in escrow.</td>
        </tr>
        <tr>
            <td></td>
            <td>price</td>
            <td><strong>decimal</strong></td>
            <td>Cost per unit for this order.</td>
        </tr>
        <tr>
            <td></td>
            <td>bid</td>
            <td><strong>bool</strong></td>
            <td>True (1) for a bid (buy) order.  False (0) for an offer (sell) order.</td>
        </tr>
        <tr>
            <td></td>
            <td>issued</td>
            <td><strong>datetime</strong></td>
            <td>Date and time when this order was issued.</td>
        </tr>
    </tbody>
</table>

### Notes

* If order ID is omitted, this call will return an order "batch" for the current month, which consists of:
    * All open "limit" orders (the first two rows in the example above).  These are orders which were placed with a particular price target and were not fulfilled immediately.
    * All completed "market" orders (the last two rows in the example above).  These are orders which were matched immediately when they were placed.
* An open "limit" order which is later fulfilled or otherwise closed will no longer be provided in the order batch.  To discover the state of such an order, you will need to pass the order ID explicitly.

## Medals
accessMask = 8192

## Notifications
accessMask = 16384

## NotificationTexts
accessMask = 32768
### Parameters
ids:"," separated list

## PlanetaryColonies
accessMask = 2

## PlanetaryLinks
accessMask = 2
### Parameters
planetID:int

## PlanetaryPins
accessMask = 2
### Parameters
planetID:int

## PlanetaryRoutes
accessMask = 2
### Parameters
planetID:int

## Research
accessMask = 65536

## SkillInTraining
accessMask = 131072

## SkillQueue
accessMask = 262144

## Standings
accessMask = 524288

## UpcomingCalendarEvents
accessMask = 1048576

## WalletJournal
accessMask = 2097152
### Parameters
fromID
beforeRefID
rowCount

## WalletTransactions
accessMask = 4194304
### Parameters
beforeTransID
fromID
rowCount

# corp
## AccountBalance

## AssetList

## Blueprints

## ContactList

## ContainerLog

## ContractBids

## ContractItems

## Contracts

## CorporationSheet

## CustomsOffices

## Facilities

## FacWarStats

## IndustryJobs

## IndustryJobsHistory

## KillLog

## KillMails

## Locations

## MarketOrders

## Medals

## MemberMedals

## MemberSecurity

## MemberSecurityLog

## MemberTracking

## OutpostList

## OutpostServiceDetail

## Shareholders

## Standings

## StarbaseDetail

## StarbaseList

## Titles

## WalletJournal

## WalletTransactions

# eve
## AllianceList

## CertificateTree

## CharacterAffiliation

## CharacterID

## CharacterInfo

## CharacterName

## ConquerableStationList

## ErrorList

## FacWarStats

## FacWarTopStats

## OwnerID

## RefTypes

## SkillTree

## TypeName

# map
## FacWarSystems

## Jumps

## Kills

## Sovereignty

# server
## ServerStatus