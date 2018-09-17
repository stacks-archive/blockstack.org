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
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          enforce: true,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true
        }
      }
    }
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
