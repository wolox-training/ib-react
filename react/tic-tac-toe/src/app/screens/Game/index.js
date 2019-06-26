import React, { Component } from 'react';
import matchesService from './../../../services/MatchesService';
import { Redirect, Route } from 'react-router-dom';
import styles from './styles.module.scss';
import Board from './components/Board';
import { SubmissionError } from 'redux-form';
import Spinner from "react-spinkit";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      isLoading: false,
      isLoged: false,
    };
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = [...current.squares];
    if (this.calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  async componentDidMount(){
    this.setState({isLoading: true});
    const response = await matchesService.getMatches();
    if(response.ok){
      this.setState({matches: response.data, isLoading: false});
    }
    else{
      window.alert("Could not connect to the server, try again later");
      this.setState({isLoading: false});
    }
  }

  getMovesList(){
    const history = this.state.history;
    const moves = history.map((step, move) => {
      const desc = move ? 
        'Go to move #' + move : 
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return moves;
  }

  getStatus(winner){
    return winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext? 'X' : 'O'}`;
  }

  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  }

  render() {
    if(!window.localStorage.getItem("token")){
      return <Redirect to="/"/>;
    }

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const status = this.getStatus(winner);
    const moves = this.getMovesList();


    const matchesHistory = this.state.matches;
    const matches = matchesHistory.map(game => {
      const match = "Player 1: " + game.player_one + " || Player 2: " +  game.player_two + " || Winner: " + game.winner;
      return (
        <li key={game.id} >
            {match}
        </li>
      );
    });

    if(this.state.isLoading){
      return (<Spinner name='folding-cube' />);
    }else{
      return (
        <div className={styles.game}>  
          <div className={styles.gameBoard}>
            <Board 
              squares={current.squares}
              onClick={this.handleClick}
            />
          </div>
          <div className={styles.gameInfo}>
            <span>{status}</span>
            <ol>{moves}</ol>
          </div>
          <ol>{matches}</ol>
        </div>
      );
    }

  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}

export default Game;
