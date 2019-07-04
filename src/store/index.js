import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers =
  (__DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
