# Response Data Constants
Constant values are used in certain response data columns to represent enumerated types.  These constants are defined in the tables below.

## Order State

<table border="1">
    <tbody>
        <tr>
            <th>Value</th>
            <th>Meaning</th>
        </tr>
        <tr>
            <td align="right">0</td>
            <td>Open or Active</td>
        </tr>
        <tr>
            <td align="right">1</td>
            <td>Closed</td>
        </tr>
        <tr>
            <td align="right">2</td>
            <td>Expired or Fulfilled</td>
        </tr>
        <tr>
            <td align="right">3</td>
            <td>Cancelled</td>
        </tr>
        <tr>
            <td align="right">4</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td align="right">5</td>
            <td>Character Deleted</td>
        </tr>
    </tbody>
</table>

### Applies to
* [Char - MarketOrders](char_marketorders.md)
* [Corp - MarketOrders](corp_marketorders.md)

## Order Range

<table border="1">
    <tbody>
        <tr>
            <th>Value</th>
            <th>Meaning</th>
        </tr>
        <tr>
            <td align="right">32767</td>
            <td>Region (buy order).  Default value for all sell orders.</td>
        </tr>
        <tr>
            <td align="right">-1</td>
            <td>Station (buy order)</td>
        </tr>
        <tr>
            <td align="right">0</td>
            <td>Solar System (buy order)</td>
        </tr>
        <tr>
            <td align="right">5, 10, 20, or 40</td>
            <td>Jumps from station where order was placed (buy order)</td>
        </tr>
    </tbody>
</table>

### Applies to
* [Char - MarketOrders](char_marketorders.md)
* [Corp - MarketOrders](corp_marketorders.md)

## Raw Quantity

<table border="1">
    <tbody>
        <tr>
            <th>Value</th>
            <th>Meaning</th>
        </tr>
        <tr>
            <td align="right">-1</td>
            <td>Every item __except__ blueprints: Singleton _(=non-stackable)_</td>
        </tr>
        <tr>
            <td align="right">-1</td>
            <td>Blueprint _Original_</td>
        </tr>
        <tr>
            <td align="right">-2</td>
            <td>Blueprint _Copy_</td>
        </tr>
    </tbody>
</table>

### Applies to
* [Char - AssetList](char_assetlist.md)
* [Corp - AssetList](corp_assetlist.md)
* [Char - ContractItems](char_contractitems.md)
* [Corp - ContractItems](corp_contractitems.md)

## Inventory Flags

These are the flags used by the inventory system. This data is available in the EVE SDE invFlags table.
They define hangars or slots where an item may reside. It should be noted that ingame items may have multiple flags, but the API will only show a single flag.


### Applies to
* [Char - AssetList](char_assetlist.md)
* [Char - Blueprints](char_blueprints.md)
* [Corp - AssetList](corp_assetlist.md)
* [Char - Blueprints](corp_blueprints.md)

## Reference Type

