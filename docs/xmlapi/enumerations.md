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
