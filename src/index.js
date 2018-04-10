import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducer from './reducers';
import { getHotel } from './actions/hotel';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


//store.dispatch(getHotel());

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
