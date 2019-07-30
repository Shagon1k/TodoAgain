import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './configureStore.js'


const store = configureStore({isSSR: false})(window.__PRELOADED_STATE__)
delete window.PRELOADED_STATE

hydrate(
	<ReduxProvider store={store}>
		<BrowserRouter path='/'>
			<App />
		</BrowserRouter>
	</ReduxProvider>,
	document.getElementById("app")
);