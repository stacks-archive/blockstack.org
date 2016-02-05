# Name Registrations

Registering a new name is a two-step process:  it must first be *preordered*, and then *registered.*  Only the principal who preordered the name can register it.  This is done as an anti-squatting measure, in order to stop someone from stealing a name while it is being propagated through the network.

A name owner can have multiple names.  The current limit is 25 per key pair, but this is arbitrary.

Each name in Blockstore is part of a *namespace*.  The name identifies the namespace it belongs to by ending in ".<namespace ID>".  For example, the name `swiftonsecurity.id` belongs to the `id` namespace.

In order to register a name, the namespace must exist and be open to name registration.  You can confirm this with the `get_namespace_blockchain_record` command, as follows:

```
$ blockstore-cli get_namespace_blockchain_record <namespace ID>
```

This command will succeed only if the namespace is ready.  More details on namespaces can be found in the **Namespaces** section.

### Name Preorders

To preorder a name, a name owner needs *two* sets of key pairs:  one to preorder, and one to register.  The *second* key pair should be brand-new and known only to the name owner.  The second key pair's address does not need any Bitcoin, but the name owner will need to transfer some to it once it is necessary to update the name's profile.  The secrecy of the second key pair is important, because Blockstore uses its address as a cryptographic hash salt to blind would-be name squatters.  Once registered, the name will be controlled by the *second* key pair.

The name owner pays for the name by preordering it using the *first* key pair, since only the name owner will be able to claim it.  The amount paid can be determined with the `get_name_cost` command:

#### Example

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

#### Example

The following command will preorder the name `swiftonsecurity.id`, granting control of the name to the private key tied to the `register_address` (the 3rd argument).

```
$ blockstore-cli preorder swiftonsecurity.id 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

Note that the address of `5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o` is `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM`, while the private key of address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` is actually `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`.  Address `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM` will be charged 25000 satoshis (sent to the burn address `1111111111111111111114oLvT2`), plus mining fees and dust fees.

The result of the command will contain the transaction ID in Bitcoin, which the name owner can monitor to ensure that the rest of the Bitcoin network accepts the preorder transaction.  We advise the name owner to wait for six confirmations before the registering the name.

### Name Registrations

The name owner should wait for at least six transaction confirmations to ensure that the preorder was accepted.  Once it has been accepted, the name owner must use the preorder key pair to register the name, and reveal the address of the new public key that will control it.

This is achieved with the `register` command:

```
$ blockstore-cli register <name.namespace> <preorder_privatekey> <register_address> 
```

This will create an empty profile for the name owner, and reveal to the world the name owner's new name, Bitcoin address, and preorder public key.

#### Example

To register the preordered name `swiftonsecurity.id`, the name owner would run the following command:

```
$ blockstore-cli register swiftonsecurity.id 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

The result of the command will contain the transaction ID in Bitcoin, which the name owner can monitor to ensure that the rest of the network accepts the register transaction.  The cost of registering is simply the cost of the mining fee and dust fees for each output.