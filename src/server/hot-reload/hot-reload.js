import webpack from 'webpack';
import webpackConfig from '../../../build/client/config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

// USE IN DEVELOPMENT ONLY
export default (app) => {
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler, {
		log: console.log
	}));
}
