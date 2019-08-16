import { combineReducers } from "redux";

const initialState = {
  locations: {},
  comments: {},
  votes: {},
  parentLocation: {
    authority: "martin vizcarra cornejo",
    scope: "Co",
    name: "peru"
  }
};

function parentLocationReducer(
  state = initialState.parentLocation,
  action = {}
) {
  switch (action.type) {
    case "CHANGE_PARENT_LOCATION": {
      return action.payload;
    }
    default:
      return state;
  }
}

function locationsReducer(state = initialState.locations, action = {}) {
  switch (action.type) {
    case "ADD_LOCATIONS": {
      return action.payload;
    }
    default:
      return state;
  }
}

function commentsReducer(state = initialState.comments, action = {}) {
  switch (action.type) {
    case "ADD_COMMENTS": {
      return action.payload;
    }
    default:
      return state;
  }
}

function votesReducer(state = initialState.votes, action = {}) {
  switch (action.type) {
    case "VOTE_COMMENT": {
      let payload = action.payload;
      let newVoteState = payload.vote;
      if (state[payload.pk] && payload.vote === state[payload.pk].vote)
        newVoteState = "none";

      let vote = { pk: payload.pk, vote: newVoteState };

      let newState = JSON.parse(JSON.stringify(state));
      newState[vote.pk] = vote;
      return newState;
    }
    default:
      return state;
  }
}

const reducer = combineReducers({
  locations: locationsReducer,
  comments: commentsReducer,
  votes: votesReducer,
  parentLocation: parentLocationReducer
});

export default reducer;
