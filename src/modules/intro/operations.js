import introActions from './actions';
import { appActions } from '../app';

const { toggle } = introActions;
const { setLocation } = appActions;

const fadeIntro = () => dispatch => {
  dispatch(toggle());
  dispatch(setLocation('fading-intro'));
  setTimeout(() => dispatch(setLocation('')), 1200);
}

export default {
  fadeIntro
}