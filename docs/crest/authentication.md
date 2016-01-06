# Authenticated CREST
When designing your application you will need to decide what information you require from CREST and if any of that information requires authentication.

Currently most data is available from public crest, so does not require authentication. Anything that does will be listed under a **scope**

Once you have decided what **scopes** you require for your app, you will need to follow the instructions in the [SSO section](../sso/intro) to register your app on the dev site and then to get an **access token**.

# Scopes
When designing your application you will need to decide what information you require from CREST and if any of that information requires authentication.

Currently most data is available from public crest, so does not require authentication. Anything that is not public will have a scope attached. In order to access these endpoints, your app must have been set up with that scope enabled on the dev site and you must have requested that scope when getting your access token from the SSO.

### publicData
The first scope released. It allows access to live market orders data for any region. CCP FoxFour has said that this data will probably moved to Public CREST soon, so this scope may well become deprecated.

### characterContactsRead
Allows access to reading your character's contacts.

### characterContactsWrite
Allows access to create and update your character's contacts.

### characterFittingsRead
Allows an application to read all of the saved fits for a character.

### characterFittingsWrite
Allows an application to create new saved fits as well as delete existing ones.

### characterLocationRead
Allows an application to read your character's current location.

### characterNavigationWrite
Allows an application to set your auto-pilot waypoints on your client.

# Using your access token
Once you have a valid access token from the SSO, you can make calls to authenticated CREST by adding an Authorization header and using the auth'd crest endpoint.

    Authorization: Bearer [Your access token]

An authenticated call that lists all regions would look like this (note that the url here should have been obtained dynamically from the root endpoint, rather than being hardcoded):

    POST https://crest-tq.eveonline.com/regions/ HTTP/1.1
    
    Authorization: Bearer bG9...ZXQ=
    Accept: application/vnd.ccp.eve.RegionCollection-v1+json
    Host: crest-tq.eveonline.com
    
For information on the Accept header used here, see the [Versioning](versioning) section.
