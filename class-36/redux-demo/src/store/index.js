import {createStore, combineReducers} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import counter from './counter.js';

let reducers = combineReducers({ counter });

const store = createStore(reducers, composeWithDevTools());

export default store;
