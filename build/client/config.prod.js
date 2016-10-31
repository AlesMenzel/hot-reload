var path = require('path');
var config = require('../config.prod');

module.exports = {
	devTool: config.devTool,
	entry: {
		bundle: "./src/client/index.js"
	},
	output: {
		path: path.join(__dirname, '..', '..', 'dist', 'client'),
		filename: config.output.filename,
		publicPath: config.output.publicPath
	},
	plugins: config.plugins,
	module: config.module,
	target: "web"
};
