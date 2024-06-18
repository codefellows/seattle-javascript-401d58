let initialState = {
  totalVotes: 0,
  currentLeader: "TBD",
};

export default function votes(state = initialState, action) {

  const { type, payload } = action;

  switch(type) {
    case "VOTE": {
      return {
        ...state,
        totalVotes: state.totalVotes + 1,
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }

  }

}
