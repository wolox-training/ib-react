import api from './../config/api';

export default {
  getMatches: () => api.get('/matches'),
  logIn: (credentials) => api.post('/login', credentials)
};