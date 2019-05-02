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

const createDisplaceReducerWithType = type => {
  return (state = { x: 0, y: 0 }, action) => {
    switch (action.type) {
      case types.DISPLACE:
      case type:
        return { x: action.payload.x, y: action.payload.y };
      default:
        return state;
    }
  }
}

export default combineReducers({
  toggled: toggleReducer,
  displacement: combineReducers({
    text: createDisplaceReducerWithType(types.DISPLACE_TEXT),
    image: createDisplaceReducerWithType(types.DISPLACE_IMAGE)  
  })
})