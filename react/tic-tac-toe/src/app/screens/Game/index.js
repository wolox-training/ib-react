import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles.module.scss';
import Board from './components/Board';
import Navbar from './components/Navbar';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  getMovesList() {
    const { history } = this.state;
    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return moves;
  }

  getStatus(winner) {
    return winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
  }

  render() {
    if (!window.localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const status = this.getStatus(winner);
    const moves = this.getMovesList();

    return (
      <div className={styles.game}>
        <Navbar secondScreen="matches" />
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
      </div>
    );
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
      [2, 4, 6]
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
