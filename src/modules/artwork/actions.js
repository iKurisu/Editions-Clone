import types from './types';

const toggle = () => ({
  type: types.TOGGLE
});

const setFormat = format => ({
  type: types.SET_FORMAT,
  payload: format
})

export default {
  toggle,
  setFormat
}