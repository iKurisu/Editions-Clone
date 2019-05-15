import { combineReducers } from 'redux';
import types from './types';

const positionReducer = (state = '0', action) => {
  switch (action.type) {
    case types.POSITION: 
      return action.payload;
    default:
      return state;
  }
}

const transitionReducer = (state = true, action) => {
  switch (action.type) {
    case types.TOGGLE_TRANSITION:
      return !state;
    default: 
      return state;
  }
}

export default combineReducers({
  position: positionReducer,
  canTransition: transitionReducer
})