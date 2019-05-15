import types from './types';

const setPosition = position => ({
  type: types.POSITION,
  payload: position
})

const toggleTransition = () => ({
  type: types.TOGGLE_TRANSITION
})

export default {
  setPosition,
  toggleTransition
}