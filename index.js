var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');

const PORT = 4000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
		console.log('Listening at localhost:'+PORT);
  }
});
