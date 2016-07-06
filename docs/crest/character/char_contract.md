# Open Contract
The characters openwindow contract resource allows an application to open a specific contract in game.

### Route
``/characters/<characterID:characterIdType>/ui/openwindow/contract/``

### POST
* Scope: `remoteClientUI`

User has to be online for window to open, response is empty if offline.

Body format:

```json
{
	"contractID": 106338363
}
```

There is no response, if the action is successful the contract will open.