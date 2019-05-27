import types from './types';
import { combineReducers } from 'redux';

const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_CART:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  toggled: toggleReducer
})