import { combineReducers } from "redux";

const initialState = {
  locations: {},
  comments: {}
};

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

const reducer = combineReducers({
  locations: locationsReducer,
  comments: commentsReducer
});

export default reducer;
