# Data Storage

Storing large amounts of data in the blockchain can lead to blockchain bloat, so we decided to use external datastores, e.g., a DHT, for data storage while storing only hashes of the data in the blockchain, yielding virtually unlimited storage. Currently, the default (external) datastore is a kademlia-based DHT which is seamlessly integrated with blockstored.

To associate data with the name, one issues an "update" operation by including a hash of the data and storing the data itself in the DHT.

### Data storage comparison

|Method|Bytes|
|---|---|
|nulldata in OP_RETURN output|40|
|nulldata in multi-sig output|66|
|namecoin operation|520|
|hash in nulldata, full data in DHT|unlimited|

### Control Plane vs. Data Plane 

We believe that the design principle of separating the "control plane" from the "data plane" (recently, popularized by [OpenFlow](https://www.opennetworking.org/)) applies to blockchain-based datastores. We separate the problem of a) who is the owner of a name and can issue updates to a name-value pair from b) what is most efficient (speed/cost/reliability) way of delivering data to the end-user. For (a) it makes sense to use the blockchain and for (b) it doesn't.

The control plane, should include registration and update of name-value pairs. Given the secure nature of these operations, performing them on the blockchain makes sense. We need to establish, in a decentralized manner, who registered which name before others and who is the owner of which name and issue updates. 

The data plane, is primarily used to deliver the actual data. Hash(value) is in the blockchain and the actual 'value' is stored externally. Since hash(value) is in the blockchain, the only type of attack possible on external storage is data unavailability attack. Anyone can independently confirm that they received the correct value by checking the hash(value) in the blockchain. We believe that standard data delivery optimizations like CDNs, geo-mirrors, keeping copies of data in large-memory servers (e.g., memcached) etc applies to our design.   

### Multiple External Stores 

Currently, we only have one external datastore for storing values -- the kademlia-based DHT. However, there can be many external datastores e.g., [IPFS](https://github.com/ipfs/ipfs), [Syndicate](https://github.com/jcnelson/syndicate) etc. In fact, any person or company can decide to run a mirror and add the mirror to a "discovery service". How exactly to build such a discovery service is currently an [open question](https://github.com/openname/blockstore/issues/84). Orgs/people can also choose to mirror/index only a particular namespace and they don't have to mirror all data on Blockstore. This helps with scalability by adding one-layer of hierarchy. Let's say there are *m* namespaces with *n* name-value pairs in each namespace. Instead of indexing O(m x n), you can index O(n) information and *n* for your namespace could be significantly small.

### Storage Layer

The top-most layer is the storage layer, which hosts the actual data values of name/value pairs. All stored data values are signed by the public-key of the respective owner of a name. By storing data values outside of the blockchain, Blockstore allows values of arbitrary size, and allows for a variety of storage backends. The control plane does not need to trust the storage layer, because it can verify the integrity of the data value in the control plane. There are two modes of using the storage layer and they differ in how the integrity of data values is verified.

### Mutable Storage

Mutable storage is the default mode of operation for the storage layer. Bindings between name and hash(route) are kept in the control plane and the routing layer is used to discover data values. Integrity of data values is verified by checking the signatures of signed values. It allows for faster writes since data updates do not involve any transactions on the blockchain, which has slow writes. Updates to name/value pairs also don’t take any bandwidth on the blockchain (only name registrations do).

### Immutable Storage

Immutable Storage: by-passes the routing layer and stores bindings between name and hash(value) in the control plane, instead of bindings between name and hash(route). Integrity of data value is checked by hashing the data and checking against the hash(data) from the control plane. This mode is suitable for data values that don’t change often and where it is important to verify that you are viewing the latest version of the data value. For immutable storage, updates to data values require a new transaction on the underlying blockchain, making data updates much slower than mutable storage. Blockstore supports both storage modes simultaneously.
