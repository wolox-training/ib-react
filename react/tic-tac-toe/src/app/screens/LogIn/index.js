import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import actionCreators from "../../../redux/actions";

class LogIn extends Component {

  submit = (values) => {
    this.props.dispatch(actionCreators.logIn({email: values.email, password: values.password}));
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

const mapStateToProps = () => ({})
export default connect(mapStateToProps)(LogIn);
