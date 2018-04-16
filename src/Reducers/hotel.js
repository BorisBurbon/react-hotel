import { GET_HOTEL, GET_SEARCH_HOTEL } from '../Constants';
import data from './data.json';

// const hotelList = [];

export default (state = data, {type, payload}) => {
  switch (type) {
    case GET_HOTEL:
      return Object.assign([], state, payload);
    case GET_SEARCH_HOTEL:
      return Object.assign([], payload);
    default:
      return state
  }
}