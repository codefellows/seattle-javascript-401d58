let initialState = {
  count: 0,
  numberOfClicks: 0
};

// When we "dispatch" an action ...
// action is going to be an object that looks like this: { type: 'INCREMENT', payload: 1 }

const counterReducer = (state = initialState, action) => {

  // Object Deconstruction to pull out the type and payload from the action object
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return {
        count: state.count + payload,
        numberOfClicks: state.numberOfClicks + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - payload,
        numberOfClicks: state.numberOfClicks + 1
      };
    default:
      return state;
  }
}

export default counterReducer;

// ACTION CREATORS
// Calling these with dispatch will return an action object that can be passed to the reducer and change state
export function increment(increaseBy) {
  return {
    type: 'INCREMENT',
    payload: increaseBy
  }
}

export function decrement(decreaseBy) {
  return {
    type: 'DECREMENT',
    payload: decreaseBy
  }
}
