# Non-Browser Apps

The OAuth2 workflow for non-browser applications is a more complicated process as there is no easy way to capture the
 post-auth redirect. Below you will find 3 common methods of capturing this redirect, each with its own pros and cons.

Non-Browser applications also differ in that there is no way to secure your secret key if you wish to use the
 authorization code workflow. Some applications (Such as Pyfa) get around this by providing an option for users to
 supply their own client_id / secret key combination.

## Registered URL Handler
This method involves registering a URL Handler for your application, and using this as your redirect_uri

### Pros
* Excellent for mobile applications.
* Native look and feel for the user.

### Cons
* Mutli-instance applications require response routing
* Some browser display warnings for unrecognised URL Schemes

URL Handlers are the best method to use in controlled, single instance environments such as mobile devices. Their use
 in Desktop OS such as Windows, OSX and Linux is harder due to varying methods of Handler registration, additional
 browser warnings, and increased developer effort in routing the response to the correct application instance.

Using this method require you to first chose a URL Scheme to register for your application. As you will need the schema
 to be unique to your application it is probably best to use either your App name or a shortened variation of it.

> **Example:** For the application "Amazing Eve App" I may chose the schema "amazingeve://"

You will then need to register this schema with your OS, details on how to do that can be found at:
* Android: [https://stackoverflow.com/questions/2448213/how-to-implement-my-very-own-uri-scheme-on-android](https://stackoverflow.com/questions/2448213/how-to-implement-my-very-own-uri-scheme-on-android)
* IOS: [https://stackoverflow.com/questions/8201724/how-to-register-a-custom-app-opening-url-scheme-with-xcode-4](https://stackoverflow.com/questions/8201724/how-to-register-a-custom-app-opening-url-scheme-with-xcode-4)
* Windows: [https://msdn.microsoft.com/en-us/library/aa767914(v=vs.85).aspx](https://msdn.microsoft.com/en-us/library/aa767914(v=vs.85).aspx)
* OSX: [https://stackoverflow.com/questions/471581/how-to-map-a-custom-protocol-to-an-application-on-the-mac](https://stackoverflow.com/questions/471581/how-to-map-a-custom-protocol-to-an-application-on-the-mac)
* Linux: Is more involved for a number of reasons and so is left as an exercise for the reader.

For multi-instance applications the `state` parameter is useful storing which instance made the auth request. Mobile
 application may wish to use the `state` parameter in similar fashion to web apps.

When you create your application in the EVE Developer Console the `Callback URL` will need to be a path under your
 applications registered url scheme.

> **Example:** Callback URL: amazingeve://auth/

To initiate the login process, launch a browser process to the authorisation endpoint as per the standard workflow.

## Lightweight Local HTTP Server
For this method your application starts a short lived lightweight http server when the auth process starts.

### Pros
* Single solution for all platforms
* Native look and feel for the user

### Cons
* May cause firewall prompt when you start the http server
* It is hard to know how long to leave the server listening for
* You may have conflicts with other applications or other instances of your application when attempting to bind the port

Using the HTTP Server method will require you to chose a port that will be unused on all of your users computers.

When you create your application in the EVE Developer Console the `Callback URL` will need to be a path under
 `http://localhost:$port/`, where `$port` is the port you have chosen to use.

When you initiate the login process, you need to start your local http server on your chosen port and have it wait
 to receive a request. You then launch a browser process ot the authorisation endpoint as per the standard workflow.

When the SSO authentication process has finished the user will be redirected to your local web server, where you can
 parse the request url for the authentication response.

Multi-instance applications may wish to have a shared process for running the web server and performing a return route
 for authentication request to avoid multiple instances attempting to bind to the same port, causing errors.

Currently EVE SSO does not support wildcard components in the Callback URL, so you can not bind to a random port.

You should always bind to your chosen port on the loopback interface.

## Embedded Browser