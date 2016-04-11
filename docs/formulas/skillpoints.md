# Skillpoints

## Skillpoints needed per level

The skillpoints needed for a level depend on the skill rank.

```math
 y_{skillpoints} = 2^{2.5(x_{skilllevel}-1)} \cdot 250 \cdot r_{skillrank}
 ```

### Skillpoints for common ranks

<table>
<thead>
<tr><th>Rank</th><th>Level 1</th><th>Level 2</th><th>Level 3</th><th>Level 4</th><th>Level 5</th></tr>
</thead>
<tbody>
<tr><th>1</th> <td>250</td>  <td>1.414</td> <td>8.000</td>  <td>45.254</td> <td>256.000</td></tr>
<tr><th>2</th> <td>500</td>  <td>2.828</td> <td>16.000</td> <td>90.509</td> <td>512.000</td></tr>
<tr><th>3</th> <td>750</td>  <td>4.242</td> <td>24.000</td> <td>135.764</td><td>768.000</td></tr>
<tr><th>4</th> <td>1.000</td><td>5.656</td> <td>32.000</td> <td>181.019</td><td>1.024.000</td></tr>
<tr><th>5</th> <td>1.250</td><td>7.071</td> <td>40.000</td> <td>226.274</td><td>1.280.000</td></tr>
<tr><th>6</th> <td>1.500</td><td>8.485</td> <td>48.000</td> <td>271.529</td><td>1.536.000</td></tr>
<tr><th>7</th> <td>1.750</td><td>9.899</td> <td>56.000</td> <td>316.783</td><td>1.792.000</td></tr>
<tr><th>8</th> <td>2.000</td><td>11.313</td><td>64.000</td> <td>362.038</td><td>2.048.000</td></tr>
<tr><th>9</th> <td>2.250</td><td>12.727</td><td>72.000</td> <td>407.293</td><td>2.304.000</td></tr>
<tr><th>10</th><td>2.500</td><td>14.142</td><td>80.000</td> <td>452.548</td><td>2.560.000</td></tr>
<tr><th>11</th><td>2.750</td><td>15.556</td><td>88.000</td> <td>497.803</td><td>2.816.000</td></tr>
<tr><th>12</th><td>3.000</td><td>16.970</td><td>96.000</td> <td>543.058</td><td>3.072.000</td></tr>
<tr><th>13</th><td>3.250</td><td>18.384</td><td>104.000</td><td>588.312</td><td>3.328.000</td></tr>
<tr><th>14</th><td>3.500</td><td>19.798</td><td>112.000</td><td>633.567</td><td>3.584.000</td></tr>
<tr><th>15</th><td>3.750</td><td>21.213</td><td>120.000</td><td>678.822</td><td>3.840.000</td></tr>
<tr><th>16</th><td>4.000</td><td>22.627</td><td>128.000</td><td>724.077</td><td>4.096.000</td></tr>
</tbody>
</table>

## Skillpoints per minute

The skillpoints generated each minute depend on the primary ``$ (a_{primary}) $`` and secondary attribute ``$ (a_{secondary}) $`` of the skill.                             

```math
y_{skillpointsPerMinute} = a_{primary} + {a_{secondary} \over 2}
```