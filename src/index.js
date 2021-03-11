import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import { searchMonsters } from './redux/searchField/searchField.reducer';

const logger = createLogger();
const store = createStore(searchMonsters, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

