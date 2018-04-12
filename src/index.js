import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


//store.dispatch(getHotel());

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
