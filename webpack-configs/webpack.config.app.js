const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = {
	entry: ['babel-polyfill', './src/app/js'],
	output: {
		path: path.resolve(__dirname, '../public/'),
    publicPath: '../public/',
    chunkFilename: '[name].[contenthash].bundle.js',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
		]
	},
	devtool: 'source-map',
	plugins: [
	 	new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin({
			sourceMap: true
		})
	]
}

module.exports = clientConfig;