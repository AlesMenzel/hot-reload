var path = require('path');
var nodeExternals = require('webpack-node-externals');
var config = require('../config.prod');

module.exports = {
	devTool: config.devTool,
	entry: {
		server: "./src/server/index.js"
	},
	output: {
		path: path.join(__dirname, '..', '..', 'dist', 'server'),
		filename: config.output.filename,
		publicPath: config.output.publicPath
	},
	plugins: config.plugins,
	module: config.module,
	externals: [nodeExternals()],
	target: "node"
};
