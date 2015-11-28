## FacWarStats

* __Path:__ ``/char/FacWarStats.xml.aspx``
* __Access mask:__ 64
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
                <td>ID of character</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<?xml version='1.0' encoding='UTF-8'?>
<eveapi version="2">
    <currentTime>2008-07-10 13:12:49</currentTime>
    <result>
        <factionID>500001</factionID>
        <factionName>Caldari State</factionName>
        <enlisted>2008-06-10 22:10:00</enlisted>
        <currentRank>4</currentRank>
        <highestRank>4</highestRank>
        <killsYesterday>0</killsYesterday>
        <killsLastWeek>0</killsLastWeek>
        <killsTotal>0</killsTotal>
        <victoryPointsYesterday>0</victoryPointsYesterday>
        <victoryPointsLastWeek>1044</victoryPointsLastWeek>
        <victoryPointsTotal>0</victoryPointsTotal>
    </result>
    <cachedUntil>2008-07-10 14:12:49</cachedUntil>
</eveapi>
```  

### Result Data

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>factionID</td>
            <td>int</td>
            <td>ID number of the faction.</td>
        </tr>
        <tr>
            <td>factionName</td>
            <td>string</td>
            <td>Name of the faction.</td>
        </tr>
		<tr>
            <td>enlisted</td>
            <td>date time</td>
            <td>Date character enlisted in the faction.</td>
        </tr>
		<tr>
            <td>currentRank</td>
            <td>int</td>
            <td>Characters current faction rank.</td>
        </tr>
		<tr>
            <td>highestRank</td>
            <td>int</td>
            <td>Characters highest faction rank.</td>
        </tr>
		<tr>
            <td>killsYesterday</td>
            <td>int</td>
            <td>Number of ships character destroyed yesterday.</td>
        </tr>
		<tr>
            <td>killsLastWeek</td>
            <td>int</td>
            <td>Number of ships character destroyed last week.</td>
        </tr>
		<tr>
            <td>killsTotal</td>
            <td>int</td>
            <td>Number of total ships character destroyed.</td>
        </tr>
		<tr>
            <td>victoryPointsYesterday</td>
            <td>int</td>
            <td>Number of victory points character acquired yesterday.</td>
        </tr>
		<tr>
            <td>victoryPointsLastWeek</td>
            <td>int</td>
            <td>Number of victory points character acquired last week.</td>
        </tr>
		<tr>
            <td>victoryPointsTotal</td>
            <td>int</td>
            <td>Number of total victory points character acquired.</td>
        </tr>
    </tbody>
</table>

### Notes

* If the character is enlisted in Factional Warfare, this will return the faction the character is enlisted in, the current rank and the highest rank the character ever had attained, and how many kills and victory points the character obtained yesterday, in the last week, and total. Otherwise returns an error code.
	```text
	124: Character not enlisted in Factional Warfare.
	```  