import TicTacToeService from "../services/TicTacToeService";
import { createTypes, completeTypes, withPostFailure, withPostSuccess} from 'redux-recompose';


export const actions = createTypes(completeTypes(['GET_MATCHES','LOG_IN']), '@TICTACTOE');

const actionCreators = {
  getMatches: () => {
    return {
      type: actions.GET_MATCHES,
      service: TicTacToeService.getMatches,
      target: 'matches',
      payload: {},
      injections: [
        withPostFailure(() => {
          window.alert("Error while loading the matches");
        })
      ]
    };
  },
  logIn: (credentials) => {
    return {
      type: actions.LOG_IN,
      service: TicTacToeService.logIn,
      target: 'user',
      payload: credentials,
      injections: [
        withPostSuccess((dispatch, response) => {
          window.localStorage.setItem("token", response.data.token);
          window.location.reload();
        }),
        withPostFailure(() => {
          window.alert("Invalid Email or Password");
        })
      ]
    };
  }

};

export default actionCreators;