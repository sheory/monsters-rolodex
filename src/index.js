import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore, combineReducers} from 'redux';

import { searchMonsters } from './redux/searchField/searchField.reducer';
import { monstersRequest } from './redux/robotsRequest/monstersRequest.reducer';

const rootReducer = combineReducers({ searchMonsters, monstersRequest });

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

