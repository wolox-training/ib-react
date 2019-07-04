import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import actionCreators from '../../../redux/actions';

import RegisterForm from './components/RegisterForm';

class LogIn extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(actionCreators.logIn({ email: values.email, password: values.password }));
  }

  render() {
    if (window.localStorage.getItem('token')) {
      return <Redirect to="/game" />;
    }

    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

export default connect()(LogIn);
