# Light Nodes

The set of back-links from a given block `h` to all blocks `h - 2^i` constitute a _Merkle skip-list_ (Figure 2).  Given the consensus hash at height `h`, a client can use an untrusted Blockstore peer to determine the name operations at any prior block using a logarithmic number of queries relative to blocks, and downloading a logarithmic number of bytes relative to the blockchain's size.  The process of verifying the authenticity of a prior name operation with a later known-good consensus hash is caled _Simplified Name Verification_ (SNV).

![SNV protocol overview](/images/docs/snv-overview.png)

_Figure 3: Overview of Simplified Name Verification (SNV) protocol.  Each row represents the blockchain, in decreasing block height order from left to right (h > h0).  The user wishes to verify the authenticity of a name operation in the block marked with a `?`.  In each step, the user trusts the consensus hash for the white outlined block, and uses it to verify the authenticity of that block's name operations, as well as the set of prior consensus hashes (belonging to yellow blocks indicated by the arrows).  By iteratively fetching name operations and consensus hashes for prior blocks, the user will eventually prove the authenticity of all name operations in the `?` block._

To see how this works, suppose that a user trusts the consensus hash at height `h`, but needs to verify a name operation in block `h - 11`.  Suppose that the blockchain currently has 17 blocks beyond height `h0` (Figure 2).  To do so, the user queries any Blockstore node to obtain all of the name operations processed at height `h`, and the consensus hashes for blocks `h - 1`, `h - 2`, `h - 4`, `h - 8`, and `h - 16`.  Once obtained, the user serializes the name operations and prior consensus hashes to re-calculate the consensus hash at `h`.  If the trusted consensus hash matches, then the user knows that both the name operations the prior consensus hashes are authentic.  The user then iteratively downloads name operations and consensus hashes in this way, until block `h - 11` is reached.  Then, the user will have obtained and verified the authenticity of all name operations in that block, including the desired name operation.

A full trace of the algorithm's execution follows:

* Let `CH(h)` be the consensus hash at block height `h`.
* Let `HISTORIC_RECORDS(h)` be a subroutine that queries all records affected by transactions in the block at height `h`.  The returned records are in the historic state they were in at height `h` (see the "Fast Bootstrapping" section for details).

Figure 3, step (1):

1.  Fetch `HISTORIC_RECORDS(h)`, `CH(h-1)`, `CH(h-2)`, `CH(h-4)`, `CH(h-8)`, and `CH(h-16)`.
2.  Serialize and hash `HISTORIC_RECORDS(h)`, `CH(h-1)`, `CH(h-2)`, `CH(h-4)`, `CH(h-8)`, and `CH(h-16)` and verify equal to `CH(h)`.  If not, abort.
3.  `CH(h-8)` is now trusted, and is the closest consensus hash to block `h - 11`.

Figure 3, step (2):

4.  Fetch `HISTORIC_RECORDS(h-8)`, `CH((h-8)-1)`, `CH((h-8)-2)`, `CH((h-8)-4)`, and `CH((h-8)-8)`.
5.  Serialize and hash `HISTORIC_RECORDS(h-8)`, `CH((h-8)-1)`, `CH((h-8)-2)`, `CH((h-8)-4)`, and `CH((h-8)-8)` and verify equal to `CH(h-8)`.  If not, abort.
6.  `CH(h-8-2)` is now trusted, and is the closest consensus hash to block `h - 11`.

Figure 3, step (3):

7.  Fetch `HISTORIC_RECORDS(h-8-2)`, `CH((h-8-2)-1)`, `CH((h-8-2)-2)`, and `CH((h-8-2)-4)`.
8.  Serialize and hash `HISTORIC_RECORDS((h-8)-2)`, `CH((h-8-2)-1)`, `CH((h-8-2)-2)`, and `CH((h-8-2)-4)` and verify equal to `CH(h-8-2)`.  If not, abort.
M9.  `CH(h-8-2-1)` is now trusted, and is the consensus hash of the block with the name operations to verify.

Figure 3, step (4):

10.  Fetch `HISTORIC_RECORDS(h-8-2-1)`, `CH((h-8-2-1)-1)`, `CH((h-8-2-1)-2)`, and `CH((h-8-2-1)-4)`
11.  Serialize and hash `HISTORIC_RECORDS(h-8-2-1)`, `CH((h-8-2-1)-1)`, `CH((h-8-2-1)-2)`, and `CH((h-8-2-1)-4)` and verify equal to `CH(h-8-2-1)`.  If not, abort.
12.  `HISTORIC_RECORDS(h-8-2-1)` is now trusted.  Return the queried record as it was at block `h - 11`.

Extrapolating, the general SNV algorithm works as follows (Figure 4).

```
input:
   trusted_consensus_hash:  the trusted consensus hash 
   h:  the height of the block with the trusted consensus hash 
   rec_id:  the name or namespace ID to query
   h_rec:  the height of the record to query (must be less than h)
   h0:  the height of the block with the first-ever Blockstore operation

output:
   if successful, the queried record as it was at height h_rec
   if unsuccessful, False

subroutines:
   HISTORIC_RECORDS(h):  query to Blockstore that finds all records affected by transactions at height h, restores them to their state at height h, and returns them
   CH(h):  query to Blockstore that returns the consensus hash at height h
   CONSENSUS_HASH( recs, consensus_hash_list ):  calculates the consensus hash from a list of records and prior consensus hashes

let current_h = h
trusted_consensus_hash_table = {
   h: trusted_consensus_hash
}

while current_h >= h_rec
   let historic_recs = HISTORIC_RECORDS(current_h)
   let current_consensus_hashes = []
   let i = 1

   while current_h - 2^i >= h0
      let ch = CH(current_h - 2^i)
      current_consensus_hashes = current_consensus_hashes ++ [ch]
      i = i + 1

   let ch_at_h = CONSENSUS_HASH(historic_recs, current_consensus_hashes)
   if ch_at_h != trusted_consensus_hash_table[current_h]
      print "Consensus hash mismatch at height ", ch_at_h
      return False

   if current_h == h_rec
      break
 
   else
      let current_h = minimum([k for k in trusted_consensus_hash_table.keys where k >= h_rec])
   
print "Consensus hash matches"
find rec in historic_recs where rec.rec_id == rec_id
return rec
```

_Figure 4: The SNV algorithm pseudocode.  A Blockstore client executes this algorithm to use a known-good consensus hash to determine the prior state of a given record.  The client does not need to trust the Blockstore peer._