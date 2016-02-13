# Pricing

Namespaces exist to set fees and lifetimes for the sets of names they contain.  Namespace prices are characterized by orders of magnitude, determined by the namespace's creator.  To price names, each namespace defines a set of 16 price "buckets" that characterize the order of magnitude of the price of of 1-character names, 2-character names, etc., with the 16th bucket serving as a catch-all for names with at least 16 characters.  The absense of vowels and the presence of non-alpha characters add multiplicative discounts to the name's price.  The price is calculated as follows:

* Let `B` be the namespace's "base price".
* Let `K` be the namespace's constant price multiplier.
* Let `L` be the length of the name.
* Let `N[L-1]` be the bucket that the name falls into (i.e. the price's order of magnitude).
* Let `V` be the discount for having no vowels (it is set to 1 for names with vowels).
* Let `A` be the discount for having non-alphabet characters (it is set to 1 for names with only alphabetical characters).

Then, the price of a name is calculated as `(K * (B ** N[L-1])) / (max([1, V, A]))`.  The units are in uBTC.

#### Example

The pricing of the `id` namespace (specified in Bitcoin transaction `ab54b1c1dd5332dc86b24ca2f88b8ca0068485edf0c322416d104c5b84133a32`) is as follows:

* K = 250 
* B = 4 
* N = [6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
* V = 10
* A = 10

Then, the following prices hold:

* The price of `a.id` is `(250 * (4**6)) / (max([1, 1, 1])) = 1024000 uBTC`, or 1.024 BTC.
* The price of `1.id` is `(250 * (4**6)) / (max([1, 10, 10])) = 102400 uBTC`, or 0.1024 BTC.
* The price of `abc.id` is `(250 * (4**4)) / (max([1, 1, 1])) = 64000 uBTC`, or 0.064 BTC.
* The price of `bcd.id` is `(250 * (4**4)) / (max([1, 10, 1])) = 6400 uBTC`, or 0.0064 BTC.
* The price of `judecn.id` is `(250 * (4**1)) / (max([1, 1, 1]) = 1000 uBTC`, or 0.001 BTC.
* The price of `j00dcn.id` is `(250 * (4**1)) / (max([1, 10, 10]) = 100 uBTC`, or 0.0001 BTC.
* The price of `swiftonsecurity.id` is `(250 * (4**0)) / min([1, 1, 1])` = 250 uBTC, or 0.00025 BTC.

### Namespace Pricing

Namespaces are not free; their price is a function of their length.  Blockstore enforces the following pricing rules on creating namespaces:

Namespace ID length | Cost (in BTC)
------------------- | -------------:
1                   | 400.0
2, 3                | 40.0
4, 5, 6, 7          | 4.0 
8 and up            | 0.4

Namespace creation fees are sent to the Blockstore burn address (`1111111111111111111114oLvT2`).  The price of a namespace can be queried with `blockstore-cli` via the `get_namespace_cost` command:

```
$ blockstore-cli get_namespace_cost <namespace ID>
```