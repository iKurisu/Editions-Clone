import types from "./types";
import { combineReducers } from "redux";

const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE:
      return !state;
    default:
      return state;
  }
};

const formatReducer = (state = {}, action) => {
  switch(action.type) {
    case types.SET_FORMAT:
      return action.payload;
    default:
      return state;
  }
}

const idReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_ID:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  toggled: toggleReducer,
  format: formatReducer,
  id: idReducer
});
