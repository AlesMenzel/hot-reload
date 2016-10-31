var environment = process.env.NODE_ENV || 'production';

if (environment === 'development') {
	module.exports = require('./config.dev');
} else {
	module.exports = require('./config.prod');
}
