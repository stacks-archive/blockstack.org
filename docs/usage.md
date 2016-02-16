---
title: Usage
nextUrl: /docs/advanced-usage
nextLabel: Advanced Usage
nextDescription: Dig deeper with Blockstack usage. Learn how to create new namespaces and more.
---

# Usage

## Lookups

Now, to perform a name lookup, run this command:

```bash
$ blockstack lookup fredwilson.id
```

You should get a response like this:

```json
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
```

## Registrations

After you get comfortable with looking up names, take the next step and register and manage a name for yourself. Run the following command:

```bash
$ blockstack register <name>.<tld>
```

If the name hasn’t been registered yet, you’ll get a confirmation that your registration is pending:

```json
{
  "success": True,
  "error": None
}
```

After a few hours, your registration should go through and you’ll be able to update your DNS records for the name.

## Updates

```bash
$ blockstack update <data>
```

## Transfers

```bash
$ blockstack transfer <name> <recipient>
```

## Renewals

```bash
$ blockstack renew <name>
```