<table border="1">
    <tbody>
        <tr>
            <th>refTypeID</th>
            <th>Name</th>
            <th>argName1</th>
            <th>argID1</th>
            <th>reason</th>
            <th>comment</th>
        </tr>
        <tr>
            <td align="right">1</td>
            <td>Player Trading</td>
            <td>Station name</td>
            <td>
                StationID
                <sup>
                <a href="../../sde/mssql_staStations/">[1]</a>
                </sup>
            </td>
            <td></td>
            <td>Location of direct player trade.  See <a href="../../sde/mssql_staStations/">Stations Table</a>.</td>
        </tr>
        <tr>
            <td align="right">2</td>
            <td>Market Transaction</td>
            <td>
                transactionID
                <sup>
                <a href="../char_wallettransactions/">[1]</a>
                <a href="../corp_wallettransactions/">[2]</a>
                </sup>
            </td>
            <td>0</td>
            <td></td>
            <td>See <a href="../char_wallettransactions/">Char - WalletTransactions</a> or <a href="../corp_wallettransactions/">Corp - WalletTransactions</a>.</td>
        </tr>
        <tr>
            <td align="right">10</td>
            <td>Player Donation</td>
            <td></td>
            <td>0</td>
            <td>"DESC:" + player entered text</td>
            <td>Player donation with text entered by the donator appearing in the "reason" field.</td>
        </tr>
        <tr>
            <td align="right">17</td>
            <td>Bounty Prize (historical)</td>
            <td>NPC Name</td>
            <td>NPC ID</td>
            <td></td>
            <td>Relaced with refTypeID 85 in Trinity release.</td>
        </tr>
        <tr>
            <td align="right">19</td>
            <td>Insurance</td>
            <td>
                Destroyed Ship Type ID
                <sup>
                <a href="../../sde/yaml_typeIDs/">[1]</a>
                </sup>
            </td>
            <td>0</td>
            <td></td>
            <td>See <a href="../../sde/yaml_typeIDs/">Inventory Types file</a>.</td>
        </tr>
        <tr>
            <td align="right">35</td>
            <td>CONCORD Spam Prevention Act (CSPA)</td>
            <td>Player name</td>
            <td>Player character ID</td>
            <td></td>
            <td>Player name refers to the player you're trying to contact.</td>
        </tr>
        <tr>
            <td align="right">37</td>
            <td>Corp Account Withdrawal</td>
            <td>Player name that performed withdrawal</td>
            <td>Player character ID that performed withdrawal</td>
            <td>Player entered text</td>
            <td>Corp account withdrawal with text entered by the withdrawing player appearing in the "reason" field.</td>
        </tr>
        <tr>
            <td align="right">46</td>
            <td>Broker Fee</td>
            <td>EVE System</td>
            <td>1</td>
            <td></td>
            <td>Tags the market order commission fee for a market transaction.  The ownerName2 field indicates to whom the fee was paid.</td>
        </tr>
        <tr>
            <td align="right">56</td>
            <td>Manufacturing</td>
            <td>
                Job ID
                <sup>
                <a href="../char_industryjobs/">[1]</a>
                <a href="../corp_industryjobs/">[2]</a>
                </sup>
            </td>
            <td>0</td>
            <td></td>
            <td>Fee for industry manufacturing job.  See <a href="../char_industryjobs/">Char - IndustryJobs</a> or <a href="../corp_industryjobs/">Corp - IndustryJobs</a>.</td>
        </tr>
        <tr>
            <td align="right">63, 64, 71, 72, 73, 74, 79, 80, 81, 82</td>
            <td>Various contract types</td>
            <td>Contract ID?</td>
            <td>0</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td align="right">85</td>
            <td>Bounty Prizes</td>
            <td></td>
            <td>
                solarSystemID
                <sup>
                <a href="../sqlite_mapSolarSystems/" title="mapSolarSystems.solarSystemID">[1]</a>
                </sup>
            </td>
            <td>NPC ID:quantity killed[,id:qty[,...]]</td>
            <td>Arg1ID provides the solar system ID where the bounty was acquired.  For each type of NPC killed, its typeID is followed by a colon and the quantity killed. These pairs are seperated by commas, and if there are too many (more than about 60 characters' worth) the list is ended with a literal ",..." to indicate that more have been left off the list.</td>
        </tr>
        <tr>
            <td align="right">97</td>
            <td>Customs Office Export Duty</td>
            <td>Planet name</td>
            <td>
                Planet ID
                <sup>
                <a href="../sqlite_mapDenormalize/" title="mapDenormalize.itemID">[1]</a>
                </sup>
            </td>
            <td>"Export Duty for " + planet name</td>
            <td>Customs office export duty for the named planet.  The duty was paid to the entity with ownerID2.</td>
        </tr>
    </tbody>
</table>

### Applies to
* [Char - WalletJournal](char_walletjournal.md)
* [Corp - WalletJournal](corp_walletjournal.md)
