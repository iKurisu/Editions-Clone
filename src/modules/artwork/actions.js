import types from './types';

const toggle = () => ({
  type: types.TOGGLE
});

const setFormat = format => ({
  type: types.SET_FORMAT,
  payload: format
})

const setId = id => ({
  type: types.SET_ID,
  payload: id
})

export default {
  toggle,
  setFormat,
  setId
}