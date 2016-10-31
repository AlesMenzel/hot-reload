var webpack = require('webpack');

module.exports = {
	devTool: "source-map",
	output: {
		filename: "[name].js",
		publicPath: "/assets/"
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true
			},
			comments: false,
			sourceMap: false
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: [/node_modules/],
				loader: "babel-loader"
			}
		]
	}
};
