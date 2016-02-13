# Zone Files

Updating a profile from `blockstore-cli` is a matter of giving Blockstore the JSON document that represents the new profile information.  Blockstore will put the new profile hash into the blockchain, and upload the JSON document to the DHT and all other storage providers the `blockstore-cli` tool has been configured to use.

Because this operation writes data to the blockchain, the effect of the `update` will not become visible until six subsequent blocks have been mined.  The cost of the `update` operation is simply the cost of writing the requisite outputs to the blockchain as dust, plus mining fees.

Given the nature of this operation, the write to the blockchain must precede the write to the name owner's storage providers.  In the event that the write to the blockchain fails, no data will be uploaded to any storage providers.  In the event that the write to the blockchain succeeds (i.e. the transaction gets accepted) but the upload fails, the name owner can attempt to re-upload the JSON without issuing a new transaction by submitting the transaction ID along with the `update` command.  The transaction ID is used to prove to the storage providers that the write has been paid for by the writer.

The usage of this operation is as follows:

```
$ blockstore-cli update <name.namespace> <JSON string> <privatekey> [txid]
```

#### Example

Suppose the owner of the name `swiftonsecurity.id` wanted to add a minimal profile, encoded as `{"name":{"formatted":"Swift on Security"},"v":"2"}`.  To do so, the command would be:

```
$ blockstore-cli update swiftonsecurity.id '{"name":{"formatted":"Swift on Security"},"v":"2"}' 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

Note that the private key used (`5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`) has the address `199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`, which is the registration address submitted for `swiftonsecurity.id` in the earlier registration example (not to be confused with the preorder key pair).

Now, suppose that the update transaction succeeded as transaction ID `cd08dd0afff9838ede0b8f4e3a9ffbe95e1c81d7da1a38582b3ce93ad10f5e5a`, but uploading `{"name":{"formatted":"Swift on Security"},"v":"2"}` to the DHT failed.  The owner of `swiftonsecurity.id` can re-run the upload with:

```
$ blockstore-cli update swiftonsecurity.id '{"name":{"formatted":"Swift on Security"},"v":"2"}' 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m cd08dd0afff9838ede0b8f4e3a9ffbe95e1c81d7da1a38582b3ce93ad10f5e5a
```