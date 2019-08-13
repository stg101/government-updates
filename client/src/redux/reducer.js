import { combineReducers } from "redux";

const initialState = {
  locations: {}
};

function locationsReducer(state = initialState.locations, action = {}) {
  switch (action.type) {
    case "ADD_SOLUTIONS": {
      return action.payload;
    }
    default:
      return state;
  }
}

const reducer = combineReducers({
  locations: locationsReducer
});

export default reducer;
