import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../Field';
import { required, minLength, matchesPassword } from '../../validation';

import './styles.scss';

export const RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={customInput} type="text" label="email" validate={[required, minLength]} />
      <Field name="password" component={customInput} type="password" label="Password" validate={[required, minLength]} />
      <Field name="confirmPassword" component={customInput} type="password" label="Confirm Password" validate={[required, matchesPassword]} />
      <button type="submit">Submit</button>
    </form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
  form: 'register'
})(RegisterForm);
