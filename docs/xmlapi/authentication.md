# Authentication
There are two methods of authentication available for use with the XML API.

## API keys
API keys may be created, updated and deleted by users at the [API Key Management](https://community.eveonline.com/support/api-key/) page.

## SSO access tokens


### Scope to access mask mappings
These tables list the SSO scopes which allow access to the XML API and the access masks they map to.

#### Character access
SSO scope | Access mask
:--- | ---:
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
SSO scope | Access mask
:--- | ---:
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
