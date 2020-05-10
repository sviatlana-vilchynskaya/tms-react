import { handleActions } from 'redux-actions';

import { addProducts } from '../actions/productAction';
import { productsState } from '../constants/defaultState';

export default {
  products: handleActions({
    [addProducts]: (state, { payload = [] }) => payload,
  }, productsState),
};
