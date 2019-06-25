export const actions = {
  LOG_IN: '@@AUTH/LOG_IN'
};

export default {
  logIn: (email, token) => ({
    type: actions.LOG_IN,
    payload: {
      credentials: {
          email,
          token
      }
    }
  })
};
