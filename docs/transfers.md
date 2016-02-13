# Transfers

This page shows how to transfer a name to a new owner.  You will need to have installed the [blockstore-client](https://github.com/blockstack/blockstore) package, and will need access to a full Blockstore node.

**WARNING:** Transferring a name cannot be undone.  Once transferred, only the new owner will be able to transfer it.

### Requirements

To transfer a name to a new owner, you will need:

* your private key
* the recipient's address

### Transferring

The command format to transfer a name is as follows:

```
$ blockstore-cli transfer <name.namespace> <recipient address> <keep data?> <privatekey>
```

You have the option to transfer your profile data to the new owner, as well as the name.  This is controlled by typing `True` or `False` into the `<keep data?>` field.  If you are unsure, you should pass `False`.  This is because it is **not** recommended that you transfer your profile, since the new name owner could use it to impersonate you.

When the command runs successfully, it will return a JSON object with at least the following fields given:

```
{
   "transaction_hash": <the transaction ID on the blockchain that contains this transfer>
   "data": <the OP_RETURN data>
}
```

On error, an `error` field will be present, and it will contain a descriptive error message.

#### Example

Suppose the owner of `swiftonsecurity.id` wanted to transfer her name (but **not** her profile data) to the address `1NMkY7MThPGWgrHZWfp6uwP5PqyfF8i86R`.  Suppose that her private key is `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m`.  Then, to do so, she would run:

```
$ blockstore-cli transfer swiftonsecurity.id 1NMkY7MThPGWgrHZWfp6uwP5PqyfF8i86R False 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m
```

If the command succeeds, it might print something like this:

```
{
    "transaction_hash": "269874f5a3847e0e869c982b5edfcb3a77b26f04dcfcfc0bdf1c75cf8fbacf35", 
    "data": "69643e7e7727f568dd9d36d5c777c024da599473a94e23658c0ee8424b78034cc72ebbb7"
}
```

### Interpreting the OP_RETURN data

If you look closely at `data`, you'll see that the first four bytes (`69643e7e`) decode to the ASCII string `id>~`.  This specifically indicates a `NAME_TRANSFER` operation (represented by `id>`), where the profile data was *not* preserved (represented by `~`).  Had the user passed `True`, then the first four bytes would be `69643e3d`, or `id>>` in ASCII (where the second `>`) indicates that the profile record should be preserved

### Troubleshooting

The only way this command can fail is if there was a blockchain-level problem.  If the transaction did not go through to the underlying blockchain, follow the advice in the "Rejected Transactions" section of [[Commands don't Work]].

### Name was sent to the wrong address

Unfortunately, there is nothing to do but wait for the name to expire.  The fact that Blockstore prevents other users from taking your name by force also means that it prevents everyone except for the private key owner from issuing transfers.  **You should be absolutely certain that you have the right recipient address**.

### My name was transferred, but I did not do it.

This usually means someone has stolen your private key.  See the [[Private Key Lost or Stolen]] page.

### Transfering

Names do not need to stay bound to the same owner indefinitely.  Instead, the name owner can opt to transfer it to a new owner.  The name owner can also opt to disable the name entirely by revoking it, thereby denying all future modifications to it until it expires.

### Transferring Names

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

#### Example

This command will transfer ownership of `swiftonsecurity.id` to the owner of the address `16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V`:

```
$ blockstore-cli transfer swiftonsecurity.id 5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m 16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V
```

Note that the private key `5JZAZzZo5JvCEc4x9pkNAdkLf468H4KVMMhrwcv6WKFJ9x3ZC7m` is the private key that owns the name, since its address (`199VaCaC9p95otia9e2EH7i6yZq7EWJHk2`) was the registration address in the earlier registration example (not to be confused with the preorder key pair).

### Notes on Transferring Names

We anticipate that a secondary market for existing names could form around this feature.  If so, we offer the following advice to buyers:

* Check the revocation status of a name before buying.  If it is revoked, it is worthless.
* Check that the name is not going to expire anytime soon--at least not for 30 blocks.  This is because the new owner should wait for at least six confirmations to transfer, and at least another six for the renewal fee to be processed.  The time between blocks is not guaranteed to be 10 minutes.
* Use the `get_name_cost` command to learn the actual worth of the name.
* Make sure the name's namespace is ready for registrations--it must show up with the `lookup_namespace` command.
