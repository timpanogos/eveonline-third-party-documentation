# WalletJournal
Retrieve corporation wallet journal.

* __Path:__ ``/corp/WalletJournal.xml.aspx``
* __Access mask:__ 1048576
* __Cache timer:__ 30 minutes
* __Parameters:__
    <table border="1">
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
                <td><strong>string</strong></td>
                <td>API verification code</td>
            </tr>
            <tr>
                <td>accountKey</td>
                <td><strong>int</strong></td>
                <td>
                Account key of the wallet for which journal entries will be returned.  Corporations have seven wallets numbered from 1000 through 1006.
                The <a href="corp_accountbalance.html">Corporation - AccountBalance</a> call can be used to map corporation wallet to appropriate accountKey.
                </td>
            </tr>
            <tr>
                <td>fromID</td>
                <td><strong>long</strong></td>
                <td>
                Optional upper bound for the ref ID of returned journal entries.  This argument is normally used to walk to the journal backwards.
                See <a href="../intro.html#journal-walking">Journal Walking</a> for more information.
                </td>
            </tr>
            <tr>
                <td>rowCount</td>
                <td><strong>int</strong></td>
                <td>
                Optional limit on number of rows to return.  Default is 1000.  Maximum is 2560.
                </td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="entries" key="refID" columns="date,refID,refTypeID,ownerName1,ownerID1,ownerName2,ownerID2,argName1,argID1,amount,balance,reason,owner1TypeID,owner2TypeID">
        <row date="2012-12-19 12:51:22" refID="6723384310" refTypeID="54" ownerName1="trek apace" ownerID1="90251444" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="" argID1="0" amount="-17700.00" balance="7140579224.62" reason="" owner1TypeID="1373" owner2TypeID="2" />
        <row date="2012-12-19 12:51:22" refID="6723384309" refTypeID="2" ownerName1="Ilasia Lynn" ownerID1="92690397" ownerName2="trek apace" ownerID2="90251444" argName1="2682037889" argID1="0" amount="1180000.00" balance="7140596924.62" reason="" owner1TypeID="1385" owner2TypeID="1373" />
        <row date="2012-12-19 12:50:52" refID="6723383243" refTypeID="54" ownerName1="trek apace" ownerID1="90251444" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="" argID1="0" amount="-26550.00" balance="7139416924.62" reason="" owner1TypeID="1373" owner2TypeID="2" />
        <row date="2012-12-19 12:50:52" refID="6723383242" refTypeID="2" ownerName1="Ilasia Lynn" ownerID1="92690397" ownerName2="trek apace" ownerID2="90251444" argName1="2682037615" argID1="0" amount="1770000.00" balance="7139443474.62" reason="" owner1TypeID="1385" owner2TypeID="1373" />
        <row date="2012-12-19 11:52:55" refID="6723264857" refTypeID="54" ownerName1="trek apace" ownerID1="90251444" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="" argID1="0" amount="-42300.00" balance="7137673474.62" reason="" owner1TypeID="1373" owner2TypeID="2" />
        <row date="2012-12-19 11:52:55" refID="6723264856" refTypeID="2" ownerName1="Pacak Zanjoahir" ownerID1="90500646" ownerName2="trek apace" ownerID2="90251444" argName1="2682011072" argID1="0" amount="2820000.00" balance="7137715774.62" reason="" owner1TypeID="1373" owner2TypeID="1373" />
        <row date="2012-12-19 10:20:54" refID="6723140427" refTypeID="80" ownerName1="reygar burnt" ownerID1="1801683792" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="62440569" argID1="0" amount="-10000.00" balance="7134895774.62" reason="" owner1TypeID="1376" owner2TypeID="2" />
        <row date="2012-12-19 10:17:06" refID="6723131004" refTypeID="46" ownerName1="trek apace" ownerID1="90251444" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="EVE System" argID1="1" amount="-100.00" balance="7134905774.62" reason="" owner1TypeID="1373" owner2TypeID="2" />
        <row date="2012-12-19 03:19:08" refID="6722119077" refTypeID="54" ownerName1="trek apace" ownerID1="90251444" ownerName2="Secure Commerce Commission" ownerID2="1000132" argName1="" argID1="0" amount="-38070.00" balance="7134905874.62" reason="" owner1TypeID="1373" owner2TypeID="2" />
        <row date="2012-12-19 03:19:08" refID="6722119076" refTypeID="2" ownerName1="rusherl" ownerID1="1785921690" ownerName2="trek apace" ownerID2="90251444" argName1="2681763072" argID1="0" amount="2538000.00" balance="7134943944.62" reason="" owner1TypeID="1373" owner2TypeID="1373" />
    </rowset>
