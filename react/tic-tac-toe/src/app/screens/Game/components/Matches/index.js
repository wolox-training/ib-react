import React, { Component } from 'react';
import matchesService from '../../../../../services/MatchesService';
import { Redirect} from 'react-router-dom';
import styles from '../../styles.module.scss';
import Navbar from "../Navbar"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      isLoading: false,
    };
  }

  async componentDidMount(){
    this.setState({isLoading: true});
    const response = await matchesService.getMatches();
    if(response.ok){
      this.setState({matches: response.data, isLoading: false});
    }
  }

  render() {
    if(!window.localStorage.getItem("token")){
      return <Redirect to="/"/>;
    }

    const matchesHistory = this.state.matches;
    const matches = matchesHistory.map(game => {
      const match = "Player 1: " + game.player_one + " || Player 2: " +  game.player_two + " || Winner: " + game.winner;
      return (
        <li key={game.id} >
            {match}
        </li>
      );
    });
    var Spinner = require('react-spinkit');

    if(this.state.isLoading){
      return (<Spinner name='folding-cube' />);
    }else{
      return (
        <div className={styles.game}> 
          <Navbar secondScreen="game"/>
          <div className={styles.gameInfo}>
            <ol>{matches}</ol>
          </div>
        </div>
      );
    }

  }

}

export default Game;
