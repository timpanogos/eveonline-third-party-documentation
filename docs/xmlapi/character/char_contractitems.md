# ContractItems
Lists Items and details of a particular contract.

* __Path:__ ``/char/ContractItems.xml.aspx``
* __Cache timer:__ 10 years
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
            <tr>
                <td>contractID</td>
                <td><strong>long</strong></td>
                <td>ID of the contract</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset columns="recordID,typeID,quantity,rawQuantity,singleton,included" key="recordID" name="itemList">
        <row included="1" singleton="0" quantity="1" typeID="4310" recordID="1737516979"/>
        <row included="1" singleton="0" quantity="1" typeID="35659" recordID="1737516980"/>
        <row included="1" singleton="0" quantity="1" typeID="519" recordID="1737516981"/>
        <row included="1" singleton="0" quantity="2" typeID="28999" recordID="1737516982"/>
        <row included="1" singleton="0" quantity="1" typeID="2961" recordID="1737516983"/>
        <row included="1" singleton="0" quantity="1" typeID="2048" recordID="1737516984"/>
        <row included="1" singleton="0" quantity="2" typeID="29001" recordID="1737516985"/>
        <row included="1" singleton="0" quantity="1" typeID="2961" recordID="1737516986"/>
        <row included="1" singleton="0" quantity="2000" typeID="21894" recordID="1737516987"/>
        <row included="1" singleton="0" quantity="1" typeID="2961" recordID="1737516988"/>
        <row included="1" singleton="0" quantity="1" typeID="1952" recordID="1737516989"/>
        <row included="1" singleton="0" quantity="1" typeID="29009" recordID="1737516990"/>
        <row included="1" singleton="0" quantity="1" typeID="2961" recordID="1737516991"/>
        <row included="1" singleton="0" quantity="1" typeID="1978" recordID="1737516992"/>
        <row included="1" singleton="0" quantity="1" typeID="29011" recordID="1737516993"/>
        <row included="1" singleton="0" quantity="1" typeID="9491" recordID="1737516994"/>
        <row included="1" singleton="0" quantity="1" typeID="1978" recordID="1737516995"/>
        <row included="1" singleton="0" quantity="1" typeID="9491" recordID="1737516996"/>
        <row included="1" singleton="0" quantity="1" typeID="2605" recordID="1737516997"/>
        <row included="1" singleton="0" quantity="1" typeID="2961" recordID="1737516998"/>
        <row included="1" singleton="0" quantity="1" typeID="9491" recordID="1737516999"/>
        <row included="1" singleton="0" quantity="1" typeID="31360" recordID="1737517000"/>
        <row included="1" singleton="0" quantity="1" typeID="8529" recordID="1737517001"/>
        <row included="1" singleton="0" quantity="1" typeID="519" recordID="1737517002"/>
        <row included="1" singleton="0" quantity="1" typeID="31360" recordID="1737517003"/>
        <row included="1" singleton="0" quantity="1" typeID="31113" recordID="1737517004"/>
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
            <td>recordID</td>
            <td>long</td>
            <td>Unique ID for the item.</td>
        </tr>
        <tr>
            <td>typeID</td>
            <td nowrap>
                long
                <sup>
                    <a href="../../sde/yaml/yaml_typeIDs.html">[1]</a>
                </sup>
            </td>
            <td>Type ID for item.</td>
        </tr>
        <tr>
            <td>quantity</td>
            <td>long</td>
            <td>Number of items in the stack.</td>
        </tr>
        <tr>
            <td>rawQuantity</td>
            <td nowrap>
                long
                <sup>
                    <a href="../constants.html#raw-quantity">[2]</a>
                </sup>
            </td>
            <td>
                This attribute will only show up if the quantity is a negative number in the DB. Negative quantities are in fact codes, -1 indicates that the item is a singleton (non-stackable). 
                If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy.
            </td>
        </tr>
        <tr>
            <td>singleton</td>
            <td>long</td>
            <td>T1 if this is a singleton item, 0 if not.</td>
        </tr>
        <tr>
            <td>included</td>
            <td>long</td>
            <td>1 if the contract issuer has submitted this item with the contract, 0 if the isser is asking for this item in the contract.</td>
        </tr>
    </tbody>
</table>

### Notes

* This page returns only contract items from a contractID that is accessible from within their scope. These can be found in [Contracts](char_contracts.md)

### References

[CAKs and Contracts in the API](http://community.eveonline.com/news/dev-blogs/caks-and-contracts-in-the-api/)
