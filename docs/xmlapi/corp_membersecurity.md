## MemberSecurity

* __Path:__ ``/corp/MemberSecurity.xml.aspx``
* __Access mask:__ 512
* __Cache timer:__ 57 minutes
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
        </tbody>
    </table>

### Sample Response

```xml
<eveapi version="2">
    <currentTime>2016-01-10 20:09:16</currentTime>
    <result>
        <rowset name="members" key="characterID" columns="characterID,name">
            <row characterID="92630037" name="Dmitriy Hisoka">
                <rowset name="roles" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName">
                    <row titleID="8" titleName="Shade"/>
                    <row titleID="32" titleName="Director"/>
                    <row titleID="64" titleName="Recruiter"/>
                    <row titleID="512" titleName="Guardian"/>
                </rowset>
            </row>
            <row characterID="93146378" name="Titus Madullier">
                <rowset name="roles" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName">
                    <row titleID="8" titleName="Shade"/>
                    <row titleID="64" titleName="Recruiter"/>
                </rowset>
            </row>
            <row characterID="94027483" name="Bagger 28A">
                <rowset name="roles" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName"/>
            </row>
            <row characterID="94037045" name="katarina premium">
                <rowset name="roles" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName">
                    <row titleID="8" titleName="Shade"/>
                    <row titleID="128" titleName="#"/>
                    <row titleID="16384" titleName="Of Tartaros"/>
                </rowset>
            </row>
            <row characterID="94136088" name="Sabrina Stubberup">
                <rowset name="roles" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName">
                    <row roleID="1" roleName="roleDirector"/>
                </rowset>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName"/>
            </row>
            <row characterID="94359228" name="Conu Aii">
                <rowset name="roles" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRoles" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtHQ" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtBase" key="roleID" columns="roleID,roleName"/>
                <rowset name="rolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="grantableRolesAtOther" key="roleID" columns="roleID,roleName"/>
                <rowset name="titles" key="titleID" columns="titleID,titleName">
                    <row titleID="8" titleName="Shade"/>
                    <row titleID="16384" titleName="Of Tartaros"/>
                </rowset>
            </row>
        </rowset>
    </result>
    <cachedUntil>2016-01-10 21:06:16</cachedUntil>
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
            <td>characterID</td>
            <td>long</td>
            <td>ID of the member</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of the member</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>roles</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>grantableRoles</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>rolesAtHQ</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>grantableRolesAtHQ</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>rolesAtBase</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>grantableRolesAtBase</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>rolesAtOther</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>grantableRolesAtOther</strong></td>
        </tr>
        <tr>
            <td>roleID</td>
            <td>int64</td>
            <td>ID of the Role</td>
        </tr>
        <tr>
            <td>roleName</td>
            <td>string</td>
            <td>Name of the Role</td>
        </tr>
        <tr>
            <td colspan="3">Rowset <strong>titles</strong></td>
        </tr>
        <tr>
            <td>titleID</td>
            <td>int32</td>
            <td>ID of the Title</td>
         </tr>
         <tr>
            <td>titleName</td>
            <td>string</td>
            <td>Name of the Title</td>
         </tr>
    </tbody>
</table>