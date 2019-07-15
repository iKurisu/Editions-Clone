import types from './types';
import { combineReducers } from 'redux';

const sidesOpacityReducer = (state = 0, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDES_OPACITY:
      return +!state;
    default:
      return state;
  }
} 

const navOpacityReducer = (state = 0, { type, payload = !state }) => {
  switch (type) {
    case types.TOGGLE_NAV_OPACITY:
      return +payload;
    default:
      return state;
  }
}

export default combineReducers({
  sides: combineReducers({
    opacity: sidesOpacityReducer
  }),
  nav: combineReducers({
    opacity: navOpacityReducer
  })
})