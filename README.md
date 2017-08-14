# Blockstack Site

[![Slack](https://img.shields.io/badge/join-slack-e32072.svg?style=flat)](http://slack.blockstack.org/)

A live version of this site can be found online at https://blockstack.org.

### Installation

```
git clone --recursive git@github.com:blockstack/blockstack.org.git
npm install
```

Clone this repo locally, then run `npm install` from the root directory.

### Development

```
npm run dev
```

To run the site in development mode, run `npm run dev` (this may require installing Gulp globally `npm install gulp -g`). Your browser will automatically be opened and directed to the browser-sync proxy address.

Now that `npm run dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

#### Documentation

This repo uses [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for documentation and links to the [blockstack](https://github.com/blockstack/blockstack) repo. Everytime you start up the server, new changes will be pulled automatically from the `github.com/blockstack/blockstack` repo. You can force this update with the following:

```
npm run fetch-docs
```

For simplicity, please make any edits to the `.md` files directly in the [/blockstack/blockstack](https://github.com/blockstack/blockstack) repo instead of the document in the included submodule.

#### Upgrading Blockstack Bootstrap

Periodically you may need to update to the latest version of Blockstack's Bootstrap fork.

Install the latest version of `blockstack-bootstrap` by running the following:

```
npm install bootstrap
```

#### Contributing to Blockstack Bootstrap

If you'd like to update the UI framework for Blockstack, you can do so by visiting the [Blockstack Bootstrap](https://github.com/blockstack/blockstack-bootstrap) repo and submitting pull requests there.

*Note: when you submit pull requests from your fork, make sure you select `blockstack/blockstack-bootstrap` as the base fork.*

### Deployment

```
npm run prod
firebase deploy
```

To prepare assets for production, run `gulp prod`. This will fill the `/build` directory with the full site.

*Note: the production task does not fire up the browser-sync server and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development to utilize this functionality.*

Once the build has been produced, deploy the site to firebase by running `firebase deploy`.

### Languages and Tools

- ReactJS (along with React Router and RefluxJS)
- SASS
- Gulp (using best practices from Gulp Starter)
- Browserify

### More Info

For more in-depth information on any of the steps or libraries use, see the development guide:

[Development Guide](development.md)
