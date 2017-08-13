import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import './styles/index.css';
import App from './components/App';

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('root'),
);
