const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const MergeFilesPlugin = require('merge-files-webpack-plugin')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const { dev, isServer } = options
      const {
      	cssModules,
      	cssLoaderOptions,
      	postcssLoaderOptions,
      	sassLoaderOptions = {},
      	lessLoaderOptions = {},
      } = nextConfig

      // Support the user providing their own instance of ExtractTextPlugin.
      // If extractCSSPlugin is not defined we pass the same instance of ExtractTextPlugin to all css related modules
      // So that they compile to the same file in production
      let extractCSSPlugin =
        nextConfig.extractCSSPlugin || options.extractCSSPlugin

      //the ORIGINAL from next-css
      if (!extractCSSPlugin) {
        extractCSSPlugin = new ExtractTextPlugin({
          filename: 'static/style.css'
        })
        config.plugins.push(extractCSSPlugin)
        options.extractCSSPlugin = extractCSSPlugin
        if (!isServer) {
          config = commonsChunkConfig(config, /\.(sass|scss|less|css)$/)
        }
      }

      //the OVERWRITTEN
      //using MergeFilesPlugin to combile all css files into one file
      //ref: https://github.com/zeit/next-plugins/issues/21
      if (!isServer && !dev) {
    	// Override next-css configuration
    	options.extractCSSPlugin.filename = 'static/[name].css';
    	// Merge all CSS in one file
    	config.plugins.push(
      	  new MergeFilesPlugin({
            filename: 'static/style.css',
            test: /\.css/,
            deleteSourceFiles: true,
      	  })
    	)
      }

      options.defaultLoaders.css = cssLoaderConfig(config, extractCSSPlugin, {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer
      })

      options.defaultLoaders.sass = cssLoaderConfig(config, extractCSSPlugin, {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: 'sass-loader',
            options: sassLoaderOptions
          }
        ]
      })

      options.defaultLoaders.less = cssLoaderConfig(config, extractCSSPlugin, {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: 'less-loader',
            options: lessLoaderOptions
          }
        ]
      })

      config.module.rules.push({
        test: /\.css$/,
        use: options.defaultLoaders.css
      })

      config.module.rules.push({
      	test: /\.scss$/,
      	use: options.defaultLoaders.sass
      },{
      	test: /\.sass$/,
      	use: options.defaultLoaders.sass
      })

      config.module.rules.push({
        test: /\.less$/,
        use: options.defaultLoaders.less
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
