import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import app from 'modules/app';
import intro from 'modules/intro';
import blackPanel from 'modules/blackPanel';
import artwork from 'modules/artwork';
import headers from 'modules/headers';
import cart from 'modules/cart';

const rootReducer = combineReducers({
  app,
  intro,
  blackPanel,
  artwork,
  headers,
  cart
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;