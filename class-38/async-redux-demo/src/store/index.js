import { combineReducers, createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';

import stuffReducer from "./stuff-reducer.js";

const reducers = combineReducers( {stuff:stuffReducer } );

export default createStore(reducers, applyMiddleware(thunk));
