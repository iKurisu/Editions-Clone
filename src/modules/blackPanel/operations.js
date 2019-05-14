import actions from './actions';

const { setPosition, toggleTransition } = actions;

const relocate = () => dispatch => {
  dispatch(toggleTransition())
  dispatch(setPosition('100%'));
  setTimeout(() => dispatch(toggleTransition()), 100);
} 

export default {
  relocate
}