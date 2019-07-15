import types from './types';

const setLocation = location => ({
  type: types.SET_LOCATION,
  payload: location
})

const toggleCloneIntersection = payload => ({
  type: types.TOGGLE_CLONE_INTERSECTION,
  payload
})

export default {
  setLocation,
  toggleCloneIntersection
}