import {createStore, combineReducers} from 'redux';

import votes from './votesReducer.js';
import candidates from './candidatesReducer.js';

let reducers = combineReducers({votes, candidates});

export default createStore(reducers);
