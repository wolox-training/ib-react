import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { Redirect, Route } from 'react-router-dom';

class LogIn extends Component {
  state = {
    toGame: false,
  }

  submit = () => {
    this.setState(() =>( {
      toGame: true
    }))
  }

  render() {
    if(window.localStorage.getItem("token")){
      return <Redirect to="/game"/>;
    }

    return(
       <RegisterForm onSubmit={this.submit}/>
    );
  }

}

export default LogIn;
