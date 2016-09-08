# Blockstack Site

[![Slack](http://slack.blockstack.org/badge.svg)](http://slack.blockstack.org/)

A live version of this site can be found online at https://blockstack.org.

### Installation

```
$ git clone git@github.com:blockstack/blockstack-site.git
$ npm install
```

Clone this repo locally, then run `npm install` from the root directory.

### Development

```
$ gulp dev
```

To run the site in development mode, run `gulp dev` (this may require installing Gulp globally `npm install gulp -g`). Your browser will automatically be opened and directed to the browser-sync proxy address.

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

### Install Blockstack Bootstrap

Push your edits to your chosen `$ push origin [branch name]`.

Then create your pull request by clicking the "Pull Request" button and selecting `base fork: blockstack/blockstack-bootstrap`. This will take you to the "Comparing changes" page view.

You will then select the branch you want to compare your changes `base: master` to `compare [your branch]` and click the create pull request button.

Once you've created your pull request you'll need to merge it into master by clicking `merge`

Finally you'll need to install the latest version of `blockstack-bootstrap` by running;

```
$ npm install bootstrap
```

### Deployment

```
$ gulp prod
$ firebase deploy
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
