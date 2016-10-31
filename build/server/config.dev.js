var path = require('path');
var nodeExternals = require('webpack-node-externals');
var config = require('../config.dev');

module.exports = {
	devTool: config.devTool,
	entry: [
		"./src/server/index.js"
	],
	output: {
		path: path.join(__dirname, '..', '..', 'dist', 'server'),
		filename: "server.js",
		publicPath: config.output.publicPath
	},
	plugins: config.plugins,
	module: config.module,
	externals: [nodeExternals()],
	target: "node"
};
