const withSass = require('@zeit/next-sass')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const optimizedImages = require('next-images')

const path = require('path')
const glob = require('glob')

const { resolve } = require('./webpack.config.js')
module.exports = withMDX(
  optimizedImages(
    withSass({
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
    })
  )
)
