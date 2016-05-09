# SSO For Browser Apps

From the perspective of OAuth2 based authentication, browser applications
 can be broken into two main categories based on where they communicate with
 the protected resouces (In the case of EVE SSO, these protected resources
 are CREST and the XML API). These categories can be broadly classed as Client
 side and Server side.

Client Side applications will communicate with the protected resource from
 the web browser, as such the authentication details never need to be shared
 with the server.

Server Side applications perform the communication with the protected
 resources on the web server. In this case the client doesn't need to know
 about the authentication deatils.

The distinction between client and server side applications is important as
 it helps inform on the best OAuth2 authentication workflow to use,

## Client Side Applications

In most situations, Client side applciations will want use the Implicit Flow.
 The primary reason this is prefered for client side applications is that it
 avoids expsing the client secret. It also has the added benifit of reducing
 the number of steps required to get a usable token.

Using the implict workflow is very easy - you simply redirect the user to the
 authorization endpoint, including your `client_id`, `redirect_uri` and setting
 `response_type` to `token`

It should be noted that the EVE SSO implmentation of the OAuth2 Implict flow
 appends the token object as a URL hash comonent, So it will not been seen by
 the server without the client explicitly passing it along.

## Server Side Applicaitons

Server side applications should always use the authorisation code flow. Using
 the authorization code flow avoids exposing your authorization token to
 more than is nessacary as the client side will only see the access code.

The Authoriusation code flow has the added benifit of being able to contain a
 `refresh_token` which can be used to get a new `acaess_token` even after it
 has expiored. This is increadably useful, eg. for applications that wish to
 perform resource access on a sechedule.

The EVE SSO implmentation of the authoirsation code flow appends the code as a
 query paramater to the URL so it will be visable to the server side of the
 application without any additional work on the client sdie.

## Additional Notes

The suggestions made on this page outline the easiet authorisation flow to use
 with client and server side applications. They are just suggestions and there
 could be any number of reasons to use the authorisation code flow in a clietn
 side application, or pass the token aquired with the implict flow back to the
 application server.
