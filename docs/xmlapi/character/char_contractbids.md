# ContractBids
Retrieve bids that have been placed on the characters auctions.

* __Path:__ ``/char/ContractBids.xml.aspx``
* __Cache timer:__ 15 minutes
* __Access mask:__ 67108864
* __Parameters:__
    <table border="1">
        <tbody>
            <tr>
                <th>Argument</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset columns="bidID,contractID,bidderID,dateBid,amount" key="bidID" name="bidList">
        <row amount="1000000.00" dateBid="2015-11-08 03:45:50" bidderID="92168909" contractID="98714177" bidID="4891368"/>
        <row amount="2000000.00" dateBid="2015-11-08 03:46:21" bidderID="95633963" contractID="98714177" bidID="4891412"/>
        <row amount="152441923.72" dateBid="2015-11-08 03:49:46" bidderID="1188435724" contractID="98714179" bidID="4891491"/>
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
            <td>bidID</td>
            <td>long</td>
            <td>Unique ID for the bid.</td>
        </tr>
        <tr>
            <td>contractID</td>
            <td>long</td>
            <td>
                Unique ID for the contract.
            </td>
        </tr>
        <tr>
            <td>bidderID</td>
            <td>long</td>
            <td>Character ID of the bidder.</td>
        </tr>
        <tr>
            <td>dateBid</td>
            <td>datetime</td>
            <td>Date bid was placed.</td>
        </tr>
        <tr>
            <td>amount</td>
            <td>decimal</td>
            <td>The ammount bid.</td>
        </tr>
    </tbody>
</table>

### Notes

* This page returns only bids characters have placed on Auctions the character queried owns. It will not 
    pull bids from public auctions the character has bid upon.
* It only shows bids for current ongoing auctions.

### References

[CAKs and Contracts in the API](http://community.eveonline.com/news/dev-blogs/caks-and-contracts-in-the-api/)
