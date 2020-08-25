import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [
  applyMiddleware(thunk),
  ...(process.env.NODE_ENV !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()]
    : []),
];

const enhancer: (...args: any[]) => any = compose(...middlewares);

const store = (initialState: any) => {
  return createStore(rootReducer, initialState, enhancer);
};

export default store;
