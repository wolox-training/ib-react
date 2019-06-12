import { actions } from './actions';

const initialState = {
  email: null,
  token: null
};

function reducer(state = initialState, action) {
  switch(action.type){
    case actions.LOG_IN:
      return {
        ...state,
        email: action.payload.credentials.email,
        token: action.payload.credentials.token
      };

    default:
        return state;
  }
}

export default reducer;
