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
            <td>0</td>
            <td>Open or Active</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Closed</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Expired or Fulfilled</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Cancelled</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Character Deleted</td>
        </tr>
    </tbody>
</table>

## Order Range

<table border="1">
    <tbody>
        <tr>
            <th>Value</th>
            <th>Meaning</th>
        </tr>
        <tr>
            <td>32767</td>
            <td>Region (buy order).  Default value for all sell orders.</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Station (buy order)</td>
        </tr>
        <tr>
            <td>0</td>
            <td>Solar System (buy order)</td>
        </tr>
        <tr>
            <td>5, 10, 20, or 40</td>
            <td>Jumps from station where order was placed (buy order)</td>
        </tr>
    </tbody>
</table>
