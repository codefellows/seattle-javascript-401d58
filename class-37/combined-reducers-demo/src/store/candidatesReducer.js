let initialState = [
  {name: 'John Cokos', votes: 0, eligible: true},
  {name: 'Cathy Cokos', votes: 0, eligible: true},
  {name: 'Zach Cokos', votes: 0, eligible: true},
  {name: 'Allie Cokos', votes: 0, eligible: true},
];

export default function candidates(state = initialState, action) {
   const { type, payload } = action;

   switch(type) {
    case "VOTE": {
      let newState = state.map(candidate => {
        if(candidate.name === payload.name) {
          return {
            ...candidate,
            votes: candidate.votes + 1
          }
        } else {
          return candidate;
        }
      });
      return newState
    }
    case "DISABLE": {
      let newState = state.map(candidate => {
        if(candidate.name === payload.name) {
          return {
            ...candidate,
            eligible: false
          }
        } else {
          return candidate;
        }
      });
      return newState
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
   }
}

