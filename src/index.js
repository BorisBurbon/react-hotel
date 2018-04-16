import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import AboutHotel from './listhotel/AboutHotel';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <div>
          <Route exact  path="/" component={App} />
          <Route path="/about-hotel/:id" component={AboutHotel} />
        </div>
      </Router>

   </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
