import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productReducer';
import valueBYNReducer from './valueBYNReducer';
import productOriginReducer from './productOriginReducer';

const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...productOriginReducer,
  ...valueBYNReducer,
});

export default reducers;
