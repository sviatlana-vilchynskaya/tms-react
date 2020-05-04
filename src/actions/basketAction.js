import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants/actionTypes';

const defaultPayLoad = { productId: '', priceValue: 0, priceCurrency: '' };
export const addToBasket = (payload = defaultPayLoad) => ({
  type: ADD_TO_BASKET,
  payload,
});

export const removeFromBasket = (payload = defaultPayLoad) => ({
  type: REMOVE_FROM_BASKET,
  payload,
});
