import { createStore, combineReducers } from 'redux';
import intro from 'modules/intro';
import blackPanel from 'modules/blackPanel';

const rootReducer = combineReducers({
  intro,
  blackPanel
});
const store = createStore(rootReducer);

export default store;