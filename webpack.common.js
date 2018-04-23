const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {

	context: path.resolve(__dirname, 'src'),

	entry : {
		app : './js/application.js'
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},

	plugins : [

    new ExtractTextPlugin('[name].css'),

		new HtmlWebpackPlugin({
			title : 'Easyset',
			template: './templates/index.html',
			filename: 'index.html',
			inject:'body'
		})

	],

	resolve : {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/js'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css']
	},

	module : {
		rules : [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

			{
        test: /\.css$/,
        include: /node_modules/,
				use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
        })
      },

      // images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
              outputPath: '',
              useRelativePath: false
            }
          }
        ]
      },

      // fonts
      {
      	test: /\.(woff|woff2|eot|ttf|otf)$/,
      	//use: ['url-loader']
      	use: ['file-loader?name=fonts/[name].[ext]']
      },

      //
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}

		]
	}

}

module.exports = config;


