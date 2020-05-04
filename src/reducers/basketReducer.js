import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants/actionTypes';
import { basketState } from '../constants/defaultState';

const basketReducer = (state = basketState, { type, payload }) => {
  const newState = { ...state, productIds: [...state.productIds] };

  switch (type) {
    case ADD_TO_BASKET:
      newState.productIds.push(payload.productId);
      newState.count += 1;
      newState.amount += payload.priceValue;
      newState.currency = payload.priceCurrency;

      return newState;
    case REMOVE_FROM_BASKET:
      newState.productIds = newState.productIds.filter((productIds) => (
        productIds !== payload.productId));
      newState.count -= 1;
      newState.amount -= payload.priceValue;
      newState.currency = basketState.currency;

      return newState;
    default:
      return state;
  }
};

export default basketReducer;
