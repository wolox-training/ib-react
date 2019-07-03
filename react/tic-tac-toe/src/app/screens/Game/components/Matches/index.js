import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import styles from '../../styles.module.scss';
import Navbar from "../Navbar"
import { connect } from "react-redux";
import actionCreators from "../../../../../redux/actions";
import Spinner from 'react-spinkit';

class Matches extends Component {
  
  async componentDidMount(){
    this.props.dispatch(actionCreators.getMatches());
  }

  render() {
    if(!window.localStorage.getItem("token")){
      return <Redirect to="/"/>;
    }

    const {matches} = this.props;

    if(this.props.isLoading){
      return <Spinner name='folding-cube' />;
    }

    if(this.props.error){
      return <span>ERROR:  {this.props.error}</span>;
    }

    return (
      <div className={styles.game}> 
        <Navbar secondScreen="game"/>
        <div className={styles.gameInfo}>
          <ol>{
            matches.map(game => {
              const match = "Player 1: " + game.player_one + " || Player 2: " +  game.player_two + " || Winner: " + game.winner;
              return (
                <li key={game.id} >
                  {match}
                </li>
              );
            })
          }</ol>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  matches: state.tictactoe.matches,
  isLoading: state.tictactoe.matchesLoading,
  error: state.tictactoe.matchesError
})
export default connect(mapStateToProps)(Matches);
