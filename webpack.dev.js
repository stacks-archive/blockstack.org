const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = merge(common, {
	devtool: 'inline-source-map',

	mode: 'development',


	module: {
		rules: [
			// sass
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader : 'resolve-url-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						}
					]
				})

			}
		]
	}


})


module.exports = config;