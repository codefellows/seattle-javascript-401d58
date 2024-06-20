import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import stuffReducer from "./stuff-reducer.js";
import counterReducer from "./counter-reducer.js";

const reducers = combineReducers(
  {
    stuff: stuffReducer,
    counter: counterReducer
  }
)

export default configureStore({
  reducer: reducers
})
