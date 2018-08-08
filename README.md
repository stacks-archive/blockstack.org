<p align="center">
  <br>
  <a href="https://blockstack.org">
    <img src="https://media.githubusercontent.com/media/blockstack/designs/master/logo/RGB/bug/blockstack-bug-rounded-256x256.png" width=72 height=72>
  </a>

  <h3 align="center">Blockstack.org</h3>

  <p align="center">
    The official website for the latest information on Blockstack
    <br>
    <a href="http://blockstack.org"><strong>blockstack.org</strong></a>
    <br>
    <br>
    <a href="https://github.com/blockstack/blockstack.org#contributing">Contribute</a>
    &middot;
    <a href="https://github.com/blockstack/">Explore</a>
  </p>
</p>

<br>

## Blockstack.org

[![Slack](https://img.shields.io/badge/join-slack-e32072.svg?style=flat)](http://slack.blockstack.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

A live version of this site can be found online at https://blockstack.org.

## Technology
This is a react application built using [next.js](https://github.com/zeit/next.js/). It is statically exported to markup + javascript. It is using [redux-bundler]() (an abstraction on top of redux + reselect) for state management. _Most_ of the content is written in Markdown, parsed using [`MDX`]().

## Contributing
Be sure to have node + npm/yarn installed before getting started.

Fork the repo and pull it down to your machine, and then in the directory run:

```
npm install
npm run dev
```
OR
```
yarn install
yarn dev
```

Running the `dev` task will launch a local instance of the site with all the modern advantages of front end work (hot module reloading, etc).

### Updating Content


### Adding pages / routes
Next.js is first and foremost a directory/file based framework. If you look in the `pages` directory, you should get a pretty good idea of the routes contained within this project. To add a new route, simply create a file or folder with the route you want to add, and start coding! Files can be `*.js` or `*.mdx`

The blog gets its data from an external source (Ghost) and is parsed via `/blog` and `/blog/single`. Even though the data is external, you can still get some insight into how the routes work via the directory structure.

#### Exporting new pages
Because we are exporting the react application to run in places only static sites can, we have to define our routes in the `next.config.js` file. Next.js has a function called `exportPathMap` which allows the export to know what to export! You can also fetch data at this point to generate dynamic pages. Take a look at [next.config.js]() to see an example.

#### Sitemap

- [about](https://blockstackorgv2.netlify.com/about)
- [careers](https://blockstackorgv2.netlify.com/careers)
- [funding](https://blockstackorgv2.netlify.com/funding)
- [install](https://blockstackorgv2.netlify.com/install)
- [faq](https://blockstackorgv2.netlify.com/faq)
- [papers](https://blockstackorgv2.netlify.com/papers)
- [press](https://blockstackorgv2.netlify.com/press)
- [videos](https://blockstackorgv2.netlify.com/videos)
- [what-is-blockstack](https://blockstackorgv2.netlify.com/what-is-blockstack)
- legal
  - [disclaimers](https://blockstackorgv2.netlify.com/legal/disclaimers)
  - [privacy-policy](https://blockstackorgv2.netlify.com/legal/privacy-policy)
  - [terms-of-use](https://blockstackorgv2.netlify.com/legal/terms-of-use)
- [blog](https://blockstackorgv2.netlify.com/blog)
  - [universal-wallet-bounty-recap](https://blockstackorgv2.netlify.com/blog/universal-wallet-bounty-recap)
  - [announcing-a-universal-dapp-store](https://blockstackorgv2.netlify.com/blog/announcing-a-universal-dapp-store)
  - [a-1m-request-for-social-networks](https://blockstackorgv2.netlify.com/blog/a-1m-request-for-social-networks)
  - [blockstack-shapeshift-50-000-for-a-universal-wallet-app](https://blockstackorgv2.netlify.com/blog/blockstack-shapeshift-50-000-for-a-universal-wallet-app)
  - [blockstack-community-rewards-program](https://blockstackorgv2.netlify.com/blog/blockstack-community-rewards-program)
  - [gaining-ownership-of-our-digital-lives](https://blockstackorgv2.netlify.com/blog/gaining-ownership-of-our-digital-lives)
  - [blockstack-berlin-videos-now-live](https://blockstackorgv2.netlify.com/blog/blockstack-berlin-videos-now-live)
  - [connecting-users-and-their-data-on-the-decentralized-internet](https://blockstackorgv2.netlify.com/blog/connecting-users-and-their-data-on-the-decentralized-internet)
  - [50-000-signature-bounty-to-decentralize-communication](https://blockstackorgv2.netlify.com/blog/50-000-signature-bounty-to-decentralize-communication)
  - [encrypted-token-portfolio-bounty-recap](https://blockstackorgv2.netlify.com/blog/encrypted-token-portfolio-bounty-recap)
  - [blockstack-token-sale-recap](https://blockstackorgv2.netlify.com/blog/blockstack-token-sale-recap)
  - [registration-extension](https://blockstackorgv2.netlify.com/blog/registration-extension)
  - [blockstack-berlin](https://blockstackorgv2.netlify.com/blog/blockstack-berlin)
  - [blockstack-token-sale-registration](https://blockstackorgv2.netlify.com/blog/blockstack-token-sale-registration)
  - [browser-public-alpha](https://blockstackorgv2.netlify.com/blog/browser-public-alpha)
- [tutorials](https://blockstackorgv2.netlify.com/tutorials)
  - [hello-blockstack](https://blockstackorgv2.netlify.com/tutorials/hello-blockstack)
  - [managing-data-with-gaia](https://blockstackorgv2.netlify.com/tutorials/managing-data-with-gaia)
  - [multi-player-storage](https://blockstackorgv2.netlify.com/tutorials/multi-player-storage)
  - [todo-list](https://blockstackorgv2.netlify.com/tutorials/todo-list)
