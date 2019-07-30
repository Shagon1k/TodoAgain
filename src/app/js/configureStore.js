import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from './store/middlewares/logger.middleware';
import appReducer from './store/store.reducer';
import { rootSaga } from './store/store.saga';

const isBrowser = typeof window === 'object';
const hasDevTools = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = hasDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const configureStore = ({isSSR = false} = {}) => initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const storeMiddlewareEnhancer =
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware,
    );
  
  const enhancer = composeEnhancers(storeMiddlewareEnhancer);

  const store = createStore(
    appReducer,
    initialState, 
    enhancer
  );

  // TODO: define PROD/DEV to save store to window only on dev mode
  if (isBrowser) {
    window.appStore = store;
  }

  if (!isSSR) {
    sagaMiddleware.run(rootSaga);
  }
  
  return store;

}

export default configureStore;