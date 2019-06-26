import React, { Component } from 'react';
import styles from "../../styles.module.scss"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render (){
    return (
      <div className={styles.navbar}>
        <h3 className={styles.title}>Tic-Tac-Toe</h3>
        <button onClick={this.logout}>[X] EXIT</button>
        <Link to={"/" + this.props.secondScreen}>{(this.props.secondScreen).toUpperCase()}</Link>
      </div>
    );
  }

  logout (){
    window.localStorage.clear();
    window.location.reload();
  }

};



export default Navbar;