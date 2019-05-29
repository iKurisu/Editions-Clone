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

const itemInCart = (cart, item) => {
  return cart.map(item => item.title).includes(item.title);
};

const increaseAmount = (state, item) => {
  return state.reduce((acc, curr) => acc.concat(
    curr.title === item.title
      ? { ...curr, amount: curr.amount + 1 }
      : curr
  ), [])
}

const addItem = (state, item) => {
  return itemInCart(state, item) 
    ? increaseAmount(state, item)
    : [...state, item]
};

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM: 
      return addItem(state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  toggled: toggleReducer,
  items: itemReducer
})