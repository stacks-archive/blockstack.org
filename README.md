# Blockstack Site

[![Slack](http://chat.blockstack.org/badge.svg)](http://chat.blockstack.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A live version of this site can be found online at https://blockstack.org.

## Table of Contents
- [Contributing](#contributing)
- [Installation](#installation)
- [Development](#development)
- [Documentation](#documentation)
- [Upgrading Blockstack Bootstrap](#upgrading-blockstack-bootstrap)
- [Contributing to Blockstack Bootstrap](#contributing-to-blockstack-bootstrap)
- [Deployment](#deployment)
- [Languages and Tools](#languages-and-tools)
- [More Info](#more-info)

### Contributing

You can find opportunities to contribute on our [project board](https://github.com/blockstack/blockstack.org/projects) or [issue tracker](https://github.com/blockstack/blockstack.org/issues), or [Just Ask!](http://chat.blockstack.org/)

Before reporting a bug, [follow these steps](https://capgemini.github.io/testing/effective-bug-reports/#tldr-version).

This repository uses the [git flow branching mode](http://nvie.com/posts/a-successful-git-branching-model/).

We suggest using the [git-flow-avh](https://github.com/petervanderdoes/gitflow-avh) plugin.

Please send pull requests against `develop`. `master` will reflect the latest production code deployed to npm.

Please be sure to write tests for your added features, that tests are all passing by running `gulp test`,
lint your code using [ESLint](http://eslint.org/), and link the issue your feature/fix resolves in your pull request.

For more details on how to contribute, checkout our [Contributing Guide](CONTRIBUTING.md)

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

This repo uses [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for documentation and links to the [blockstack](https://github.com/blockstack/blockstack) repo. Everytime you start up the server, new changes will be pulled automatically from the `github.com/blockstack/blockstack` repo. You can force this update with the following:

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
