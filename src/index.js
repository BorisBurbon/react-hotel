import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// Test Redux


// function Hotel(state = [], action) {
//   if(action.type === "Add_hotel"){
//     return [...state, action.payload]
//   }
//   return state;
// }
// const store = createStore(Hotel);
//
// store.subscribe(() => {
//   console.log('subscribe', store.getState())
// });
//
// store.dispatch({type: "Add_hotel", payload: 'hotel1'});
// store.dispatch({type: "Add_hotel", payload: 'hotel2'});