# Consensus Rules

![Consensus hash construction overview](/images/docs/consensus-hash.png)

_Figure 1: Overview of how a consensus hash is constructed from a block's transactions_

A Blockstore peer broadcasts name operations by writing them as transactions on an underlying blockchain.  Peer Blockstore nodes discover them by reading the blockchain and replaying the operations sequentially.  In doing so, the blockchain serves as an append-only log of Blockstore name operations, which when replayed in sequence allow a Blockstore peer to determine the history of operations on each name and namespace.

Blockstore generates a consensus hash in a deterministic way by hashing a block's sequence of name operations, as well as a logarithmic number of prior consensus hashes (Figure 1).  At block height `h`, the consensus hash is calculated by first hashing the canonical forms of each name operation in transaction order, and then hashing the prior consensus hashes for all blocks at heights `{h | h - 2^i && i > 0 && h - 2^i >= h0}` (where `h0` is the block height of the first-ever name operation).  Consensus hashes are processed in a deterministic order, such as in increasing order on `i`.  This way, two Blockstore peers at block `h` will calculate the same consensus hash (with very high probability) if and only if they observed the same sequence of name operations and the same sequence of prior consensus hashes.