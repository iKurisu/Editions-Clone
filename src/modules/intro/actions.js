import types from './types';

const toggle = () => ({
  type: types.TOGGLE
});

const displace = displacement => ({
  type: types.DISPLACE,
  payload: {
    displacement
  }
})

export default {
  toggle,
  displace
}