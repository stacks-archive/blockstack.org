
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');


const staging = process.env.NODE_ENV === "staging";
const production = process.env.NODE_ENV === "production";
const hashFilenames = staging || production;  // cache busting



	// process : {
	// 	traceDeprication : true
	// },



process.traceDeprecation = true

const config = {

	context: path.resolve(__dirname, 'src'),
	entry: {
		app	 : ['./js/application.js']
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: hashFilenames ? '[name].[hash].js' : '[name].js',
		publicPath: '/'
	},

	devtool: 'source-map',

	plugins: [
		new WebpackNotifierPlugin(),

		new ExtractTextPlugin(hashFilenames ? '[name].[hash].css' : '[name].css'),

		new HtmlWebpackPlugin({
			title : 'Transmit Live',
			template: './templates/index.html',
			filename: 'index.html',
			inject:'body'
		}),

		new webpack.EnvironmentPlugin(["NODE_ENV"])

	],

	module: {
		rules : [
			{
				test:	/\.(otf|eot|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/' + (hashFilenames ? '[name].[hash].[ext]' : '[name].[ext]')
			},
			{
				test:	/\.(png|jpg|gif|ico)$/,
				loader: 'file-loader?name=images/' + (hashFilenames ? '[name].[hash].[ext]' : '[name].[ext]')
			},

			{
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
        ]
      },
			// {
			// 	test:	/\.css$/,
			// 	loader: ExtractTextPlugin.extract({
			// 			fallback: 'style-loader',
			// 			use: 'css-loader?importLoaders=1!postcss-loader'
			// 		})
			// },
			// {
			// 	test: /\.scss$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use:'css-loader?sourceMap&importLoaders=1!postcss-loader?sourceMap=true!resolve-url-loader!sass-loader?sourceMap=true&sourceMapContents=true'
			// 	})
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test:	/\.json$/,
				loader: 'json-loader'
			},
			{
				test:	/\.mp4$/,
				loader: 'file-loader'
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/js'),
			path.resolve(__dirname, 'src/images'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css'],
		alias: {}
	}

}

module.exports = config;
