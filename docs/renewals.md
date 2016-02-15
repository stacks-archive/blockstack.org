# Renewals

In most namespaces, names have finite lifetimes and will eventually expire.  Exactly when is determined by the rules of the namespace, but a name is be said to have expired by a certain block number.  After this point, the name can be preordered and registered by someone else.  If the name owner wants to avoid this, the name must be *renewed*.

When a name is renewed, its lifetime is reset to the maximum lifetime defined by the namespace.  Some namespaces allow names to have infinite lifetimes, in which case no renewal is necessary.

The fee to renew the name is determined by the rules of the namespace, but it is the same fee paid at registration.  The cost to renew can be obtained with the `get_name_cost` operation as before.

The following command invocation will renew a name:

```
$ blockstore-cli renew <name.namespace> <name owner&#39;s private key>
```

#### Example

This command will renew the name `swiftonsecurity.id`.  The owner of the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2` will continue to own it for another 52595 blocks.

```
$ blockstore-cli renew swiftonsecurity.id 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Note that the private key used has the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`, which is the registration address used in the earlier example (not to be confused with the preorder pair).