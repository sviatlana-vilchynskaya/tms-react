import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productReducer';

const reducers = combineReducers({
  basket: basketReducer,
  load: loadReducer,
  products: productsReducer,
});

export default reducers;
