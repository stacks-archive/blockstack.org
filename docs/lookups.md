# Lookups

This page describes how to look up information on a name.  You will need to have installed [blockstore-client](https://github.com/blockstack/blockstore-client), and have access to a full Blockstore node.

### Getting a Name's Data

Users use Blockstore to securely associate data with their names.  The data itself is stored externally in a DHT, but the hash and some metadata is embedded in the underlying blockchain.  To fetch the *data*, the command format is as follows:

```
$ blockstore-cli lookup <name>
```

Upon successful execution, the command will print out a JSON object with the following fields:

* `address`: the base58-encoded hash of the name owner's public key (i.e. their Bitcoin address).
* `creation`: this is a JSON object with the following fields:
   * `consensus_hash`: This is the consensus hash for this name's import or preorder.  If the name was imported, the consensus hash comes from the namespace preorder transaction in the blockchain.  If the name was preordered, the consensus hash comes from the preorder transaction in the blockchain.
   * `consensus_block_id`: This is the block number for the above consensus hash.
   * `type`:  This is either "NAME_PREORDER" if the name was preordered, or "NAME_IMPORT" if the name was imported.  It indicates how to interpret the above consensus hash and block number.
* `serial_number`: this is the globally-unique identifier for the name.
* `zone_file`: this is the data associated with the name, fetched from the DHT.  The contents of this field are arbitrary, but it is usually a JSON document.

If the name was since updated, it will also have a `modified` field in addition to the `creation` field.  The `modified` field contains the exact same structure, but with values reflecting the most recent update or transfer.

On error, the command will print out a JSON object with an `error` field.

#### Example

In this example, we look up the data associated with the name `judecn.id`.  The associated data just happens to be a JSON document in this case, but the data can be anything at all in practice.

```
$ blockstore-cli lookup judecn.id         
{
    "address": "16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg",
    "creation": {
        "consensus_block_id": 373600,
        "consensus_hash": "17ac43c1d8549c3181b200f1bf97eb7d",
        "type": "NAME_IMPORT"
    },
    "serial_number": "373622-63",
    "zone_file": {
        "avatar": {
            "url": "https://s3.amazonaws.com/kd4/judecn"
        },
        "bio": "PhD student",
        "bitcoin": {
            "address": "17zf596xPvV8Z8ThbWHZHYQZEURSwebsKE"
        },
        "cover": {
            "url": "https://s3.amazonaws.com/97p/gQZ.jpg"
        },
        "facebook": {
            "proof": {
                "url": "https://facebook.com/sunspider/posts/674912239245011"
            },
            "username": "sunspider"
        },
        "github": {
            "proof": {
                "url": "https://gist.github.com/jcnelson/70c02f80f8d4b0b8fc15"
            },
            "username": "jcnelson"
        },
        "location": {
            "formatted": "Princeton University"
        },
        "name": {
            "formatted": "Jude Nelson"
        },
        "twitter": {
            "proof": {
                "url": "https://twitter.com/judecnelson/status/507374756291555328"
            },
            "username": "judecnelson"
        },
        "v": "0.2",
        "website": "http://www.cs.princeton.edu/~jcnelson"
    }
}
```

Here is an example of a lookup on a user that does not exist:

```
$ blockstore-cli lookup nonexistent.id
{
    "error": "Not found."
}
```

### Getting a Name's Metadata

The blockchain itself stores some metadata for each name, which Blockstore tracks separately.  The metadata includes information such as a name's update history, the locations in the blockchain at which the name was altered, and so on.  The command format is as follows:

```
$ blockstore-cli get_name_blockchain_record <name>
```

On success, the command prints out a JSON object that contains all the information Blockstore learned about this name from the underlying blockchain.  See the "Reading and Writing Name Profiles" section in the [Usage](https://github.com/blockstack/blockstore/wiki/Usage) document for an overview of what each of the fields mean.

If this command fails, it prints out a JSON object with an `error` key, as well as an associated error message.

#### Example

In this example, we look up the blockchain metadata for the name `judecn.id`

```
$ blockstore-cli get_name_blockchain_record judecn.id
{
    "address": "16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg",
    "block_number": 373622,
    "first_registered": 373622,
    "history": {
        "373622": [
            {
                "address": "16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V",
                "fee": 38500,
                "history_snapshot": true,
                "importer": "76a9143e2b5fdd12db7580fb4d3434b31d4fe9124bd9f088ac",
                "importer_address": "16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V",
                "name": "judecn.id",
                "opcode": "NAME_IMPORT",
                "recipient": "76a914caee018147f2d5ff32ca3b2ef35c17755bce440e88ac",
                "recipient_address": "1KVzcgurJmTr4Cr44h6raEVtoGhm7ZZxzm",
                "sender": "76a9143e2b5fdd12db7580fb4d3434b31d4fe9124bd9f088ac",
                "sender_pubkey": "0411d88aa37a0eea476a5b63ca4b1cd392ded830865824c27dacef6bde9f9bc53fa13a0926533ef4d20397207e212c2086cbe13db5470fd29616abd35326d33090",
                "txid": "c698ac4b4a61c90b2c93dababde867dea359f971e2efcf415c37c9a4d9c4f312",
                "value_hash": "dbbdedc2b81d875403cc76486625a19f1e3b3c6f",
                "vtxindex": 63
            }
        ],
        "374075": [
            {
                "address": "1KVzcgurJmTr4Cr44h6raEVtoGhm7ZZxzm",
                "importer": "76a9143e2b5fdd12db7580fb4d3434b31d4fe9124bd9f088ac",
                "importer_address": "16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V",
                "sender": "76a914caee018147f2d5ff32ca3b2ef35c17755bce440e88ac",
                "sender_pubkey": "0411d88aa37a0eea476a5b63ca4b1cd392ded830865824c27dacef6bde9f9bc53fa13a0926533ef4d20397207e212c2086cbe13db5470fd29616abd35326d33090",
                "txid": "c698ac4b4a61c90b2c93dababde867dea359f971e2efcf415c37c9a4d9c4f312",
                "value_hash": "dbbdedc2b81d875403cc76486625a19f1e3b3c6f",
                "vtxindex": "63"
            }
        ],
        "383270": [
            {
                "address": "1KVzcgurJmTr4Cr44h6raEVtoGhm7ZZxzm",
                "importer": "76a9143e2b5fdd12db7580fb4d3434b31d4fe9124bd9f088ac",
                "importer_address": "16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V",
                "sender": "76a914caee018147f2d5ff32ca3b2ef35c17755bce440e88ac",
                "sender_pubkey": "0411d88aa37a0eea476a5b63ca4b1cd392ded830865824c27dacef6bde9f9bc53fa13a0926533ef4d20397207e212c2086cbe13db5470fd29616abd35326d33090",
                "txid": "7cfdfcf0c0abac9641ed5e253e7ba2b3ddabbc0b15302a4fc138519dd028d3ea",
                "value_hash": "dbbdedc2b81d875403cc76486625a19f1e3b3c6f",
                "vtxindex": 234
            }
        ]
    },
    "importer": "76a9143e2b5fdd12db7580fb4d3434b31d4fe9124bd9f088ac",
    "importer_address": "16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V",
    "last_renewed": 373622,
    "name": "judecn.id",
    "op": ";",
    "op_fee": 100000.0,
    "opcode": "NAME_IMPORT",
    "preorder_block_number": 373622,
    "revoked": false,
    "sender": "76a914395f3643cea07ec4eec73b4d9a973dcce56b9bf188ac",
    "sender_pubkey": "0411d88aa37a0eea476a5b63ca4b1cd392ded830865824c27dacef6bde9f9bc53fa13a0926533ef4d20397207e212c2086cbe13db5470fd29616abd35326d33090",
    "txid": "1510e1582f48c7ea1c57156e6ac5ae0d2c0960cfb4d17db0860e140f6900beed",
    "value_hash": "dbbdedc2b81d875403cc76486625a19f1e3b3c6f",
    "vtxindex": 108
}
```

In this example, we look up a name that does not exist:

```
$ blockstore-cli get_name_blockchain_record nonexistent.id
{
    "error": "Not found."
}
```

### Listing Names

Blockstore can serve a listing of all the name metadata it knows about.  To do so, the command is:

```
$ blockstore-cli get_all_names
```