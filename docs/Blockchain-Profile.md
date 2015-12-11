# Blockchain Profile

## Types

### Person

```js
var person = new Person()
person.setName("Naval", "Ravikant")
person.setDescription("Co-founder of AngelList")
person.setImage("avatar", "https://pbs.twimg.com/profile_images/3696617328/667874c5936764d93d56ccc76a2bcc13.jpeg")
person.setSocialAccount("facebook", "navalr", "https://facebook.com/navalr/posts/10152190734077261")
person.setSocialAccount("twitter", "naval", "https://twitter.com/naval/status/486609266212499456")
person.setEmployer("angellist.id", "Angel List")
person.setFriend("muneeb.id", "Muneeb Ali")
person.setFriend("ryan.id", "Ryan Shea")
console.log(person.profile)
{
    "@type": "Person",
    "name": "Naval Ravikant",
    "image": [
        {
            "@type": "ImageObject",
            "name": "avatar",
            "contentUrl": "https://pbs.twimg.com/profile_images/3696617328/667874c5936764d93d56ccc76a2bcc13.jpeg"
        }
    ]
    "account": [
        {
            "@type": "Account",
            "service": "facebook",
            "identifier": "navalr",
            "proofType": "http",
            "proofUrl": "https://facebook.com/navalr/posts/10152190734077261"
        },
        {
            "@type": "Account",
            "service": "twitter",
            "identifier": "naval",
            "proofType": "http",
            "proofUrl": "https://twitter.com/naval/status/486609266212499456"
        }
    ],
    "worksFor": [
        {
            "@type": "Organization",
            "name": "AngelList",
            "id": "angellist.id"
        }
    ],
    "knows": [
        {
            "@type": "Person",
            "name": "Muneeb Ali",
            "id": "muneeb.id"
        },
        {
            "@type": "Person",
            "name": "Ryan Shea",
            "id": "ryan.id"
        }
    ]
}
```

### Organization

```js
var organization = new Organization()
organization.setName("AngelList")
organization.setEmployee("naval.id", "Naval Ravikant")
console.log(organization.profile)
{
    "@type": "Organization",
    "name": "AngelList",
    "employee": [
        {
            "@type": "Person",
            "name": "Naval Ravikant",
            "id": "naval.id"
        }
    ]
}
```

### Creative Work

```js
var creativeWork = new CreativeWork()
creativeWork.setName("Balloon Dog")
creativeWork.setCreator("therealjeffkoons.id", "Jeff Koons")
creativeWork.setDateCreated("May 9 1994")
creativeWork.setDatePublished(new Date())
console.log(creativeWork.profile)
{
    "@type": "CreativeWork",
    "name": "Balloon Dog",
    "creator": [
        {
            "@type": "Person",
            "name": "Jeff Koons",
            "id": "therealjeffkoons.id"
        }
    ],
    "dateCreated": "1994-05-09T00:00:00-0400",
    "datePublished": "2015-12-10T14:44:26-0500"
}
```

## Registration

Follow these steps to create and register a profile for a Blockchain ID:

1. Create a JSON profile object
2. Convert the profile object into tokens
3. Create a zone file that points to the web location of the profile object

But first, import the required modules:

```js
var BlockchainProfile = require('blockchain-profile').BlockchainProfile,
    PrivateKeychain = require('keychain-manager').PrivateKeychain
```

### Create a Profile Object

The format for profile objects is based on the formatting found at schema.org.

```js
var person = new Person()
person.setName("Satoshi", "Nakamoto")
person.setFriend("gavinandresen.id")
console.log(person.profile)
{
    "@type": "Person",
    "givenName": "Satoshi",
    "familyName": "Nakamoto",
    "knows": [
        {
            "@type": "Person",
            "id": "gavinandresen.id"
        }
    ]
}
```

### Create a Token File

```js
var privateKeychain = new PrivateKeychain()
var tokenFile = signProfileTokens(profile, privateKeychain)
```

### Create a Zone File

```js
var publicKeychain = privateKeychain.publicKeychain()
var hostUrls = ['https://s3.amazonaws.com/mq9/users/satoshi-nakamoto.json']
var checksums = [{ field: 'pgp[0].publicKey', hash: 'e508f0c2c455ab79a4fabc4b51aa537e123c08abee40a87c47e6705a2bbae4ae', algorithm: 'SHA256' }]
var zoneFile = createZoneFile('satoshi.id', publicKeychain, hostUrls, checksums)
```

### Reconstruct a Profile

```js
var profile = getProfileFromTokens(tokenFile, publicKeychain)
console.log(profile)
{
    "@type": "Person",
    "givenName": "Satoshi",
    "familyName": "Nakamoto",
    "knows": [
        {
            "@type": "Person",
            "id": "gavinandresen.id"
        }
    ]
}
```

## Overview

### Usernames

A blockchain ID = a name + a profile, registered on a blockchain.

Let's say you register the username 'alice' within the 'id' namespace, the default namespace for usernames. Then your username would be expressed as `alice.id`.

### Profiles

