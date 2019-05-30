import types from './types';

const toggle = () => ({
  type: types.TOGGLE_CART
});

const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
})

const removeItem = item => ({
  type: types.REMOVE_ITEM,
  payload: item
})

export default {
  toggle,
  addItem,
  removeItem
}