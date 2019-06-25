import logIn from '../../../../services/LoginService';

export const required = value => 
  value ? undefined : "Value is required";

export const minLength = value =>
  value.length < 8
    ? "Value must be at least 8 characters"
    : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password
    ? undefined
    : 'Passwords must match.';

export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);

  const response = await logIn.logIn({email: values.email, password: values.password});
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
}