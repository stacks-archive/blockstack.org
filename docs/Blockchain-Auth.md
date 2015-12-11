# Blockchain Profile

## Overview

1. the app creates a signed authentication request and delivers it to the user
1. the user's client verifies the authenticity of the request
1. the user's client compiles information for an authentication response
    1. it grabs the challenge inside of the request
    1. it looks at the permissions and pulls together the necessary data to deliver
1. the user's client creates a signed authentication response with the compiled information
1. the user's client sends a message to the app's server with both the app-produced authentication request and the user-produced authentication response
1. the app looks at the request and response and performs a few checks
    1. "hey, this auth request was really signed by me"
    1. "hey, this auth response was really signed by the user who claims to have produced the token"
    1. "hey, the request and response have the same challenge"
1. the app logs the user in

## Auth Requests

### Request Format

```json
{
    "header": {
        "typ": "JWT",
        "alg": "ES256"
    },
    "payload": {
        "issuedAt":"1440624435.28",
        "challenge":"8befe9e5-db3a-408a-aaae-c41c1c8eee55",
        "permissions":["blockchainid"],
        "issuer": {
            "publicKey":"0231e4873b5569c5811b4849cf1797f2bff3dab358b07416aa7a9af638f7182ca3",
            "domain":"onename.com"
        }
    },
    "signature": "MEUCIQDzUaSrgTR_tTpNSVcitKYvYWd3bc3uylMe3xCfo-QclQIgDLN1hgXSyqiEk0AGQ21XB2wzuqrotTmE_yN3pn4f_38"
}
```

### Request Types

There are two types of auth requests: signed requests and unsigned requests.

Signed requests are by far the norm and should be required for any app that has a server that can store private keys and sign messages. The majority of web apps, mobile apps and desktop apps that require user authentication will fall into this category.

Unsigned requests are very specific type of auth request where the request is coming from a desktop app or mobile app that does not have any server that can sign messages. An example of this would be a peer-to-peer commerce app.

Unsigned requests do not require verification and instead have a unique authentication method as follows:

1. the desktop app sends a request that includes an identifier that uniquely identifies the client software on the P2P network
2. the user takes the identifier, visually makes sure it was the same identifier that was shown in the original app, and publicly posts it in his/her profile to demonstrate access to the blockchain ID

### How Signed Request Verification Works

Two steps are required to verify a signed auth request:

1. verification that the token is a valid JWT that was signed by the specified public key
2. verification that the specified public key is included in the DKIM records of the specified domain

### Permission Types

+ read public data
    + blockchain ID and entire public profile
+ read private data
    + name
    + profile photo
    + bio
    + website
    + city of residence
    + social accounts
    + email
    + birthday
    + postal address
    + bitcoin address
    + credit card number
    + friends
    + photos
+ write public data
    + write access to a section set aside for the app
+ write private data
    + friends
    + photos


## Auth Responses

### Response Format

```json
{
    "header": {
        "typ": "JWT",
        "alg": "ES256"
    },
    "payload": {
        "issuedAt": "1440713414.85",
        "challenge": "7cd9ed5e-bb0e-49ea-a323-f28bde3a0549",
        "issuer": {
            "publicKey": "03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479",
            "blockchainid": "ryan",
            "publicKeychain": "xpub661MyMwAqRbcFQVrQr4Q4kPjaP4JjWaf39fBVKjPdK6oGBayE46GAmKzo5UDPQdLSM9DufZiP8eauy56XNuHicBySvZp7J5wsyQVpi2axzZ",
            "chainPath": "bd62885ec3f0e3838043115f4ce25eedd22cc86711803fb0c19601eeef185e39"
        }
    },
    "signature": "MEUCIQDzUaSrgTR_tTpNSVcitKYvYWd3bc3uylMe3xCfo-QclQIgDLN1hgXSyqiEk0AGQ21XB2wzuqrotTmE_yN3pn4f_38"
}
```

### Response Types

There are two types of auth responses - pseudo-anonymous auth responses and identified auth responses.

With pseudo-anonymous auth responses, only a persistent public key is specified, as well as optional private information. No blockchain ID, and by extension public profile, is provided by the user.

With identified auth responses, the user additionally provides a blockchain ID, as well as evidence that they are the owner of said blockchain ID.

### How Response Verification Works

Pseudo-anonymous auth response verification only requires a single step - verification that the token is a valid JWT that was signed by the specified public key.

Identified auth responses, meanwhile, require two additional verification steps:

1. verification that the provided public keychain and chain path combo together can be used to derive the public key of the signer
2. verification that the provided public keychain is explicitly specified by the user in his/her blockchain ID profile as a keychain that has authorization to perform authentication

The public keychain is verified against the chain path and public key in the following way:

1. the chain path is split up into 8 32-bit pieces, which are each modded with 2^31, yielding 8 31-bit "chain steps"
2. each chain step is used in succession to produce a child key from the previous parent key until a final child key (aka "ancestor" key) is produced
3. the ancestor key is checked for equality with the public key of the signer

## Code
- [Blockchain Auth library, written in node.js](https://github.com/blockstack/blockchain-auth-js)  
- [Blockchain Auth library, written in python](https://github.com/blockstack/blockchain-auth-python)  
- [Agent for logging into websites with Blockchain Auth](https://github.com/blockstack/blockchain-auth-agent)  