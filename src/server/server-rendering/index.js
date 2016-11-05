import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from '../../client/reducers'
import App from '../../client/app'
import { renderToString } from 'react-dom/server'

export default (app) => {
	app.use('/', (req, res) => {
		// Create a new Redux store instance
		const store = createStore(counterApp);

		// Render the component to a string
		const html = renderToString(
			<Provider store={store}>
				<App />
			</Provider>
		);

		// Grab the initial state from our Redux store
		const preloadedState = store.getState();

		// Send the rendered page back to the client
		res.render('index', {
			title: 'Server-side-render',
			html,
			preloadedState: JSON.stringify(preloadedState)
		});
	});
}
