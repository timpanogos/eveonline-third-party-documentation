## Skill In Training

* __Path:__ ``/char/SkillInTraining.xml.aspx``
* __Access mask:__ 131072
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
                <td>Character ID for which skill in training will be requested</td>
            </tr>
        </tbody>
    </table>

### Sample Response

```xml
<result>
    <currentTQTime offset="0">2015-12-08 00:27:51</currentTQTime>
    <trainingEndTime>2015-12-11 14:06:09</trainingEndTime>
    <trainingStartTime>2015-11-25 07:50:03</trainingStartTime>
    <trainingTypeID>3440</trainingTypeID>
    <trainingStartSP>181020</trainingStartSP>
    <trainingDestinationSP>1024000</trainingDestinationSP>
    <trainingToLevel>5</trainingToLevel>
    <skillInTraining>1</skillInTraining>
</result>
```

### Result Data

<table>
    <tbody>
        <tr>
            <td>currentTQTime</td>
            <td><strong>datetime</strong></td>
            <td>Current server time.</td>
        </tr>
        <tr>
            <td>trainingEndTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when current skill in training will end.</td>
        </tr>
        <tr>
            <td>trainingStartTime</td>
            <td><strong>datetime</strong></td>
            <td>Time when current skill in training started.</td>
        </tr>
        <tr>
            <td>trainingTypeID</td>
            <td>
	        <strong>int</strong>
                <sup>
                <a href="../../sde/yaml_typeIDs/" title="Inventory Types file">[1]</a>
                </sup>
	    </td>
            <td>Type ID of skill being trained.</td>
        </tr>
        <tr>
            <td>trainingStartSP</td>
            <td><strong>int</strong></td>
            <td>Number of skill points character had in this skill when training started.</td>
        </tr>
        <tr>
            <td>trainingDestinationSP</td>
            <td><strong>int</strong></td>
            <td>Number of skill points this character will have when training completes.</td>
        </tr>
        <tr>
            <td>trainingToLevel</td>
            <td><strong>int</strong></td>
            <td>Level this skill is being trained to.</td>
        </tr>
        <tr>
            <td>skillInTraining</td>
            <td><strong>boolean</strong></td>
            <td>1 if skill in training, 0 otherwise.</td>
        </tr>
    </tbody>
</table>

### Notes

* If the skill queue is empty, then only the "skillInTraining" field will be present.
* Offset field on currentTQTime is unknown (always 0?).