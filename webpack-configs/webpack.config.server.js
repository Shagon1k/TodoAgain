const webpack = require('webpack');
const path = require('path');

module.exports ={
	entry: './src/server/index.js',
	output: {
		path: path.resolve(__dirname, '../public/'),
		publicPath: '../public/',
		filename: 'server.bundle.js',
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
};