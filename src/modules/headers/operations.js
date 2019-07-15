import actions from './actions';
import { blackPanelActions } from 'modules/blackPanel';

const { setPosition } = blackPanelActions;
const { toggleNavOpacity, toggleSidesOpacity } = actions;

const fadeGalery = (history, route) => dispatch => {
  dispatch(setPosition('-100%'));
  dispatch(toggleNavOpacity(0));
  setTimeout(() => dispatch(toggleSidesOpacity()), 400);
  setTimeout(() => history.push(route), 900);
  setTimeout(() => dispatch(toggleNavOpacity()), 1800);
}

export default {
  fadeGalery
}