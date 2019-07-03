import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import styles from '../../styles.module.scss';
import Navbar from "../Navbar"
import { connect } from "react-redux";
import actionCreators from "../../../../../redux/actions";

class Matches extends Component {
  
  async componentDidMount(){
    const response = this.props.dispatch(actionCreators.getMatches());
    //this.props.isLoading = true;
    //const response = await TicTacToeService.getMatches();
    if(response.ok){
      this.props.matches = response.data;
      this.props.isLoading = false;
    }
  }

  render() {
    if(!window.localStorage.getItem("token")){
      return <Redirect to="/"/>;
    }

    const matchesHistory = this.props.matches;
    const matches = matchesHistory.map(game => {
      const match = "Player 1: " + game.player_one + " || Player 2: " +  game.player_two + " || Winner: " + game.winner;
      return (
        <li key={game.id} >
          {match}
        </li>
      );
    });
    var Spinner = require('react-spinkit');

    if(this.props.isLoading){
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


const mapStateToProps = (state) => {
  console.log(state);
  return ({
    matches: state.tictactoe.matches,
    isLoading: state.tictactoe.matchesLoading,
});}
export default connect(mapStateToProps)(Matches);
