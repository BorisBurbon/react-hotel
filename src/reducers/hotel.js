import { GET_HOTEL, GET_SEARCH_HOTEL } from '../constants';

const hotelList = [];


export default (state = hotelList, {type, payload}) => {
  switch (type) {
    case GET_HOTEL:
      return Object.assign([], state, payload)
    case GET_SEARCH_HOTEL:
      return Object.assign([], state, payload)
    default:
      return state
  }
}