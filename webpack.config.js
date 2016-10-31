var environment = process.env.NODE_ENV || 'production';

// DEVELOPMENT
if (environment === 'development') {
	module.exports = require('./build/development.config.js');

// PRODUCTION
} else {
	module.exports = require('./build/production.config');
}
