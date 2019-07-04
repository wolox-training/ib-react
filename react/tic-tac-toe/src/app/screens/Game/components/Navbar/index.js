import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

class Navbar extends Component {
  logout () {
    window.localStorage.clear();
    window.location.reload();
  }

  render () {
    return (
      <div className={styles.navbar}>
        <h3 className={styles.title}>Tic-Tac-Toe</h3>
        <button onClick={this.logout}>[X] EXIT</button>
        <Link to={`/${this.props.secondScreen}`}>{this.props.secondScreen.toUpperCase()}</Link>
      </div>
    );
  }
}

Navbar.propTypes = {
  secondScreen: PropTypes.string
};

export default Navbar;
