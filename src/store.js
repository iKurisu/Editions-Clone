import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import app from 'modules/app';
import intro from 'modules/intro';
import blackPanel from 'modules/blackPanel';
import artwork from 'modules/artwork';
import headers from 'modules/headers';

const rootReducer = combineReducers({
  app,
  intro,
  blackPanel,
  artwork,
  headers
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;