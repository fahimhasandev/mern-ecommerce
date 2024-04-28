## Backend Authentication

- Now when you send your login, you're going to need to attach some body data.

So if we go to body you can either send raw Json data or this form URL encoded value or key value pairs.

- request has body object on it.


##### JSON Web Token
JWT consists of 3 parts a header, a payload and a signature.
*payload*  - user's id or role
singature - And the signature is used to verify the information hasn't been tampered with in any way.

- Storing the JWT in client is not good idea. We can have cross-site scripting attacks
- We are gonna store it in HTTP only cookie on the server. Will not be stored in our browser.

`npm i cookie-parser`
So what we're going to do first is install another package called cookie parser that will allow us to easily parse the cookie from the request object.

