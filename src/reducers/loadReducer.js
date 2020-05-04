import { START_LOADER, END_LOADER } from '../constants/actionTypes';
import { loadState } from '../constants/defaultState';

const loadReducer = (state = loadState, { type }) => {
  switch (type) {
    case START_LOADER:
      return true;
    case END_LOADER:
      return false;
    default:
      return state;
  }
};

export default loadReducer;
