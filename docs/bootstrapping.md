# Bootstrapping

A full Blockstore peer not only stores each name and namespace it finds while processing the blockchain, but also the history of operations on it.  In particular, Blockstore records each name and namespace's change history, so that a client can query a name or namespace _as it was at a prior blockchain height_.  For example, suppose Alice preordered `alice.id` at block 400000, registered it at block 400010, updated it twice in block 400020, and transferred it to Bob at block 400030.  Then, Charlie can query a Blockstore node for the state of the name `alice.id` as it was at block 400011, and see that it was registered to Alice.  At block 400009, he would see that it was still preordered.  He can query it at block 400025 and see that Alice had updated the name (he would see the effect of the second update).  He can also query the name at block 400031 and see that it was transferred to his public key.

As part of storing each name and namespace's history, Blockstore can determine at which block heights a record was changed.  For example, Charlie can query the change history for `alice.id`, and get back the list `[400000, 400010, 400020, 400030]`.

Because a name or namespace can be affected by multiple transactions within a single block, Blockstore additionally keeps track of the transaction-level ordering of a name's history.  For example, Charlie can query the number of times the record for `alice.id` changed in block 400020, and would be informed that it changed twice (because Alice sent two update-transactions).  If he queried the state of `alice.id` at block 400020, Blockstore would give him two versions of `alice.id`:  `alice.id` as it was when it was registered but not updated, and `alice.id` as it was when it was updated for the first time.

These three features--querying a record's past states, querying the block heights where a record changed, and querying how often it changed in a block--allow Blockstore to use a trusted consensus hash to verify the authenticity of an untrusted Blockstore peer's database.  Once it has done so, it can use the database instead of having to re-create it by downloading the blockchain.

To see how it works, consider that each record has the following information:

* the index into the block of the transaction that changed it ('`txindex`')
* the list of block heights where it changed ('`history`')
* for each block height in '`history`', a list of '`txindex`' values where the name changed.
* for each '`txindex`' value at a given block height, the list of fields that were changed by the transaction ('`changeset`') 
* a record-specific method ('`rollback`') that takes a record's history, changeset, historical block height, and transaction index as arguments and returns the record as it was at that particular block height and transaction.  This is simply a matter of iteratively copying over the fields from '`changeset`' into the current state in order from present back to the past, historical timestamp (similar to how a version control system would roll a source file back to a particular commit).

To verify the authenticity of an untrusted database, the Blockstore peer executes the following algorithm (Figure 2).

```
input:
   trusted_consensus_hash:  the trusted consensus hash
   h:  the height of the block with the trusted consensus hash
   h0: the initial block height
   db: the untrusted database, as a list of records

output:
   if successful, True
   if unsuccessful, False

subroutines:
   CONSENSUS_HASH( recs, consensus_hash_list ):  calculate the canonical serializations of each record in recs, and then calculate the cryptographic hash over them as well as the given consensus hash list

let consensus_hashes = []
for each block i from h0 to h

   let recs_i = [rec where i in rec.history for rec in db]
   let block_i_recs = []
   let block_i_consensus_hashes = []

   sort recs_i on 'txindex'
   for rec in recs_i
      let txindexes = rec.history[i]
      sort txindexes

      for txi in txindexes:
         let historic_rec = rec.rollback(rec.history, rec.changeset, i, txi)
         block_i_recs = block_i_recs ++ [historic_rec]
   
   let j = i - 1
   while j >= h0
      block_i_consensus_hashes ++ [consensus_hashes[j]]
      j = j / 2
   
   let ch = CONSENSUS_HASH( block_i_recs, block_i_consensus_hashes )
   consensus_hashes = consensus_hashes ++ [ch]

if consensus_hashes[h] == trusted_consensus_hash
   print "db is consistent with the trusted consensus hash"
   return True

else
   print "db is not consistent with the trusted consensus hash"
   return False 
```

_Figure 2: The fast bootstrapping algorithm's pseudocode.  Blockstore executes this to verify the authenticity of another Blockstore peer's database.  If the authenticity can be verified, then the peer can bootstrap itself from the database, without having to download the blockchain and regenerate its own database from scratch_

In effect, the Blockstore peer translates the database back into the sequence of transactions the untrusted peer processed, and replays them to recalculate the final consensus hash.  If it matches the trusted consensus hash, then the database is trustworthy.