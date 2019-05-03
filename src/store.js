import { createStore, combineReducers } from 'redux';
import intro from 'modules/intro';
import blackPanel from 'modules/blackPanel';
import artwork from 'modules/artwork';

const rootReducer = combineReducers({
  intro,
  blackPanel,
  artwork
});
const store = createStore(rootReducer);

export default store;