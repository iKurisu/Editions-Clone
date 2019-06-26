import actions from './actions';

const addItem = item => dispatch => {
  dispatch(actions.addItem(item))
  dispatch(actions.toggle());
}

export default {
  addItem
}