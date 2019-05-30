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

const itemsMatch = (item1, item2) => {
  const titlesMatch = item1.title === item2.title;
  const dimensionsMatch = item1.format.dimensions === item2.format.dimensions;

  return titlesMatch && dimensionsMatch;
}

const itemInCart = (cart, item) => {
  return cart.some(cartItem => itemsMatch(cartItem, item));
};

const updateAmount = type => {
  if (type !== 'INCREASE' && type !== 'DECREASE') {
    throw new Error('Invalid type. Type must be INCREASE or DECREASE.')
  }

  return (state, item) => {
  return state.reduce((acc, curr) => acc.concat(
      itemsMatch(curr, item)
        ? { 
            ...curr, 
            amount: type === 'INCREASE' ? curr.amount + 1 : curr.amount - 1 
          } 
      : curr
  ), [])
}
}

const increaseAmount = updateAmount('INCREASE');
const decreaseAmount = updateAmount('DECREASE');

const addItem = (state, item) => {
  return itemInCart(state, item) 
    ? increaseAmount(state, item)
    : [...state, item]
};

const oneLeft = (cart, item) => {
  return cart.some(cartItem => itemsMatch(cartItem, item) && cartItem.amount === 1)
}

const removeItem = (state, item) => {
  return oneLeft(state, item)
    ? state.filter(cartItem => !itemsMatch(cartItem, item))
    : decreaseAmount(state, item);
}

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM: 
      return addItem(state, action.payload);
    case types.REMOVE_ITEM:
      return removeItem(state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  toggled: toggleReducer,
  items: itemReducer
})