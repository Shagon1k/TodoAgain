const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: ["react-hot-loader/patch", "./src/app/js"],
	output: {
		path: path.resolve(__dirname, '../public/'),
		publicPath: '../public/',
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