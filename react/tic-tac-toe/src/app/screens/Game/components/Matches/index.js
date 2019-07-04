import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import actionCreators from '../../../../../redux/actions';

import layout from './screen/layout';


class Matches extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.getMatches());
  }

  render() {
    const { matches, isLoading, error } = this.props;

    if (!window.localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Spinner name="folding-cube" />;
    }

    if (error) {
      return <span>ERROR:  {error}</span>;
    }

    return layout.matches(matches);
  }
}


Matches.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  matches: PropTypes.arrayOf(PropTypes.shape({
    player_one: PropTypes.string.isRequired,
    player_two: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired
  }))
};

const mapStateToProps = (state) => ({
  matches: state.tictactoe.matches,
  isLoading: state.tictactoe.matchesLoading,
  error: state.tictactoe.matchesError
});
export default connect(mapStateToProps)(Matches);
