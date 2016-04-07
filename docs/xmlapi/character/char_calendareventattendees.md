# CalendarEventAttendees
Returns a list of all invited attendees for a given event.

* __Path:__ ``/char/CalendarEventAttendees.xml.aspx``
* __Access mask:__ 4
* __Cache timer:__ 10 minutes
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
                <td><strong>char</strong></td>
                <td>API verification code</td>
            </tr>
            <tr>
                <td>characterID</td>
                <td><strong>long</strong></td>
                <td>ID of character</td>
            </tr>
            <tr>
                <td>eventIDs</td>
                <td><strong>long</strong></td>
                <td>IDs of the events</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <rowset name="eventAttendees" key="characterID" columns="characterID,characterName,response">
        <row characterID="123456789" characterName="Jane Doe" response="Accepted" />
        <row characterID="987654321" characterName="John Doe" response="Tentative" />
        <row characterID="192837645" characterName="Another Doe" response="Declined" />
        <row characterID="918273465" characterName="Doe the Third" response="Undecided" />
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
            <td>characterID</td>
            <td>long</td>
            <td>ID of the character.</td>
        </tr>
        <tr>
            <td>characterName</td>
            <td>string</td>
            <td>Name of the character.</td>
        </tr>
        <tr>
            <td>response</td>
            <td>string</td>
            <td>Can be {"Undecided", "Accepted", "Declined" or "Tentative"}</td>
        </tr>
    </tbody>
</table>

### Notes

* A call to [Char - UpcomingCalendarEvents](char_upcomingcalendarevents.md) must be made prior to calling this API. Otherwise you will receive the error:<br />
    216: Calendar Event List not populated with upcoming events. You cannot request any random eventID.

### References

[Tyrannis API Improvements](http://community.eveonline.com/news/dev-blogs/tyrannis-api-improvements/)
