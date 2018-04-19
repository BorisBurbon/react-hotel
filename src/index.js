import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';

import App from './App';
import AboutHotel from './Components/Listhotel/AboutHotel';
import reducer from './Reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact  path="/" component={App} />
          <Route path="/about-hotel/:id" component={AboutHotel} />
        </Switch>
      </Router>

   </Provider>,
  document.getElementById('root')
);
registerServiceWorker();




