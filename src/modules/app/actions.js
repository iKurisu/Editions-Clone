import types from './types';

const setLocation = location => ({
  type: types.SET_LOCATION,
  payload: location
})

export default {
  setLocation
}