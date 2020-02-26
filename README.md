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

[![Discord](https://img.shields.io/discord/621759717756370964)](https://chat.blockstack.org)
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

### Adding pages / routes

Next.js is first and foremost a directory/file based framework. If you look in the `pages` directory, you should get a pretty good idea of the routes contained within this project. To add a new route, simply create a file or folder with the route you want to add, and start coding! Files can be `*.js` or `*.mdx`

The blog gets its data from an external source (Ghost) and is parsed via `/blog` and `/blog/single`. Even though the data is external, you can still get some insight into how the routes work via the directory structure.

#### Exporting new pages

Because we are exporting the react application to run in places only static sites can, we have to pass our routes to the `next.config.js` file. We have a [`routes.js`](https://github.com/blockstack/blockstack.org/blob/master/routes.js) file that contains our static and dynamic routes. When adding a new page, make sure to add the path to this file.

Next.js has a function called `exportPathMap` in the `next.config.js` which allows the export to know what to export! You can also fetch data at this point to generate dynamic pages. Take a look at [`next.config.js`](https://github.com/blockstack/blockstack.org/blob/master/next.config.js) to see an example.

#### Sitemap

- [about](https://blockstack.org/about)
- [careers](https://blockstack.org/careers)
- [funding](https://blockstack.org/funding)
- [install](https://blockstack.org/install)
- [faq](https://blockstack.org/faq)
- [papers](https://blockstack.org/papers)
- [press](https://blockstack.org/press)
- [videos](https://blockstack.org/videos)
- [roadmap](https://blockstack.org/roadmap)
- [what-is-blockstack](https://blockstack.org/what-is-blockstack)
- legal
  - [disclaimers](https://blockstack.org/legal/disclaimers)
  - [privacy-policy](https://blockstack.org/legal/privacy-policy)
  - [terms-of-use](https://blockstack.org/legal/terms-of-use)
- [blog](https://blockstack.org/blog)
  - Many blog posts (dynamic pages)
