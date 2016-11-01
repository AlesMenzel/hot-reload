import Express from 'express';
import path from 'path';
import React from 'react';
import hotReload from './hot-reload/hot-reload';
// import { renderToString } from 'react-dom/server';

const app = Express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'production';

app.set('views', path.resolve('views'));
app.set('view engine', 'pug');

if (environment === 'development') {
	hotReload(app);
}

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Title'
	});
});

app.use('/assets/', Express.static('dist/client'));

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
