# Virtual Blockchain

We introduce the notion of a virtual blockchain as operations defined by a higher-layer protocol that are stored in transactions in a standard blockchain. If you throw away all other data (transactions that have no operations for the higher-layer protocol) and extract the operations, they form a logical chain in a linear fashion just like the underlying blockchain. From this, nodes read the sequence and interpret them with a set of defined rules, building a view of the system that should be in sync.

### Layer 2

Above the blockchain is a virtual blockchain, also called virtualchain. Only Blockstore nodes are aware of this layer and underlying blockchain nodes are agnostic to it. Blockstore operations are defined in the virtualchain layer and are encoded in valid blockchain transactions as additional metadata. Blockchain nodes do see the raw transactions, but the logic to process Blockstore operations only exists at the virtualchain level.

The rules for accepting or rejecting Blockstore operations are also defined in the virtualchain. Accepted operations are processed by the virtualchain to construct a database that stores information on global state of the system along with state changes at any given blockchain block. Virtualchains can be used to build a variety of state machines. Currently, Blockstore defines only a single state machine; a global naming system.