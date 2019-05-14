import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import intro from 'modules/intro';
import blackPanel from 'modules/blackPanel';
import artwork from 'modules/artwork';

const rootReducer = combineReducers({
  intro,
  blackPanel,
  artwork
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;