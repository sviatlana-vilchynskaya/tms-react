import { createActions } from 'redux-actions';

export const {
  addProducts,
  searchProducts,
} = createActions(
  'ADD_PRODUCTS',
  'SEARCH_PRODUCTS',
);
