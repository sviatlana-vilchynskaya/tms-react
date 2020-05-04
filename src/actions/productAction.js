import { ADD_PRODUCTS } from '../constants/actionTypes';

export const addProducts = (products = []) => ({
  type: ADD_PRODUCTS,
  payload: products,
});
