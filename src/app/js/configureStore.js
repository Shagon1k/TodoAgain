import { createStore, compose } from 'redux';
import appReducer from './store/store.reducer';

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

export default (initialState) => {
	const enhancer = composeEnhancers();
	const store = createStore(appReducer, initialState, enhancer);

	return store;
}