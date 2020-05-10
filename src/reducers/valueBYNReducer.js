import { handleActions } from 'redux-actions';

import { addValueBYN } from '../actions/valueBYNAction';
import { valueBYNState } from '../constants/defaultState';

export default {
  valueBYN: handleActions({
    [addValueBYN]: (state, { payload = 0 }) => payload,
  }, valueBYNState),
};
