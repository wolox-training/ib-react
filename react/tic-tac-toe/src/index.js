import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);
let store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
