/**
 * Webpack config for IDE's that need one for path resolving
 */

const path = require('path')

module.exports = {
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@containers': path.resolve(__dirname, './src/containers'),
        '@scss': path.resolve(__dirname, './src/scss'),
        '@common': path.resolve(__dirname, './src/common')
      }
    }
}

