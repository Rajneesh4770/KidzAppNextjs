import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer/rootReducer';

const middleware = [thunk];

export const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
