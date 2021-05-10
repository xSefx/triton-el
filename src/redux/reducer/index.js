import { combineReducers } from 'redux';

import dataReducer from './dataReducer.js';
import cartReducer from './cartReducer.js';

export default combineReducers({
  items: dataReducer,
  cart: cartReducer,
});
