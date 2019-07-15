import { combineReducers } from 'redux';
import types from './types';

const toggleReducer = (state = true, action) => {
  switch (action.type) {
    case types.TOGGLE:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  toggled: toggleReducer
})