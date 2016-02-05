# Troubleshooting

Because Blockstore is a wide-area distributed system, there can be many sources of problems.  The common ones are documented here.  If you are encountering a problem with Blockstore that is not listed here, please join our [Slack](https://blockstack.slack.com) and let us know, or email us directly.

### Network-level Errors

Network-level errors are usually transient, and should not affect the correctness of the system beyond preventing Blockstore from learning the latest name updates.

### Symptoms and Diagnosis

* **Symptom:** You see error messages in the log in the form of `gaierror: <something something something>`
  * **Diagnosis:** There is probably something wrong with your network.  Make sure you can use DNS, and make sure you have network connectivity.  Use `ping` and `dig` to see that you can resolve hostnames and reach hosts.
* **Symptom:** You see error messages in the log in the form of `SSLError: <something something something>`
  * **Diagnosis:** Your network is working, but Blockstore is having trouble communicating with the `bitcoind` node.  If you have `bitcoin-cli` installed, try using it to ping the node.  If you are using Onename's bitcoind fleet, the exact command is:

  ```
  $ bitcoin-cli -rpcconnect=btcd.onename.com -rpcusername=openname -rpcpassword=opennamesystem -rpcssl ping
  ```

### Database errors

* **Symptom:** You see different consensus hashes and even different names than your peers.
  * **Diagnosis:** It is possible that you are on a fork of the blockchain.  First, compare your `~/.blockstore/blockstore.snapshots` file to that of someone you trust.  Do they match up until a particular block number (beyond 373601), and then diverge?  If so, then this means one of two things:
      * If you recently upgraded your Blockstore, you might still have an old one running.  If so, then the old one could have overwritten the `blockstore.db` and `blockstore.snapshots` files with its own copies, which may not store the same information as you expect
      * The blockchain itself forked, and both you and your friend were on separate forks.  If this is the case, then please see the [[Blockchain Fork Recovery]] page for how to proceed.

### Python-level errors

The Python runtime environment is extremely well-tested, but some of us have encountered problems with it in the past.

* **Symptom:** Blockstore causes a segmentation fault, and you see some instances of `error: [Errno 32] Broken pipe` that follow.
  * **Diagnosis:** This is probably a bug in Python's `multiprocess` module or some library on which it depends.  The best advice we can give is to make sure you are running the latest version of Python 2 branch, and your OS is up-to-date.  The only solution here is to run `blockstored stop` to clean up, and then restart blockstore.
* **Symptom:** Blockstore throws an exception that is not described in this document
  * **Diagnosis:** There's a bug in Blockstore.  Please post a copy of the exception [here](https://github.com/blockstack/blockstore/issues), so we can get back to you and fix it.

### Rejected Transactions

If `blockstore-cli` fails to send the transaction, then no money will be spent from your wallet, you will not see a `transaction_hash` in the command output, and your profile will not be affected at all.  However, you will need to find out why:

* **Are you using the right private key?**  If you send a transaction with the wrong private key, it might not have any funds associated with it.
* **Make sure you have enough BTC in your wallet.** Updating, transferring, and revoking a name only costs as much as the dust fee and miners fees, but you will need the funds to be present and confirmed by the miners first.
* **Make sure you have no unconfirmed transactions.** A lot of miners won't accept transactions that have unconfirmed unspent outputs. Try waiting about an hour and try again, to make sure that all your unconfirmed transactions get accepted onto the main blockchain.
* If you are using a subsidized transaction from Blockstore, **try waiting 30 minutes and asking for a new one.**  It is possible that the Blockstore operator's node is misconfigured, or its UTXO provider did not supply the right unspent outputs for your address.  If the problem persists, you may need to contact the operator.
* If all else fails, **try configuring Blockstore to use a different UTXO provider.** Sometimes, a UTXO provider won't see your unspent outputs for some time.

### Rejected Name Operations

Sometimes a transaction will be successfully written to the blockchain, but Blockstore will reject it.  You can tell whether or not Blockstore rejected a transaction by searching for it in the logfile (by default, this is `~/.blockstore/blockstore.log.indexer`).  If this happens to you, it might be for the following reasons:

* **Did you use the right private key?**  If you send a Blockstore operation with the wrong private key, Blockstore will not accept it.  This is because only a particular principal (or set of principals) can control a name or namespace.  Refer to the documentation on the specific command to see which private key(s) are required.
* **Was there a delay in sending the transaction?** Some transactions (like name updates) must be sent and discovered by Blockstore within a limited amount of time.  In the unlikely case that this doesn't happen for you, you will need to re-send the transaction.  It is best to try to find out why your transaction took so long to get incorporated into the blockchain, because it may happen again (examples:  the miner you contacted was on a shorter fork; the blockchain is experiencing very high load, etc.).
* **Is Blockstore scanning a different blockchain fork?**  Sometimes the blockchain can fork, and the Blockstore node that sent your transaction originally might be on a different fork than you.  This means that its view of the world will diverge from all the other Blockstore nodes.  If you are running a Blockstore node and this happens, please refer to the [[Blockchain Fork Recovery]] section.
