import api from './../config/api';

export default {
  logIn: (credentials) => api.post('/login', credentials),
};