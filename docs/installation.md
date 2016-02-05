# Installation

This page is meant to walk you through installing and starting up Blockstore for the first time.

**Requirements**

- [x] Acccess to a bitcoin node with a full transaction index (i.e. txindex is
enabled). You need to be able to connect to a specific bitcoin node that stores
each transaction. Note: This is ​*not*​ the default behavior, the `txindex` option
has to be explicitly enabled in the node.  For example, `btcd.onename.com` has
this feature enabled.
- [x] [Python 2.6 or higher](https://www.python.org/). (Python 3.x not supported)
- [x] Python 2.x development headers (in most Linux distributions, this is usually the `python-dev` or `python-devel` package).
- [x] [The Python distutils package](https://docs.python.org/2/distutils/) (Verify
as it is not always installed with Python)
- [x] [Python pip](https://pypi.python.org/pypi/pip)

**Installing with pip**

To install Blockstore from the (Python Package Index)[https://pypi.python.org/pypi], you can use the following command:

```
$ pip install blockstore
```

This will install Blockstore, and all of its dependencies.

**Installing from Source**

We use distutils to package Blockstore, and provide a setup.py script to pull in additional dependencies.  The package is built with:

```
$ python setup.py build
```

To install blockstored and all of its dependent packages, run:

```
$ sudo python setup.py install
```

**Running Blockstore for the First Time**

When you run Blockstore for the first time, you will be prompted for some basic configuration information.  In particular, Blockstore will need to know how to connect to your bitcoin node, and how to connect to a Bitcoin API provider.  By default, Blockstore will connect to the Bitcoin node fleet that Onename maintains.

Connecting to a bitcoin node is just a matter of supplying Blockstore with the server, port, and login information.  Blockstore will pull transactions and data from it to reconstruct the name database locally.  In particular, Blockstore prompts for:

* `user`: the bitcoin's RPC username (akin to `-rpcuser` in bitcoin-cli).  It defaults to `openname`.
* `passwd`: the bitcoin's RPC password (akin to `-rpcpassword` in bitcoin-cli).  It defaults to `opennamesystem`.
* `server`: the name or IP address of the bitcoin node (akin to `-rpcconnect` in bitcoin-cli).  It defaults to `btcd.onename.com`.
* `port`: the RPC port number of the bitcoin node (akin to `-rpcport` in bitcoin-cli).  It defaults to `8332`.
* `use_https`: whether or not to use SSL.  If you are unsure, type `True`.  It defaults to `True`.

Blockstore needs to access [unspent outputs](https://bitcoin.org/en/glossary/unspent-transaction-output) (UTXOs) to create transactions. Bitcoind does not track UTXOs for all Bitcoin addresses, therefore blockstore needs access to a full UTXO index. Blockstore currently has the option to specify an API provider for accessing UTXOs and users don't need to deploy a UTXO index/database themselves. The API provider gets used to find unspent outputs and also for broadcasting transactions.  Blockstore comes with API support for:

* [Blockcypher](http://www.blockcypher.com/)
* [chain.com](http://chain.com)
* [blockchain.info](https://blockchain.info)
* A bitcoin node configured to track UTXOs

You will be prompted to select one of the four.  In the case of chain.com, Blockcypher, and blockchain.info, you will need to obtain an API token.  The details of how to go about doing so can be found at each of the websites above.  Blockchain.info and Blockcypher currently offer free API tokens.

Once you have chosen your API provider and have an API token, Blockstore will prompt you for them.  After you have entered all of the requisite information, Blockstore will save its configuration to `~/.blockstore/blockstore.ini` for future use.  

***Example***

Below is an example trace of running `blockstored` for the first time.  The user selected the default options for connecting to the Bitcoin network, and selected Chain.com as the API provider.  The API token is redacted.

```
$ ./blockstored start
--------------------------------------------------------
Blockstore does not have enough information to connect
to bitcoind.  Please supply the following parameters, or
press [ENTER] to select the default value.
--------------------------------------------------------
passwd (default: 'opennamesystem'): 
port (default: '8332'): 
user (default: 'openname'): 
use_https (default: 'True'): 
server (default: 'btcd.onename.com'): 
--------------------------------------------------------
NOTE: Blockstore currently requires an external API
for querying unspent transaction outputs.  The set of
supported providers are:
chain_com       
blockcypher     
blockchain_info 
bitcoind_utxo
Please get the requisite API tokens and enter them here.
--------------------------------------------------------
utxo_provider: chain_com
-----------------------------------------------
Please enter your chain.com API key and secret.
-----------------------------------------------
api_key_id: *********
api_key_secret: ********
```

**Administrating Blockstore**

Once you have configured blockstore, you will subsequently be able to start it with:

```
$ blockstored start 
```

To stop blockstore, simply run:

```
$ blockstored stop
```

By default, blockstore will synchronize its database with the blockchain, and then become a daemon and serve RPC requests in the background.  If you want it to run in the foreground, simply pass `--foreground` with the `start` option (example: `blockstored start --foreground`).  By default, blockstore will log RPC requests to `~/.blockstore/blockstore.log.access` and blockchain indexing debug messages to `~/.blockstore/blockstore.log.indexer`.