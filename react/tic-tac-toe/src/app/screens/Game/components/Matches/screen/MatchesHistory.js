import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles.module.scss';
import Navbar from '../../Navbar';

function MatchesHistory(props) {
  const { matches } = props;

  return (
    <div className={styles.game}>
      <Navbar secondScreen="game" />
      <div className={styles.gameInfo}>
        <ol>{
          matches.map(game => (
            <li key={game.id}>
              {`Player 1: ${game.player_one} || Player 2: ${game.player_two} || Winner: ${game.winner}`}
            </li>
          ))
        }
        </ol>
      </div>
    </div>
  );
}

MatchesHistory.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape({
    player_one: PropTypes.string.isRequired,
    player_two: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired
  }))
};

export default MatchesHistory;
