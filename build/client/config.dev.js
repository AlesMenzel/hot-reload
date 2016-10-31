var path = require('path');
var config = require('../config.dev');

module.exports = {
	devTool: config.devTool,
	entry: [
		"webpack-hot-middleware/client",
		"./src/client/index.js"
	],
	output: {
		path: path.join(__dirname, '..', '..', 'dist', 'client'),
		filename: "bundle.js",
		publicPath: config.output.publicPath
	},
	plugins: config.plugins,
	module: config.module,
	target: "web"
};
