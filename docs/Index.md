# Overview

Blockstack is decentralized DNS.

With the Blockstack software, a network of computers collectively maintain a global registry of domain names.

In this registry, each of the names has an owner, represented by a cryptographic keypair, and is associated with instructions for how browsers and other software should resolve the name.

As with the traditional domain name system, the Blockstack domain name system allows users to lookup names, register, renew, and transfer names, as well as manage name resolution information.

Blockstack DNS differs in a few fundamental ways from traditional DNS:

1. While the traditional domain name system is run by an international organization called ICANN, the Blockstack name registry is maintained in a completely decentralized way. It is run by everyone and it is controlled by no one, giving Blockstack DNS incredible and unprecedented technical and sociopolitical resilience.
2. While traditional DNS relies on a fragile system of disseminating name resolution information, making it vulnerable to DNS cache poisoning, Blockstack DNS has a powerful mechanism for securely transmitting name resolution information that is 100% accurate.
3. Traditional DNS has no built-in system for securely associating names with cryptographic keypairs. Instead, it relies on a hierarchy of anointed organizations to attest to the ownership of domains, where each organization represents a systemic threat to name resolution security. By comparison, in Blockstack DNS every name is associated with a cryptographic keypair, allowing end-users to trust the authenticity of information sent by servers associated with the name.

## Installation

The quickest way to get started with Blockstack and get a glimpse of what it can do is to download the command line interface and perform a name lookup.

Installing the Blockstack command line interface is simple:

OS X / Mac:

    $ brew install blockstack

Linux

    $ apt-get install blockstack

See the installation docs for more:

<a href="/docs/installation" class="btn btn-primary">Installation</a>

## Lookups

Now, to perform a name lookup, run this command:

    $ blockstack lookup fredwilson.id

You should get a response like this:


    {
      "address": "16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg",
      "creation": {
        "consensus_block_id": 373600,
        "consensus_hash": "17ac43c1d8549c3181b200f1bf97eb7d",
        "type": "NAME_IMPORT"
      },
      "serial_number": "373622-63",
      "zone_file": {
        "$origin": "fredwilson.id",
        "$ttl": "3600",
        "txt": [{ "name": "@", "txt": "https://s3.amazonaws.com/zk9/fredwilson.id" }]
      }
    }

<a href="/docs/lookups" class="btn btn-primary">Lookups</a>

## Registrations

After you get comfortable with looking up names, take the next step and register and manage a name for yourself. Run the following command:


    $ blockstack register <my_awesome_name>.id <ecdsa_private_key>

If the name hasn’t been registered yet, you’ll get a confirmation that your registration is pending:


    {
      "success": True,
      "error": None
    }

After a few hours, your registration should go through and you’ll be able to update your DNS records for the name.

<a href="/docs/registrations" class="btn btn-primary">Registrations</a>

## More

See the usage section for more information, as well as all the other articles in the sidebar.

If you’re an application developer, check out the app developer guide:

<a href="/docs/apps" class="btn btn-primary">App Developer Guide</a>

If you’re a systems developer, check out the contributor guide:

<a href="/docs/contributions" class="btn btn-primary">Contributor Guide</a>

If you just want to see how Blockstack works in deeper detail, head over to the technical writeup section.

Enjoy using Blockstack and we can’t wait to see what you build on it and where it takes you.
