import { combineReducers } from 'redux';
import types from './types';

const locationReducer = (state = 'intro', action) => {
  switch (action.type) {
    case types.SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  location: locationReducer
})