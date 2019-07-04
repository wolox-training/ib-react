import { createTypes, completeTypes, withPostFailure, withPostSuccess } from 'redux-recompose';

import TicTacToeService from '../services/TicTacToeService';
import alerts from '../utils/alerts';

export const actions = createTypes(completeTypes(['GET_MATCHES', 'LOG_IN']), '@TICTACTOE');

const actionCreators = {
  getMatches: () => ({
    type: actions.GET_MATCHES,
    service: TicTacToeService.getMatches,
    target: 'matches'
  }),
  logIn: (credentials) => ({
    type: actions.LOG_IN,
    service: TicTacToeService.logIn,
    target: 'user',
    payload: credentials,
    injections: [
      withPostSuccess((dispatch, response) => {
        window.localStorage.setItem('token', response.data.token);
        window.location.reload();
      }),
      withPostFailure(() => {
        alerts.invalidCredentials();
      })
    ]
  })

};

export default actionCreators;
