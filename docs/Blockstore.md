# Blockstore

This page provides an overview of how to use each Blockstore command to control names and namespaces.  You will need to have installed [blockstore-client](https://github.com/blockstack/blockstore-client), and have access to a running Blockstore node.

## Obtaining Names

Registering a new name is a two-step process:  it must first be *preordered*, and then *registered.*  Only the principal who preordered the name can register it.  This is done as an anti-squatting measure, in order to stop someone from stealing a name while it is being propagated through the network.

A name owner can have multiple names.  The current limit is 25 per key pair, but this is arbitrary.

Each name in Blockstore is part of a *namespace*.  The name identifies the namespace it belongs to by ending in ".<namespace ID>".  For example, the name `swiftonsecurity.id` belongs to the `id` namespace.

In order to register a name, the namespace must exist and be open to name registration.  You can confirm this with the `get_namespace_blockchain_record` command, as follows:

```
$ blockstore-cli get_namespace_blockchain_record <namespace ID>
```

This command will succeed only if the namespace is ready.  More details on namespaces can be found in the **Namespaces** section.

**Name Preorders**

To preorder a name, a name owner needs *two* sets of key pairs:  one to preorder, and one to register.  The *second* key pair should be brand-new and known only to the name owner.  The second key pair's address does not need any Bitcoin, but the name owner will need to transfer some to it once it is necessary to update the name's profile.  The secrecy of the second key pair is important, because Blockstore uses its address as a cryptographic hash salt to blind would-be name squatters.  Once registered, the name will be controlled by the *second* key pair.

The name owner pays for the name by preordering it using the *first* key pair, since only the name owner will be able to claim it.  The amount paid can be determined with the `get_name_cost` command:

***Example***

```
$ ./blockstore-cli get_name_cost swiftonsecurity.id
[
    {
        "satoshis": 25000
    }
]
```

The fee will be sent from the address of the private key used to preorder the name.

Once the name owner has found a suitably-priced name, the `preorder` command can be used to preorder it.  It is used as follows:

```
$ blockstore-cli preorder <name.namespace> <preorder_privatekey> <register_address>
```

Once preordered, the name owner must register the name within 144 blocks of the preorder (about 24 hours).

***Example***

The following command will preorder the name `swiftonsecurity.id`, granting control of the name to the private key tied to the `register_address` (the 3rd argument).

```
$ blockstore-cli preorder swiftonsecurity.id 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

Note that the address of `5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o` is `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM`, while the private key of address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` is actually `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`.  Address `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM` will be charged 25000 satoshis (sent to the burn address `1111111111111111111114oLvT2`), plus mining fees and dust fees.

The result of the command will contain the transaction ID in Bitcoin, which the name owner can monitor to ensure that the rest of the Bitcoin network accepts the preorder transaction.  We advise the name owner to wait for six confirmations before the registering the name.

**Name Registration**

The name owner should wait for at least six transaction confirmations to ensure that the preorder was accepted.  Once it has been accepted, the name owner must use the preorder key pair to register the name, and reveal the address of the new public key that will control it.

This is achieved with the `register` command:

```
$ blockstore-cli register <name.namespace> <preorder_privatekey> <register_address> 
```

This will create an empty profile for the name owner, and reveal to the world the name owner's new name, Bitcoin address, and preorder public key.

***Example***

To register the preordered name `swiftonsecurity.id`, the name owner would run the following command:

```
$ blockstore-cli register swiftonsecurity.id 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

The result of the command will contain the transaction ID in Bitcoin, which the name owner can monitor to ensure that the rest of the network accepts the register transaction.  The cost of registering is simply the cost of the mining fee and dust fees for each output.

## Reading and Writing Name Profiles

Because Blockstore is a name-centric storage system, every piece of data it stores is tied to an existing name.  This section describes how to interact with Blockstore name data.

All of the following examples use the [Blockstore command-line client](https://github.com/blockstack/blockstore-client).  Please see its [wiki](https://github.com/blockstack/blockstore-client/wiki) to install it.

**Looking up Names**

Most of a name's associated data is stored on an external DHT run by Blockstore peers.  Only a few records are stored on the blockchain itself (Figure 1).  Blockstore provides methods for fetching either just the information from the blockchain (the `get_name_blockchain_record` command), or the name owner's profile data stored in the DHT (the `lookup` command).

<img src="https://s3.amazonaws.com/onenameblog/openname-bitcoin-dht-diagram-4.png" width="650"/>

*Figure 1: An overview of how blockchain records in Blockstore point to name profile data in the DHT*

Looking up the blockchain-hosted data for a name is done with the `get_name_blockchain_record` command.  This command fetches data stored in the Blockstore daemon itself, including the key in the DHT that refers to the name's profile data.  It is used as follows:

```
$ blockstore-cli get_name_blockchain_record <name>
```

***Example***

The following command will return the information Blockstore found from the blockchain for the name `judecn.id`:

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

The above record contains the current set of information Blockstore extracted from the blockchain pertaining to name `judecn.id`. The individual fields are described as follows:

* `address`: If given, this is the name's associated Bitcoin address.
* `first_registered`:  This is the block number in which the name was registered.
* `history`: This is the history of changes to this name, keyed by block number.
* `importer`: This is the compiled script generated by the principal that imported this name into this namespace (only present for names that were imported instead of registered).
* `importer_address`: This is the address of the principal that imported this name into this namespace (only present for names that were imported instead of registered).
* `last_renewed`:  This is the block number in which the name was last renewed.
* `op_fee`: This is the number of Satoshis spent on the last operation.
* `opcode`: This is the last operation that occurred on this name.
* `preorder_block_number`: This is the block at which this name was created.  For registered names, this is the block number of the associated preorder.  For imported names, this is the block number at which the name was imported.
* `revoked`:  This indicates whether or not the name was revoked by its owner.
* `sender`:  This is the hex-encoded Bitcoin script that was used to claim the name.  In this example, the script is a [pay-to-pubkey-hash](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash) script.
* `sender_pubkey`:  If given, this is the name's associated Bitcoin public key.
* `txid`: This is the transaction ID at which the last name operation occurred.
* `value_hash`:  This is the hash of the name's associated profile information.  It is the key for the profile information in the DHT.
* `vtxindex`: This is the numerical index within the block at which the transaction was discovered.


**Getting a Name's Profile Data**

Looking up the DHT-hosted data for a name is done with the `lookup` command.  This command fetches data from the DHT, using the `value_hash` field for the given name.  It is used as follows:

```
$ blockstore-cli lookup <name>
```

This command returns all of the information used to construct the name's profile.  The data is pulled from the DHT, or from the storage provider(s) designated by `blockstore-cli`.  In particular, the following fields will be present, unless otherwise stated:

* `address`: The base58-encoded hash of the name owner's public key (i.e. their Bitcoin address).
* `creation`: This is a JSON object describing the consensus of the network at the time name's state was first detected by Blockstore.  It has the following fields:
   * `consensus_hash`: This is the consensus hash for this name's import or preorder.  If the name was imported, the consensus hash comes from the namespace preorder transaction in the blockchain.  If the name was preordered, the consensus hash comes from the preorder transaction in the blockchain.
   * `consensus_block_id`: This is the block number for the above consensus hash.
   * `type`:  This is either "NAME_PREORDER" if the name was preordered, or "NAME_IMPORT" if the name was imported.  It indicates how to interpret the above consensus hash and block number.
* `modified`: (OPTIONAL) This is a JSON object describing the consensus of the network at the time of this name's state was last altered by a NAME_UPDATE or NAME_TRANSFER.  It will have the following fields:
   * `consensus_hash`: This is the consensus hash for this name's update or transfer.
   * `consensus_block_id`: This is the block number for the above consensus hash.
   * `type`:  This is either "NAME_UPDATE" if the name was updated, or "NAME_TRANSFER" if the name was transferred.  It indicates how to interpret the above consensus hash and block number.
* `serial_number`: This is the globally-unique identifier for the name.
* `zone_file`: This is the data associated with the name, fetched from the DHT.  The contents of this field are arbitrary, but it is usually a JSON document.

***Example***

The following command will return the information in the Blockstore DHT for the name `judecn.id`.  The information is **guaranteed by the blockchain to be authentic** because it must have a hash that matches the `value_hash`, and the `value_hash` was signed by `judecn.id`'s private key and was propagated to the longest blockchain fork.  Note that `judecn.id` was imported, not preordered.

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


**Updating a Name's Profile**

Updating a profile from `blockstore-cli` is a matter of giving Blockstore the JSON document that represents the new profile information.  Blockstore will put the new profile hash into the blockchain, and upload the JSON document to the DHT and all other storage providers the `blockstore-cli` tool has been configured to use.

Because this operation writes data to the blockchain, the effect of the `update` will not become visible until six subsequent blocks have been mined.  The cost of the `update` operation is simply the cost of writing the requisite outputs to the blockchain as dust, plus mining fees.

Given the nature of this operation, the write to the blockchain must precede the write to the name owner's storage providers.  In the event that the write to the blockchain fails, no data will be uploaded to any storage providers.  In the event that the write to the blockchain succeeds (i.e. the transaction gets accepted) but the upload fails, the name owner can attempt to re-upload the JSON without issuing a new transaction by submitting the transaction ID along with the `update` command.  The transaction ID is used to prove to the storage providers that the write has been paid for by the writer.

The usage of this operation is as follows:

```
$ blockstore-cli update <name.namespace> <JSON string> <privatekey> [txid]
```

***Example***

Suppose the owner of the name `swiftonsecurity.id` wanted to add a minimal profile, encoded as `{"name":{"formatted":"Swift on Security"},"v":"2"}`.  To do so, the command would be:

```
$ blockstore-cli update swiftonsecurity.id '{"name":{"formatted":"Swift on Security"},"v":"2"}' 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Note that the private key used (`5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`) has the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`, which is the registration address submitted for `swiftonsecurity.id` in the earlier registration example (not to be confused with the preorder key pair).

Now, suppose that the update transaction succeeded as transaction ID `cd08dd0afff9838ede0b8f4e3a9ffbe95e1c81d7da1a38582b3ce93ad10f5e5a`, but uploading `{"name":{"formatted":"Swift on Security"},"v":"2"}` to the DHT failed.  The owner of `swiftonsecurity.id` can re-run the upload with:

```
$ blockstore-cli update swiftonsecurity.id '{"name":{"formatted":"Swift on Security"},"v":"2"}' 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m cd08dd0afff9838ede0b8f4e3a9ffbe95e1c81d7da1a38582b3ce93ad10f5e5a
```

## Transferring and Revoking Names

Names do not need to stay bound to the same owner indefinitely.  Instead, the name owner can opt to transfer it to a new owner.  The name owner can also opt to disable the name entirely by revoking it, thereby denying all future modifications to it until it expires.

**Transferring Names**

Once a name has been registered, its owner can opt to transfer it to another address (i.e. another key pair).  This can be performed with the `transfer` command.

The name owner has the option of transferring the name's profile information along with the name.  If transferred, the profile content will be controllable only by recipient--the sender will be unable to update the data via Blockstore, and Blockstore will use the recipient's public key to authenticate data.  There are benefits and drawbacks to doing so depending on the circumstances, so we leave the choice to the users.  It is recommended to *not* transfer the profile information when transferring a name, since the recipient retains the option to rebuild the profile from the sender's profile at a later date.

The following command invocation will transfer a name, but not the profile data.  The third argument controls whether or not to transfer the profile.

```
$ blockstore-cli transfer <name.namespace> <recipient's Bitcoin address> False <name owner's private key>
```

The following command invocation will transfer a name *and* the profile data.

```
$ blockstore-cli transfer <name.namespace> <recipient's Bitcoin address> True <name owner's private key>
```

***Example***

This command will transfer ownership of `swiftonsecurity.id` to the owner of the address `16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V`:

```
$ blockstore-cli transfer swiftonsecurity.id 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m 16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V
```

Note that the private key `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m` is the private key that owns the name, since its address (`199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`) was the registration address in the earlier registration example (not to be confused with the preorder key pair).

**Notes on Transferring Names**

We anticipate that a secondary market for existing names could form around this feature.  If so, we offer the following advice to buyers:

* Check the revocation status of a name before buying.  If it is revoked, it is worthless.
* Check that the name is not going to expire anytime soon--at least not for 30 blocks.  This is because the new owner should wait for at least six confirmations to transfer, and at least another six for the renewal fee to be processed.  The time between blocks is not guaranteed to be 10 minutes.
* Use the `get_name_cost` command to learn the actual worth of the name.
* Make sure the name's namespace is ready for registrations--it must show up with the `lookup_namespace` command.

**Revoking Names**

If a name is no longer wanted, or the key pair that registered it was compromised, the name owner can revoke the name to disable any future transfers, updates, or renewals.  This is done with the `revoke` operation.

**Revoking cannot be undone**.  The purposees of the `revoke` operation are to (1) deny an attacker the ability to alter any data associated with the name, and (2) announce to the world that all future data associated with this name is not authentic.

Because revoking a name involves writing to the blockchain, it has a cost, which is simply the cost of writing the requisite outputs to the blockchain as dust, plus mining fees.

The following command revokes a name:

```
$ blockstore-cli revoke <name.namespace> <name owner's private key>
```

***Example***

To revoke the name `swiftonsecurity.id`, the name owner would run:

```
$ blockstore-cli revoke swiftonsecurity.id 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Note that the private key used has the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`, which is the registration address used in the earlier example (not to be confused with the preorder pair).

A subsequent `lookup` will indicate that the name is revoked, since the `revoked` field will be set to `False`.

## Renewing Names 

In most namespaces, names have finite lifetimes and will eventually expire.  Exactly when is determined by the rules of the namespace, but a name is be said to have expired by a certain block number.  After this point, the name can be preordered and registered by someone else.  If the name owner wants to avoid this, the name must be *renewed*.

When a name is renewed, its lifetime is reset to the maximum lifetime defined by the namespace.  Some namespaces allow names to have infinite lifetimes, in which case no renewal is necessary.

The fee to renew the name is determined by the rules of the namespace, but it is the same fee paid at registration.  The cost to renew can be obtained with the `get_name_cost` operation as before.

The following command invocation will renew a name:

```
$ blockstore-cli renew <name.namespace> <name owner's private key>
```

***Example***

This command will renew the name `swiftonsecurity.id`.  The owner of the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` will continue to own it for another 52595 blocks.

```
$ blockstore-cli renew swiftonsecurity.id 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Note that the private key used has the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`, which is the registration address used in the earlier example (not to be confused with the preorder pair).

## Namespaces 

Blockstore organizes names into namespaces.  A name's namespace can be identified by looking at the characters after the last '.' in the name.

**Name Pricing**

Namespaces exist to set fees and lifetimes for the sets of names they contain.  Namespace prices are characterized by orders of magnitude, determined by the namespace's creator.  To price names, each namespace defines a set of 16 price "buckets" that characterize the order of magnitude of the price of of 1-character names, 2-character names, etc., with the 16th bucket serving as a catch-all for names with at least 16 characters.  The absense of vowels and the presence of non-alpha characters add multiplicative discounts to the name's price.  The price is calculated as follows:

* Let `B` be the namespace's "base price".
* Let `K` be the namespace's constant price multiplier.
* Let `L` be the length of the name.
* Let `N[L-1]` be the bucket that the name falls into (i.e. the price's order of magnitude).
* Let `V` be the discount for having no vowels (it is set to 1 for names with vowels).
* Let `A` be the discount for having non-alphabet characters (it is set to 1 for names with only alphabetical characters).

Then, the price of a name is calculated as `(K * (B ** N[L-1])) / (max([1, V, A]))`.  The units are in uBTC.

***Example***

The pricing of the `id` namespace (specified in Bitcoin transaction `ab54b1c1dd5332dc86b24ca2f88b8ca0068485edf0c322416d104c5b84133a32`) is as follows:

* K = 250 
* B = 4 
* N = [6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
* V = 10
* A = 10

Then, the following prices hold:

* The price of `a.id` is `(250 * (4**6)) / (max([1, 1, 1])) = 1024000 uBTC`, or 1.024 BTC.
* The price of `1.id` is `(250 * (4**6)) / (max([1, 10, 10])) = 102400 uBTC`, or 0.1024 BTC.
* The price of `abc.id` is `(250 * (4**4)) / (max([1, 1, 1])) = 64000 uBTC`, or 0.064 BTC.
* The price of `bcd.id` is `(250 * (4**4)) / (max([1, 10, 1])) = 6400 uBTC`, or 0.0064 BTC.
* The price of `judecn.id` is `(250 * (4**1)) / (max([1, 1, 1]) = 1000 uBTC`, or 0.001 BTC.
* The price of `j00dcn.id` is `(250 * (4**1)) / (max([1, 10, 10]) = 100 uBTC`, or 0.0001 BTC.
* The price of `swiftonsecurity.id` is `(250 * (4**0)) / min([1, 1, 1])` = 250 uBTC, or 0.00025 BTC.

**Namespace Pricing**

Namespaces are not free; their price is a function of their length.  Blockstore enforces the following pricing rules on creating namespaces:

Namespace ID length | Cost (in BTC)
------------------- | -------------:
1                   | 400.0
2, 3                | 40.0
4, 5, 6, 7          | 4.0 
8 and up            | 0.4

Namespace creation fees are sent to the Blockstore burn address (`1111111111111111111114oLvT2`).  The price of a namespace can be queried with `blockstore-cli` via the `get_namespace_cost` command:

```
$ blockstore-cli get_namespace_cost <namespace ID>
```

**Creating a Namespace**

Creating a namespace is a 4-step process:

* Preordering a namespace
* Revealing a namespace 
* Importing names into the namespace 
* Opening the namespace for registration

Before the namespace is open for registration, the namespace creator has the power to define the namespace ID, its pricing parameters, and add an initial set of names.  Once the namespace is opened for registration, anyone can create names within the namespace, subject to pricing and availability.

Just as how Blockstore requires name owners to preorder and then register a name, it also requires namespace creators to preorder and then reveal namespaces.  Preordering a namespace requires the namespace creator to have two key pairs: one for preordering the namespace, and one for revealing it.  The reason for this is to stop a would-be namespace squatter from stealing the namespace as it is revealed--by design, the squatter cannot see the name of the namespace until after it has been preordered.  As such, it is important that the revealing key pair be *known only to the namespace creator*.

The command to pre-order a namespace is:

```
$ blockstore-cli namespace_preorder <namespace ID> <preorder private key> <reveal_address>
```

***Example***

The following command will preorder the namespace `abc`, granting control of the name to the private key tied to the `reveal_address` (the 3rd argument).

```
$ blockstore-cli namespace_preorder abc 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

Note that the address of `5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o` is `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM`, while the private key of address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` is actually `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`.  Address `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM` will be charged 40 BTC (sent to the burn address `1111111111111111111114oLvT2`), plus mining fees and dust fees.

The result of the command will contain the transaction ID in Bitcoin, which the namespace creator can monitor to ensure that the rest of the Bitcoin network accepts the preorder transaction.  We advise the namespace creator to wait for six confirmations before the revealing the namespace.

**Revealing a Namesace**

Once a namespace has been preordered, the creator (and only the creator) can reveal it.  In doing so, the creator sets the lifetime for each name in the namespace, as well as all of the pricing parameters (K, B, N, V, and A).

**Caveat**: Once a namespace is revealed, its properties are set forever.

The command to do so is:

```
$ blockstore-cli namespace_reveal <namespace ID> <reveal_address> <lifetime_in_blocks> <K> <B> <N> <A> <V> <preorder private key>
```

The cost of revealing a namespace is simply the mining fee plus the dust fees for each output.

***Example***

Suppose the namespace creator of `abc` wanted each name to cost at least 200 uBTC, and for name prices to vary by powers of 10.  Suppose that the desired pricing rule was that all names between lengths 1 and 10 would cost 20 BTC, and all names greater than length 8 would cost 2 BTC.  Suppose that names could receive a 50-fold discount if they had no vowels, and a 100-fold discount if they had numbers or punctuation.  Suppose also that names were supposed to expire after 3 years.  To reveal the namespace with these properties, the namespace creator would issue the command:

```
$ blockstore-cli namespace_reveal abc 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2 157788 200 10 4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3 100 50 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o
```

**Importing Names**

After the namespace is revealed, the namespace creator has the opportunity to populate the namespace with names.  In doing so, the creator registers the name for a particular address and assigns it the hash of its profile.  This way, when the namespace is ready for registration, the names are already owned by their respective owners.

The command to import a name is:

```
$ blockstore-cli name_import <name.namespace> <name owner's address> <name owner's profile hash> <name revealer private key>
```

The fourth argument is the private key meant for revealing names, whose address was used as the revealer address when preordering and revealing the namespace.  This private key is *not* the one used to preorder and reveal the namespace.

The cost of importing names is just the cost of the mining fees, plus the dust cost for each output.  Importantly, the namespace creator does *not* pay the name's price when importing names.

***Example***

Suppose the creator of `abc` wanted to import the name `swiftonsecurity.abc`, and have it be owned by the owner of the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`.  Suppose the owner had a name profile with hash `8b3fe3a9ecb162cb7968d5a889fbf159c9f317cb`.  To import this name, the namespace creator would issue the command:

```
$ blockstore-cli name_import swiftonsecurity.abc 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2 8b3fe3a9ecb162cb7968d5a889fbf159c9f317cb 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Then, when the namespace is ready, only the owner of `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` will be able to update, transfer, or revoke the name `swiftonsecurity.abc`.

**Notes on Importing Names**

* A namespace must be ready no later than 52596 blocks after they are revealed.  Otherwise, it expires, as well as all of its imported names.  Namespace creators should calculate how long it will take to import all names *before* creating the namespace.
* Sometimes, there can be a lot of names to reveal at once, and revealing them all in sequence can be prohibitively time-consuming.  To address this, Blockstore will accept name imports that have come from one of up to 300 unhardened hierarchical deterministic (HD/BIP32) key pairs derived from the name revealer private key.  Each key pair's wallet can be loaded with BTC, and each used to import a disjoint subset of names concurrently.
* Sometimes, the namespace creator will need to update an already-imported name.  For example, the name owner might disagree with the namespace creator as to what the hash of the profile is.  To address this, Blockstore honors the *last-seen* copy of a name import whenever there is a conflict.  The namespace creator can overwrite old name imports this way until the namespace is declared ready.

**Making the Namespace Ready**

Once the namespace creator is satisfied with the state of the namespace, it can be made ready for registration by the public.  Once this happens, the namespace creator will no longer have the power to alter the set of names in the namespace, except for the ones (s)he owns (and (s)he is limited to 25 names by the Blockstore implementation).

In order to make the namespace ready, the namespace creator issues the `namespace_ready` command:

```
$ blockstore-cli namespace_ready <namespace ID> <revealer private key>
```

Note that the private key is the *revealer* private key, not the preorder pirvate key.

Once accepted and recognized by Blockstore, the namespace will be open for registration--anyone will be able to preorder and register currently-unclaimed names.

The cost of making a namespace ready is simply the mining fee plus the dust cost of each output.

***Example***

To make the namespace `abc` ready, the namespace creator would run:

```
$ blockstore-cli namespace_ready abc 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```
