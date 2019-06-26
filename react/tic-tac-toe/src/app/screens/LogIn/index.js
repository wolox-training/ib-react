import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { Redirect, Route } from 'react-router-dom';
import logIn from '../../../services/LoginService';

class LogIn extends Component {
  state = {
    toGame: false,
  }

  submit = (values) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    return sleep(500)
    .then(() => {
      logIn.logIn({email: values.email, password: values.password})
      .then((response) => {
        if (response.status === 401) {
          return Promise.reject({
            email: 'Unauthorized',
            password: 'Unauthorized'
          });
        }
        if(!response){
          window.alert("Could not connect to the server");
          return Promise.reject("Could not connect to the server");
        }
        window.localStorage.setItem("token", response.data.token);

        this.setState(() =>( {
          toGame: true
        }))
      })
    })
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
