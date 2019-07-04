import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  matches: [],
  user: null
};

const reducerDescription = {
  primaryActions: [actions.GET_MATCHES, actions.LOG_IN]
};

export default createReducer(initialState, completeReducer(reducerDescription));
