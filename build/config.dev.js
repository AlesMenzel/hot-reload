var path = require('path');
var webpack = require('webpack');

module.exports = {
	devTool: "eval",
	output: {
		path: path.join(__dirname, '..', 'dist', 'client'),
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: [/node_modules/, path.join(__dirname, '..', 'src', 'server')],
				loader: "babel-loader"
			}
		]
	}
};
