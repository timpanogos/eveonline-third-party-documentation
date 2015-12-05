## WalletTransactions

* __Path:__ ``/char/WalletTransactions.xml.aspx``
* __Access mask:__ 4194304
* __Cache timer:__ 30 minutes
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
                <td><strong>string</strong></td>
                <td>API verification code</td>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>Character ID for which transactions will be requested</td>
            </tr>
            <tr>
                <td>accountKey</td>
                <td><strong>int</strong></td>
                <td>
                Account key of the wallet for which transactions will be returned.  This is optional for character accounts which only have one wallet (accountKey = 1000).
                However, corporations have seven wallets with accountKeys numbered from 1000 through 1006.  The <a href="../corp_accountbalance/">Corp - AccountBalance</a> 
                call can be used to map corporation wallet to appropriate accountKey.
                </td>
            </tr>
            <tr>
                <td>fromID</td>
                <td><strong>long</strong></td>
                <td>
                Optional upper bound for the transaction ID of returned transactions.  This argument is normally used to walk to the transaction log backwards.
                See <a href="../intro/#journal-walking">Journal Walking</a> for more information.
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

```xml
<result>
    <rowset name="transactions" key="transactionID" columns="transactionDateTime,transactionID,quantity,typeName,typeID,price,clientID,clientName,stationID,stationName,transactionType,transactionFor,journalTransactionID">
        <row transactionDateTime="2012-12-09 02:28:42" transactionID="2671179227" quantity="1000" typeName="Morphite" typeID="11399" price="8948.99" clientID="1058094831" clientName="Lucius Millcom" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6673802000" />
        <row transactionDateTime="2012-12-09 02:19:22" transactionID="2671172618" quantity="200" typeName="Datacore - Mechanical Engineering" typeID="20424" price="98999.00" clientID="147627949" clientName="Ravenal" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6673771732" />
        <row transactionDateTime="2012-12-09 02:19:07" transactionID="2671172459" quantity="85" typeName="Datacore - Electronic Engineering" typeID="20418" price="197800.00" clientID="1055100467" clientName="Potis" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6673771053" />
        <row transactionDateTime="2012-12-09 02:18:53" transactionID="2671172316" quantity="115" typeName="Datacore - Electronic Engineering" typeID="20418" price="190000.00" clientID="431652996" clientName="FernLackey" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6673770366" />
        <row transactionDateTime="2012-11-24 14:57:05" transactionID="2658450303" quantity="1000" typeName="Morphite" typeID="11399" price="7015.03" clientID="92355891" clientName="Veladra Dawn3" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6615037297" />
        <row transactionDateTime="2012-11-24 14:26:21" transactionID="2658427478" quantity="40000" typeName="Fullerides" typeID="16679" price="2259.89" clientID="91840338" clientName="Tyche Chi" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6614929175" />
        <row transactionDateTime="2012-11-24 14:25:55" transactionID="2658427144" quantity="50000" typeName="Crystalline Carbonide" typeID="16670" price="195.82" clientID="91840338" clientName="Tyche Chi" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6614926580" />
        <row transactionDateTime="2012-11-22 18:55:43" transactionID="2657068085" quantity="200" typeName="Datacore - Mechanical Engineering" typeID="20424" price="98000.00" clientID="92406890" clientName="Hiragama MoriMorituri" stationID="60015140" stationName="Hek VII - Tribal Liberation Force Logistic Support" transactionType="buy" transactionFor="corporation" journalTransactionID="6608436244" />
        <row transactionDateTime="2012-11-22 18:55:23" transactionID="2657067843" quantity="200" typeName="Datacore - Electronic Engineering" typeID="20418" price="199999.94" clientID="92428903" clientName="Cico Kain" stationID="60005686" stationName="Hek VIII - Moon 12 - Boundless Creation Factory" transactionType="buy" transactionFor="corporation" journalTransactionID="6608435254" />
    </rowset>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>transactions</td>
            <td><strong>rowset</strong></td>
            <td></td>
            <td>Rowset containing 1 row per journal transaction.</td>
        </tr>
        <tr>
            <td></td>
            <td>transactionDateTime</td>
            <td><strong>datetime</strong></td>
            <td>Date and time of transaction.</td>
        </tr>
        <tr>
            <td></td>
            <td>transactionID</td>
            <td><strong>long</strong></td>
            <td>Unique tranaction ID.</td>
        </tr>
        <tr>
            <td></td>
            <td>quantity</td>
            <td><strong>int</strong></td>
            <td>Number of items bought or sold.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeName</td>
            <td><strong>string</strong></td>
            <td>Name of item bought or sold.</td>
        </tr>
        <tr>
            <td></td>
            <td>typeID</td>
            <td>
                <strong>int</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
            </td>
            <td>Type ID of item bought or sold.</td>
        </tr>
        <tr>
            <td></td>
            <td>price</td>
            <td><strong>decimal</strong></td>
            <td>Amount paid per unit.</td>
        </tr>
        <tr>
            <td></td>
            <td>clientID</td>
            <td>
                <strong>long</strong>
                <sup>
                <a href="../../sde/mssql_crpNPCCorporations/" title="NPC Corporations table when counterparty is an NPC Corporation">[1]</a>
                </sup>
            </td>
            <td>Counterparty character or corporation ID.  For NPC corporations, see the appropriate cross reference.</td>
        </tr>
        <tr>
            <td></td>
            <td>clientName</td>
            <td><strong>string</strong></td>
            <td>Counterparty name.</td>
        </tr>
        <tr>
            <td></td>
            <td>stationID</td>
            <td>
                <strong>long</strong>
                <sup>
                <a href="../../sde/mssql_staStations/" title="Stations table">[1]</a>
                </sup>
            </td>
            <td>Station ID in which transaction took place.</td>
        </tr>
        <tr>
            <td></td>
            <td>stationName</td>
            <td><strong>string</strong></td>
            <td>Name of station in which transaction took place.</td>
        </tr>
        <tr>
            <td></td>
            <td>transactionType</td>
            <td><strong>string</strong></td>
            <td>Either "buy" or "sell" as appropriate.</td>
        </tr>
        <tr>
            <td></td>
            <td>transactionFor</td>
            <td><strong>string</strong></td>
            <td>Either "personal" or "corporate" as appropriate.</td>
        </tr>
        <tr>
            <td></td>
            <td>journalTransactionID</td>
            <td>
                <strong>long</strong>
                <sup>
                <a href="../char_walletjournal/" title="Stations table">[1]</a>
                </sup>
            </td>
            <td>Corresponding wallet journal refID.</td>
        </tr>
    </tbody>
</table>



