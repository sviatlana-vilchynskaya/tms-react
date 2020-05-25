import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productReducer';
import productOriginReducer from './productOriginReducer';
import currencyReducer from './currencyReducer';

const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...productOriginReducer,
  ...currencyReducer,
});

export default reducers;
