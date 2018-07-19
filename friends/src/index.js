import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
