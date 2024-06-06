'use strict';

// Handle an action ... actions are an object that have 2 properties
// 1: type - the type of action that is being dispatched
// 2: payload - the data that is being sent to the reducer
const ourReducer = (state, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'ADD_PERSON':
      return { ...state, people: [...state.people, action.payload] }
    default:
      return state;
  }

}

export default ourReducer;


/*
  let action = { type: 'INCREMENT'};
  let initialState = { count: 0 };
  let expectedState = { count: 1 };
  expect (ourReducer(initialState, action)).toEqual(expectedState);
*/
