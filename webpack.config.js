/**
 * Webpack config for IDE's that need one for path resolving
 */

module.exports = {
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@containers': path.resolve(__dirname, './src/containers'),
        '@common': path.resolve(__dirname, './src/common')
      }
    }
}

