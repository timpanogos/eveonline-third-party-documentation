# account
## AccountStatus
accessMask = 33554432

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
* __Paramaters:__
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

Eample response: (this is test data, need to have a think about inlcuding cachedUntil for example data)
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
* __Paramaters:__
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
### Paramaters
contractID:int

## Contracts
accessMask = 67108864
### Paramaters
contractID:int

## FacWarStats
accessMask = 64

## IndustryJobs
accessMask = 128

## IndustryJobsHistory
accessMask = 128

## KillLog
accessMask = 256
### Paramaters
beforeKillID:int

## KillMails
accessMask = 256
### Paramaters
fromID:int, beforeKillID:int, rowCount:int

## Locations
accessMask = 134217728
### Paramaters
ids:"," serperated list

## MailBodies
accessMask = 512
### Paramaters
ids:"," serperated list

## MailingLists
accessMask = 1024

## MailMesages
accessMask = 2048
### Paramaters
fromID:int
rowCount:int

## MarketOrders

* __Path:__ ``/char/MarketOrders.xml.aspx``
* __Access mask:__ 4096
* __Parameters:__
    * __orderID:__ Optional order ID of order to retrieve.  If omitted, retrieves an order batch (see notes).
* __Cache timer:__ 1 hour

### Result Data

|        |              |              |                                                                                                                                    |
|--------|--------------|--------------|------------------------------------------------------------------------------------------------------------------------------------|
| orders | __rowset__   |              | Rowset containing 1 row per market order.                                                                                          |
|        | orderID      | __long__     | Unique order ID.                                                                                                                   |
|        | charID       | __long__     | Character ID of the character which placed this order.                                                                             |
|        | stationID    | __int__      | Station ID where order was placed.                                                                                                 |
|        | volEntered   | __int__      | Quantity of items required or offered at time order was placed.                                                                    |
|        | volRemaining | __int__      | Quantity of items still required or offered.                                                                                       |
|        | minVolume    | __int__      | For bids (buy orders), the minimum quantity that will be accepted in a matching offer (sell order).                                |
|        | orderState   | __int__      | Current order state (see notes and table below).                                                                                   |
|        | typeID       | __int__      | The type ID of the item transacted in this order.                                                                                  |
|        | range        | __int__      | Valid order range (see table below).                                                                                               |
|        | accountKey   | __int__      | Wallet division for the buyer or seller of this order.  Always 1000 for characters.  Currently 1000 through 1006 for corporations. |
|        | duration     | __int__      | Numer of days for which order is valid (starting from the issued date).  An order expires at time issued + duration.               |
|        | escrow       | __decimal__  | For buy orders, the amount of ISK in escrow.                                                                                       |
|        | price        | __decimal__  | Cost per unit for this order.                                                                                                      |
|        | bid          | __bool__     | True (1) for a bid (buy) order.  False (0) for an offer (sell) order.                                                              |
|        | issued       | __datetime__ | Date and time when this order was issued.                                                                                          |

### Value Definitions

| Column     | Value | Meaning                                                          |
|:-----------|:-----:|:-----------------------------------------------------------------|
| orderState | 0     | Open or Active                                                   |
|            | 1     | Closed order                                                     |
|            | 2     | Expired or Fulfilled                                             |
|            | 3     | Cancelled                                                        |
|            | 4     | Pending                                                          |
|            | 5     | Character Deleted                                                |
|            |       |                                                                  |
| range      | 32767 | Region (buy order).  Default value for all sell orders           |
|            | -1    | Station (buy order)                                              |
|            | 0     | Solar System (buy order)                                         |
|            | 5, 10, 20, or 40 | Jumps from station where order was placed (buy order) |


### SDE Cross References

| Column    | SDE Table Cross Reference(s)                                                                                                                |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| stationID | invNames.itemID, invItems.itemID, invPositions.itemID, invUniqueNames.itemID                                                                |
| typeID    | invItems.typeID, invMetaTypes.typeID, invTraits.typeID, invTypeMaterials.typeID, invTypeReactions.typeID, invTypes.typeID, invVolumes.typeID|

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

### Notes

* If order ID is omitted, this call will return an order "batch" for the current month, which consists of:
    * All open "limit" orders (the first two rows in the example above).  These are orders which were placed with a particular price target and were not fulfilled immediately.
    * All completed "market" orders (the last two rows in the example above).  These are orders which were matched immediately when they were placed.
* An open "limit" order which is later fulfilled or otherwise closed will no longer be provided in the order batch.  To discover the state of such an order, you will need to pass the order ID explicitly.

## Medals
accessMask = 8192

## Norifications
accessMask = 16384

## NotificationTexts
accessMask = 32768
### Paramaters
ids:"," serperated list

## PlanetaryColonies
accessMask = 2

## PlanetaryLinks
accessMask = 2
### Paramaters
planetID:int

## PlanetaryPins
accessMask = 2
### Paramaters
planetID:int

## PlanetaryRoutes
accessMask = 2
### Paramaters
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
### Paramaters
fromID
beforeRefID
rowCount

## WalletTransactions
accessMask = 4194304
### Paramaters
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