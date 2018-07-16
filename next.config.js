const { fetchBlogPosts } = require('./common/lib')
const path = require('path')
const glob = require('glob')
const { resolve } = require('./webpack.config.js')
const withPlugins = require('next-compose-plugins')
const withStyles = require('./next-css-sass')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withImages = require('next-optimized-images')

const prod = process.env.NODE_ENV === 'production'
const imgix = prod
  ? 'https://blockstackorgv2.netlify.com/_next/static/images/'
  : false
/**
 * Next/Webpack config
 */
const config = {
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    // const { posts } = await fetchBlogPosts()
    const posts = []

    // transform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = posts.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/blog/${post.urlSlug}`]: {
            page: '/blog/single',
            query: { slug: post.urlSlug }
          }
        }),
      {}
    )

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/faq': { page: '/faq' },
      '/careers': { page: '/careers' },
      '/funding': { page: '/funding' },
      '/install': { page: '/install' },
      '/papers': { page: '/papers' },
      '/press': { page: '/press' },
      '/videos': { page: '/videos' },
      '/what-is-blockstack': { page: '/what-is-blockstack' },
      '/legal/disclaimers': { page: '/legal/disclaimers' },
      '/legal/privacy-policy': { page: '/legal/privacy-policy' },
      '/legal/terms-of-use': { page: '/legal/terms-of-use' },
      '/tutorials': { page: '/tutorials' },
      '/tutorials/hello-blockstack': { page: '/tutorials/hello-blockstack' },
      '/tutorials/managing-data-with-gaia': {
        page: '/tutorials/managing-data-with-gaia'
      },
      '/tutorials/multi-player-storage': {
        page: '/tutorials/multi-player-storage'
      },
      '/tutorials/todo-list': { page: '/tutorials/todo-list' }
    })
  },
  sassLoaderOptions: {
    data: [
      '@import "setup/variables"; @import "setup/mixins"; @import "setup/icons"; @import "setup/animations";'
    ],
    includePaths: ['./', 'scss', 'assets', 'node_modules']
      .map((d) => path.join(__dirname, d))
      .map((g) => glob.sync(g))
      .reduce((a, c) => a.concat(c), [])
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    // Further custom configuration here
    config.resolve = resolve
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
      include: [path.resolve(__dirname, 'assets/fonts')]
    })
    return config
  }
}

const plugins = [
  withStyles,
  [
    withImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 65
      },
      optipng: {
        optimizationLevel: 3
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      webp: {
        preset: 'default',
        quality: 65
      }
    }
  ],
  withMDX
]

module.exports = withPlugins([...plugins], config)
