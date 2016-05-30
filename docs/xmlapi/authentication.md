# Authentication
There are two methods of authentication available for use with the XML API. As the XML API is a read-only API and only supports GET requests, both involve adding parameters to the query string.

## API keys
API keys are the primary method of accessing private XML API endpoints. They may be created, updated and deleted by users at the [API Key Management](https://community.eveonline.com/support/api-key/) page.

### Usage
To authenticate using an API key, include the key ID and verification code as parameters in the URL.

| Parameter | Value |
| --------- | ----- |
keyID | Key ID of the API key.
vCode | Verification code of the API key.

Example: `https://api.eveonline.com/account/AccountStatus.xml.aspx?keyID=5342860&vCode=1JlLzA5N7fsKh0keyYfFQtkCfm4VvnO4coFXXUDun2ySQjd66AxxJF0OxljvdwdZ`

### API key parameters
- Name: Name of the API key. Does not have to be unique, and is only visible to the owner of the API key. Irrelevant to end users of the API key, but may make API key management easier for their owners.
- Key ID: Unique ID of the API key. May not be changed.
- Verification code: Alphanumeric string consisting of up to 64 characters. By default, a random full length code will be generated, but the owner may use a verification code of any length. Matches the regular expression `[a-zA-Z0-9]{1,64}`
- Access mask: Bitmask defining which endpoints the API key will provide access to.
- Type: Two main types of API keys are character and corporation keys. Character keys can be further divided into character keys, which provide access to only one chracter, and account keys, which provide access to all characters on an account. Only directors of a corporation may create corporation API keys.
- Expiry date: How long the API key will be valid. By default, API keys are valid for 1 year from the date of creation, but that date may be changed and they may also be set to never expire. Expired API keys may be reactivated by changing the expiry date.

Provided you have the key ID and verification code of an API key, you can use the [/account/APIKeyInfo.xml.aspx](account/account_apikeyinfo.md) endpoint to retrieve most information about it. As all properties of an API key except the key ID may be modified by the owner at any time, it is good practive to use this endpoint for monitoring stored API keys.

### Create predefined API keys
It is possible to ease the process of requesting a specific API key from someone by providing them with a CreatePredefined link. It will take them to the API key creation page, but some or all of the fields may be predefined by the link.

The base URL is `https://community.eveonline.com/support/api-key/CreatePredefined`, and presets are defined by adding a query string to that URL. The parameters which may be used are:

| Name | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
accessMask | Valid access mask | 0 | The access mask which the API key should have.
ownerType | `Character` or `Corporation` | `Character` |  Type of the API key which should be created. Whether a character key is account wide or not is determined by another property.
ownerID | 0 or a valid character/corporation ID | 0 | Character or corporation which the API key applies to. Value of 0 will create an account key instead of a character key.

For example, to request an account wide API key which gives you access to mail of all characters on that account, you can provide your users with the following link: `https://community.eveonline.com/support/api-key/CreatePredefined?accessMask=3584`

## SSO access tokens
SSO access tokens are another method for accessing private endpoints. Compared to API keys, they are more limited as they can't be used for account access. Aside from that limitation, using this method will make things easier for your users as they won't have to bother with creating an API key and giving you the details: they just have to authorize your SSO app.

### Usage
To authenticate using an SSO access token, include the access token as a parameter in the URL. As an access token may contain scopes for both character and corporation access, you must also define which one you will be using.

| Parameter | Value |
| --------- | ----- |
accessToken | SSO access token.
accessType | Should be set to `character` or `corporation`, depending on which type of access is required. Optional, defaults to `character`.

Example: `https://api.eveonline.com/char/AccountBalance.xml.aspx?characterID=93265215&accessToken=Ls-vx-xMqq03cl7yMPWdWTVyp1TQUod7WyXti_EmuEVaUMt5JQibftknW06mtFDfhLS7khMP7S93QxXeUzGnxw2`

### Scope to access mask mappings
These tables list the SSO scopes which allow access to the XML API and the access masks they map to. To check which access mask an access token provides, you may also make a call to the [/account/APIKeyInfo.xml.aspx](account/account_apikeyinfo.md) endpoint using the token.

#### Character access
| SSO scope | Access mask |
| :-------- | ----------: |
characterWalletRead | 1 &#124; 2097152 &#124; 4194304
characterAssetsRead | 2 &#124; 134217728
characterCalendarRead | 4 &#124; 1048576
characterContactsRead | 16 &#124; 32 &#124; 524288
characterFactionalWarfareRead | 64
characterIndustryJobsRead | 128
characterKillsRead | 256
characterMailRead | 512 &#124; 1024 &#124; 2048
characterMarketOrdersRead | 4096
characterMedalsRead | 8192
characterNotificationsRead | 16384 &#124; 32768
characterResearchRead | 65536
characterSkillsRead | 131072 &#124; 262144 &#124; 1073741824
characterAccountRead | 33554432
characterContractsRead | 67108864
characterBookmarksRead | 268435456
characterChatChannelsRead | 536870912
characterClonesRead | 2147483648

#### Corporation access
| SSO scope | Access mask |
| :-------- | ----------: |
corporationWalletRead | 1 &#124; 8 &#124; 1048576 &#124; 2097152
corporationAssetsRead | 2 &#124; 32 &#124; 16777216
corporationMedalsRead | 4 &#124; 8192
corporationContactsRead | 16 &#124; 262144
corporationFactionalWarfareRead | 64
corporationIndustryJobsRead | 128
corporationKillsRead | 256
corporationMembersRead | 512 &#124; 1024 &#124; 2048 &#124; 4194304 &#124; 33554432
corporationMarketOrdersRead | 4096
corporationStructuresRead | 16384 &#124; 32768 &#124; 131072
corporationShareholdersRead | 65536
corporationContractsRead | 8388608
corporationBookmarksRead | 67108864
