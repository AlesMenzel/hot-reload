import Express from 'express';
import path from 'path';
import React from 'react';
import hotReload from './hot-reload';
import serverRendering from './server-rendering';
// import { renderToString } from 'react-dom/server';

const app = Express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'production';

app.set('views', path.resolve('views'));
app.set('view engine', 'pug');

if (environment === 'development') {
	hotReload(app);
}

app.use('/assets/', Express.static('dist/client'));

if (environment === 'production') {
	serverRendering(app);
}

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Title'
	});
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