</result>
```

### Result Data

<table border="1">
    <tbody>
        <tr>
            <td>transactions</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per journal entry.</td>
        </tr>
        <tr>
            <td></td>
            <td>date</td>
            <td><strong>datetime</strong></td>
            <td>Date and time of transaction.</td>
        </tr>
        <tr>
            <td></td>
            <td>refID</td>
            <td><strong>long</strong></td>
            <td>Unique journal reference ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>refTypeID</td>
            <td>
                <strong>int</strong>
                <sup>
                    <a href="../constants.html#reference-type">[1]</a>
                </sup>
            </td>
            <td>Transaction type.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerName1</td>
            <td><strong>string</strong></td>
            <td>Name of first party in transaction.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerID1</td>
            <td>
                <strong>long</strong>
                <sup>
                    <a href="../../sde/mssql/mssql_crpNPCCorporations.html" title="NPC Corporations table when first party is an NPC Corporation">[1]</a>
                </sup>
            </td>
            <td>Character or corporation ID of first party.  For NPC corporations, see the appropriate cross reference.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerName2</td>
            <td><strong>string</strong></td>
            <td>Name of second party in transaction.</td>
        </tr>
        <tr>
            <td></td>
            <td>ownerID2</td>
            <td>
                <strong>long</strong>
                <sup>
                    <a href="../../sde/mssql/mssql_crpNPCCorporations.html" title="NPC Corporations table when second party is an NPC Corporation">[1]</a>
                </sup>
            </td>
            <td>Character or corporation ID of second party.  For NPC corporations, see the appropriate cross reference.</td>
        </tr>
        <tr>
            <td></td>
            <td>argName1</td>
            <td><strong>variable</strong></td>
            <td>Ref type dependent argument name.  See the <a href="../constants.html#reference-type">Reference Type table</a>.</td>
        </tr>
        <tr>
            <td></td>
            <td>argID1</td>
            <td>
                <strong>int</strong>
            </td>
            <td>Ref type dependent argument value.  See the <a href="../constants.html#reference-type">Reference Type table</a>.</td>
        </tr>
        <tr>
            <td></td>
            <td>amount</td>
            <td><strong>decimal</strong></td>
            <td>Transaction amount.  Positive when value transferred to the first owner.  Negative otherwise.</td>
        </tr>
        <tr>
            <td></td>
            <td>balance</td>
            <td><strong>decimal</strong></td>
            <td>Wallet balance after transaction occurred.</td>
        </tr>
        <tr>
            <td></td>
            <td>reason</td>
            <td><strong>string</strong></td>
            <td>Ref type dependent reason.  See the <a href="../constants.html#reference-type">Reference Type table</a>.</td>
        </tr>
        <tr>
            <td></td>
            <td>owner1TypeID</td>
            <td><strong>int</strong></td>
            <td>
                Determines the owner type:<br />
                2 = Corporation<br />
                1373-1386 = Character<br />
                16159 = Alliance
            </td>
        </tr>
        <tr>
            <td></td>
            <td>owner2TypeID</td>
            <td><strong>int</strong></td>
            <td>
                Determines the owner type:<br />
                2 = Corporation<br />
                1373-1386 = Character<br />
                16159 = Alliance
            </td>
        </tr>
    </tbody>
</table>

### References

* [Old EVE Online forums thread about refID](http://oldforums.eveonline.com/?a=topic&threadID=764508)
* [CCP Prism X talks journal walking on the old forums](http://oldforums.eveonline.com/?a=topic&threadID=1453360&page=2#60)
* [CCP Stillman talks journal fixes in the Incursion 1.4 patch notes](http://oldforums.eveonline.com/?a=topic&threadID=1490703)