Profile schema is taken from schema.org. The schema for a person record can be found at http://schema.org/Person. There are some fields that have yet to be included, like the "account", "key", "policy", "id", and "publicKey" fields. An updated schema definition will be published to a different location that superclasses the schema.org Person definition and adds these fields.

#### Example Profile

```json
{
    "name": "Naval Ravikant",
    "accounts": []
}
```

[<img src="/docs/buttons/button-profile.png" width="200">](/docs/Person/profile.md)

### Profile Storage

Blockchain ID profiles are stored in two files: a token file and a zone file:

+ **token file** - contains signed tokens with profile data
+ **zone file** - describes where to find the token file

### Lookups

An identity lookup is performed as follows:

1. lookup the name in blockstore's name records and get back the data hash associated with the name
2. lookup the data hash in the blockstore DHT and get back the zone file
3. scan the zone file for "zone origin" records and get the URL found in the "data" field - the token file URL
4. issue a request to the token file URL and get back the token file
5. parse through the token file for tokens and verify that all the tokens have valid signatures and that they can be tied back to the user's name (by using the public keychain)
6. grab all of the claims in the tokens and merge them into a single JSON object, which is the user's profile

### Zone Files

A zone file contains an origin (the name registered), a TTL (not yet supported), and a list of records.

Each record has a name, class, type, data, and checksums.

If the value of the "name" field is "@", that means the record corresponds to the "zone origin" of the name.

The "class" field corresponds to the namespace of the record's information. In ICANN DNS, this is traditionally "IN" for Internet, but this field could be changed to something else to indicate that the names are registered in a parallel DNS universe.

The "type" field indicates how the record should be resolved. Only "CNAME" is currently supported. This means that the name record should be interpreted as an alias of the URL that is provided in the "data" field.

The "data" field is interpretted in different ways, depending on the value in the "type" field. As mentioned previously, though, the only supported type at the moment is "CNAME", so the "data" field will contain a URL until that changes.

The "checksums" field indicates values in the parsed profile that should be considered "immutable" fields. One can be certain that the values of these fields cannot change because the values of their hashes must correspond to the corresponding values in the checksum records.

The "publicKeychain" field indicates the keychain that was used to sign the tokens found in the token file.

#### Example Zone File

```json
{
    "origin": "alice.id",
    "ttl": "1h",
    "records": [
    ]
}
```

[<img src="/docs/buttons/button-zone-file.png" width="200">](/docs/Person/zone-file.md)

### Token Files

The token file contains a list of token records.

Each record contains the encoded token, a "data" field with the decoded token, a "chainPath" that indicates how to get from the master public keychain to the signing public key, and an "encrypted" field that indicates whether or not the token is encrypted.

To validate each identity token, first decode the token and grab the public key of the issuer. Then, verify the token's signature with the public key. Then check to make sure you can derive the public key from the master public keychain using the chain path. If these checks pass, the token is valid.

Each token in the token file has a header, a payload, and a signature. The payload is the important part. Each payload contains a "claim", a "subject", and an "issuer". The claim is the signed bit of information that goes into the construction of the profile. The subject references the identity that the claim is about. The issuer is the identity that is signing the token (and thus making a claim about the subject).

In the case of self-attested profile information, the subject and the issuer are the same person (one is making a statement about one's self).

However, this can be extended to any statement made by any issuer about any other subject. For example, you can sign a statement attesting to your own birth date, and then your state DMV or bank can sign a statement making the same attestation about your birth date. Then, you can present those two signed statements to any other party and present proof of your birth date.

The cool part is that the identities referenced are public keys, not usernames. That means that you can present signed tokens to a party that show proof of your birth date, all without revealing your username and thus your identity. This process is known as selective disclosure of identity information.

#### Example Token File

```json
[
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjbGFpbSI6eyJuYW1lIjoiUnlhbiBTaGVhIiwiZ2l2ZW5OYW1lIjoiUnlhbiIsImZhbWlseU5hbWUiOiJTaGVhIn0sInN1YmplY3QiOnsiQHR5cGUiOiJQZXJzb24iLCJwdWJsaWNLZXkiOiIwM2QzOWI2YzM5NzEwOWFmYTNhZTE4NDRiMjEzMjE1NmE0YmYyMzYxN2ZlOTEzMmYwZmFjYzM4Y2NmOTQ1MmVhODYifSwiaXNzdWVyIjp7IkB0eXBlIjoiUGVyc29uIiwicHVibGljS2V5IjoiMDNkMzliNmMzOTcxMDlhZmEzYWUxODQ0YjIxMzIxNTZhNGJmMjM2MTdmZTkxMzJmMGZhY2MzOGNjZjk0NTJlYTg2In19.Wqo7GlyisTMRm7xQz98XBp4y_QDTTEQwhtnnoBxsXODupYJlj758rMQEFom2mU5p-WzJwWY8leHgWhoyKa4mXA",
        "data": {
        },
        "chainPath": "9eace0988a7583d45c99ea0058b2687282ebbe4a2862c86aa0e2ed576cd1b49f",
        "encrypted": false
    },
]
```

[<img src="/docs/buttons/button-token-file.png" width="200">](/docs/Person/token-file.md)

