const webpack = require('webpack');
const path = require('path');

const serverConfig = {
	entry: ['babel-polyfill', './src/server/index.js'],
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
        use: [
          {
            loader: 'babel-loader',
          }
        ]
			}
		]
	},
};

module.exports = serverConfig;