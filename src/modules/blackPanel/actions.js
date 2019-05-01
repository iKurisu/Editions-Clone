import types from './types';

const setPosition = position => ({
  type: types.POSITION,
  payload: position
})

export default {
  setPosition
}