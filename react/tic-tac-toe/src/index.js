import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers as CR } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import apiReducer from "./redux/reducer";
import { register } from './serviceWorker';
import thunk from 'redux-thunk';

const reducers = {
  form: formReducer,
  tictactoe: apiReducer,
};
const combineReducers = CR;
const reducer = combineReducers(reducers);

const middlewares = [];

middlewares.push(thunk);
middlewares.push(fetchMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middlewares)
));

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
