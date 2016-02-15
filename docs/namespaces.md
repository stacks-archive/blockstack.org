# Namespaces

Blockstore organizes names into namespaces.  A name's namespace can be identified by looking at the characters after the last '.' in the name.

### Creating a Namespace

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

#### Example

The following command will preorder the namespace `abc`, granting control of the name to the private key tied to the `reveal_address` (the 3rd argument).

```
$ blockstore-cli namespace_preorder abc 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2
```

Note that the address of `5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o` is `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM`, while the private key of address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` is actually `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`.  Address `1HYWB9R8ZKXVfEUstJAPhdkJ3nRpc2KHCM` will be charged 40 BTC (sent to the burn address `1111111111111111111114oLvT2`), plus mining fees and dust fees.

The result of the command will contain the transaction ID in Bitcoin, which the namespace creator can monitor to ensure that the rest of the Bitcoin network accepts the preorder transaction.  We advise the namespace creator to wait for six confirmations before the revealing the namespace.

### Revealing a Namesace

Once a namespace has been preordered, the creator (and only the creator) can reveal it.  In doing so, the creator sets the lifetime for each name in the namespace, as well as all of the pricing parameters (K, B, N, V, and A).

**Caveat**: Once a namespace is revealed, its properties are set forever.

The command to do so is:

```
$ blockstore-cli namespace_reveal <namespace ID> <reveal_address> <lifetime_in_blocks> <K> <B> <N> <A> <V> <preorder private key>
```

The cost of revealing a namespace is simply the mining fee plus the dust fees for each output.

#### Example

Suppose the namespace creator of `abc` wanted each name to cost at least 200 uBTC, and for name prices to vary by powers of 10.  Suppose that the desired pricing rule was that all names between lengths 1 and 10 would cost 20 BTC, and all names greater than length 8 would cost 2 BTC.  Suppose that names could receive a 50-fold discount if they had no vowels, and a 100-fold discount if they had numbers or punctuation.  Suppose also that names were supposed to expire after 3 years.  To reveal the namespace with these properties, the namespace creator would issue the command:

```
$ blockstore-cli namespace_reveal abc 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2 157788 200 10 4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3 100 50 5KMKzs7grgyatKURCgxB7SgdeYu35poaEumJShLxPpLTBCrpy8o
```

### Importing Names

After the namespace is revealed, the namespace creator has the opportunity to populate the namespace with names.  In doing so, the creator registers the name for a particular address and assigns it the hash of its profile.  This way, when the namespace is ready for registration, the names are already owned by their respective owners.

The command to import a name is:

```
$ blockstore-cli name_import <name.namespace> <name owner's address> <name owner's profile hash> <name revealer private key>
```

The fourth argument is the private key meant for revealing names, whose address was used as the revealer address when preordering and revealing the namespace.  This private key is *not* the one used to preorder and reveal the namespace.

The cost of importing names is just the cost of the mining fees, plus the dust cost for each output.  Importantly, the namespace creator does *not* pay the name's price when importing names.

#### Example

Suppose the creator of `abc` wanted to import the name `swiftonsecurity.abc`, and have it be owned by the owner of the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`.  Suppose the owner had a name profile with hash `8b3fe3a9ecb162cb7968d5a889fbf159c9f317cb`.  To import this name, the namespace creator would issue the command:

```
$ blockstore-cli name_import swiftonsecurity.abc 199VaCaC9p95otia9e2EH7i6yZq7EWJHk2 8b3fe3a9ecb162cb7968d5a889fbf159c9f317cb 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Then, when the namespace is ready, only the owner of `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` will be able to update, transfer, or revoke the name `swiftonsecurity.abc`.

### Notes on Importing Names

* A namespace must be ready no later than 52596 blocks after they are revealed.  Otherwise, it expires, as well as all of its imported names.  Namespace creators should calculate how long it will take to import all names *before* creating the namespace.
* Sometimes, there can be a lot of names to reveal at once, and revealing them all in sequence can be prohibitively time-consuming.  To address this, Blockstore will accept name imports that have come from one of up to 300 unhardened hierarchical deterministic (HD/BIP32) key pairs derived from the name revealer private key.  Each key pair's wallet can be loaded with BTC, and each used to import a disjoint subset of names concurrently.
* Sometimes, the namespace creator will need to update an already-imported name.  For example, the name owner might disagree with the namespace creator as to what the hash of the profile is.  To address this, Blockstore honors the *last-seen* copy of a name import whenever there is a conflict.  The namespace creator can overwrite old name imports this way until the namespace is declared ready.

### Making the Namespace Ready

Once the namespace creator is satisfied with the state of the namespace, it can be made ready for registration by the public.  Once this happens, the namespace creator will no longer have the power to alter the set of names in the namespace, except for the ones (s)he owns (and (s)he is limited to 25 names by the Blockstore implementation).

In order to make the namespace ready, the namespace creator issues the `namespace_ready` command:

```
$ blockstore-cli namespace_ready <namespace ID> <revealer private key>
```

Note that the private key is the *revealer* private key, not the preorder pirvate key.

Once accepted and recognized by Blockstore, the namespace will be open for registration--anyone will be able to preorder and register currently-unclaimed names.

The cost of making a namespace ready is simply the mining fee plus the dust cost of each output.

#### Example

To make the namespace `abc` ready, the namespace creator would run:

```
$ blockstore-cli namespace_ready abc 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```