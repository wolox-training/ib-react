import React from 'react';

import styles from '../../../styles.module.scss';
import Navbar from '../../Navbar';

export default { matches: (matches) => (
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
)
};
