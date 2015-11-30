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
                <td>ID of character. Optional only if the key is character specific, otherwise mandatory.</td>
            </tr>
            <tr>
                <td>orderID</td>
                <td><strong>long</strong></td>
                <td>Optional order ID of order to retrieve.  If omitted, retrieves an order batch (see notes).</td>
            </tr>
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
            <td>Rowset containing 1 row per market order.</td>
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
                <a href="../../sde/tableref/#inventory-names">[1]</a>,
                <a href="../../sde/tableref/#inventory-items">[2]</a>,
                <a href="../../sde/tableref/#inventory-positions">[3]</a>,
                <a href="../../sde/tableref/#inventory-unique-names">[4]</a>
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
                <a href="../../xmlapi/enumerations/#order-state">[1]</a>
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
                <a href="../../sde/tableref/#inventory-items">[1]</a>,
                <a href="../../sde/tableref/#inventory-meta-types">[2]</a>,
                <a href="../../sde/tableref/#inventory-traits">[3]</a>,
                <a href="../../sde/tableref/#inventory-type-materials">[4]</a>,
                <a href="../../sde/tableref/#inventory-type-reactions">[5]</a>,
                <a href="../../sde/tableref/#inventory-types">[6]</a>,
                <a href="../../sde/tableref/#inventory-volumes">[7]</a>
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
                <a href="../../xmlapi/enumerations/#order-range">[1]</a>
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


