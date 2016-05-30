# RefTypes
Returns a list of transaction types used in the [Corporation - WalletJournal](../corporation/corp_walletjournal.md) & [Character - WalletJournal](../character/char_walletjournal.md).

* __Path:__ ``/eve/RefTypes.xml.aspx``
* __Cache timer:__ 24 hour
* __Access mask:__ none
* __Parameters:__ none

### Sample Response

```xml
<result>
    <rowset name="refTypes" key="refTypeID" columns="refTypeID,refTypeName">
        <row refTypeID="0" refTypeName="Undefined"/>
        <row refTypeID="1" refTypeName="Player Trading"/>
        <row refTypeID="2" refTypeName="Market Transaction"/>
        <row refTypeID="3" refTypeName="GM Cash Transfer"/>
        <row refTypeID="4" refTypeName="ATM Withdraw"/>
        <row refTypeID="5" refTypeName="ATM Deposit"/>
        <row refTypeID="6" refTypeName="Backward Compatible"/>
        <row refTypeID="7" refTypeName="Mission Reward"/>
        <row refTypeID="8" refTypeName="Clone Activation"/>
        <row refTypeID="9" refTypeName="Inheritance"/>
        <row refTypeID="10" refTypeName="Player Donation"/>
        <row refTypeID="11" refTypeName="Corporation Payment"/>
        <row refTypeID="12" refTypeName="Docking Fee"/>
        <row refTypeID="13" refTypeName="Office Rental Fee"/>
        <row refTypeID="14" refTypeName="Factory Slot Rental Fee"/>
        <row refTypeID="15" refTypeName="Repair Bill"/>
        <row refTypeID="16" refTypeName="Bounty"/>
        <row refTypeID="17" refTypeName="Bounty Prize"/>
        <row refTypeID="18" refTypeName="Agents_temporary"/>
        <row refTypeID="19" refTypeName="Insurance"/>
    </rowset>
</result>
```

### Result Data

<table border="1">
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>refTypeID</td>
            <td>int</td>
            <td>Reference ID for the transactions from the either the Corporation or Character wallet journal</td>
        </tr>
        <tr>
            <td>refTypeName</td>
            <td>string</td>
            <td>What kind of transaction it is.</td>
        </tr>
    </tbody>
</table>
