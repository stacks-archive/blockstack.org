/**
 * Webpack config for IDE's that need one for path resolving
 */

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@containers': path.resolve(__dirname, './containers'),
      '@scss': path.resolve(__dirname, './scss'),
      '@assets': path.resolve(__dirname, './assets'),
      '@common': path.resolve(__dirname, './common')
    }
  }
}
