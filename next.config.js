const routes = require('./routes')
const path = require('path')
const { resolve } = require('./webpack.config.js')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withImages = require('next-optimized-images')

/**
 * Next/Webpack config
 */
const config = {
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    return routes()
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
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      loader: 'responsive-loader',
      options: {
        quality: 60,
        adapter: require('responsive-loader/sharp'),
        placeholder: true,
        placeholderSize: 80,
        name: 'static/images/[name]-[hash]-[width].[ext]'
      }
    })
    return config
  }
}

const plugins = [
  [
    withImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      optimizeImagesInDev: false,
      mozjpeg: false,
      optipng: false,
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
