import { GET_HOTEL } from '../constants';

const hotelList = [];


export default (state = hotelList, {type, payload}) => {
  switch (type) {
    case GET_HOTEL:
      return Object.assign([], state, payload)
    default:
      return state
  }
}