import { ADD_PRODUCTS } from '../constants/actionTypes';
import { productsState } from '../constants/defaultState';

const productsReducer = (state = productsState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export default productsReducer;
