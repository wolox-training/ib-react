import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../Field';
import { required, minLength, matchesPassword, asyncValidate } from '../../validation';
import './styles.css';
import capitalize from 'capitalize';
import { normalize } from 'path';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={customInput} type="text" label="Name" validate={[required, minLength]} normalize={capitalize}/>
        <Field name="password" component={customInput} type="password" label="Password" validate={[required, minLength]}/>
        <Field name="confirmPassword" component={customInput} type="password" label="Confirm Password" validate={[required, matchesPassword]}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

RegisterForm = reduxForm({
  form: 'register',
  asyncValidate,
  asyncBlurFields: ['name']
})(RegisterForm);

export default RegisterForm;