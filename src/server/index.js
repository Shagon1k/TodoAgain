import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";

import App from '../app/js/components/App.jsx';
import configureStore from '../app/js/configureStore.js';

const port = 3000;
const app = express();

app.use(express.static('public'));

const renderFullPage = (html) => (
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<title>TodoApp</title>
		<script defer src="bundle.js"></script>
	</head>
	<body>
		<div id="app">${html}</div>
	</body>
	</html>`
);

const handleRender = (req, res) => {
	const context = {};
	const store = configureStore();
	const app = (
		<ReduxProvider store={ store }>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</ReduxProvider>
		)
	const renderedApp = ReactDOMServer.renderToString(app);

	if (context.url) {
		return res.redirect(context.url)
	}

	res.send(renderFullPage(renderedApp));
}

app.get('*', handleRender);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})