let initialState = {
  food: []
}

export default function stuffReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return { ...state, food: payload };
    default:
      return state;
  }
}


