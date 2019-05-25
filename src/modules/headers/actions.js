import types from './types';

const toggleSidesOpacity = () => ({
  type: types.TOGGLE_SIDES_OPACITY
})

const toggleNavOpacity = payload => ({
  type: types.TOGGLE_NAV_OPACITY,
  payload
})

export default { 
  toggleSidesOpacity,
  toggleNavOpacity
}