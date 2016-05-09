# SSO For Browser Apps

From the perspective of OAuth2 based authentication, browser applications
 can be broken into two main categories based on where they communicate with
 the protected resouces (In the case of EVE SSO, these protected resources
 are CREST and the XML API). These categories can be broadly classed as Client
 side and Server side.

Client Side applications will communicate with the protected resource from
 the web browser. The authentication details never need to be shared with the
 server.

Server Side applications have the applications web server communicate with the
 protected resouces on behlaf of the user.

The distinction between client and server side applications is important as
 it helps informs us on the best authentication workflow to use,

## Client Side Applications

In most situations, Client side applciations will want use the Implicit Flow.
 The primary reson this is prefered for client side applications is that it
 avoids expsing the client secret. It also has the added benifit of reducing
 the number of steps required to get a usable token.

Using the implict workflow is very easy, you simply redirect the user to the
 authorization endpoint, including your `client_id`, `redirect_uri` and setting
 `response_type` to `token`

It should be noted that the EVE SSO implmentation of OAuth2 Implict flow
 appends the authentication object as a URL hash comonent, so it will not been
 seen by the server side without the client explicitly passing it along.

## Server Side Applicaitons

Server side applications should always use the authorisation code flow. Using
 the authorization code flow avoids exposing your authorization token to
 more than is nessacary as the client side will only see the access code.

The EVE SSO implmentation of the authoirsation code flow appends the code as a
 query paramater to the URL so it will be visable to the server side of the
 application without any additional work on the client sdie.

## Additional Notes

The suggestions made on this page outline the easiet authorisation flow to use
 with client and server side applications. They are just suggestions and there
 could be any number of reasons to use the authorisation code flow in a clietn
 side application, or pass the token aquired with the implict flow back to the
 application server.
