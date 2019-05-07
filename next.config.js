const routes = require('./routes')
const path = require('path')
const { resolve } = require('./webpack.config.js')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withImages = require('next-optimized-images')
const withBundleAnalyzer = require('./config/bundle-analyzer')

/**
 * Next/Webpack config
 */
const config = {
  async exportPathMap() {
    return routes()
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    config.resolve = {
      ...config.resolve,
      ...resolve,
      alias: {
        ...config.resolve.alias,
        ...resolve.alias
      }
    }
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
      include: [path.resolve(__dirname, 'assets/fonts')]
    })
    config.node = {
      ...config.node,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
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
      handleImages: ['svg', 'webp', 'gif'],
      inlineImageLimit: -1,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      optimizeImagesInDev: false,
      url: true,
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
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      }
    }
  ],
  withMDX
]

module.exports = withPlugins([...plugins], config)
