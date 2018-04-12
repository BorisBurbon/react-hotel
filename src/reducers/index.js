
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import hotel from './hotel';

export default combineReducers({
  routing: routerReducer,
  hotel
})