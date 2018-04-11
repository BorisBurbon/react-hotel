import axios from 'axios';

import { GET_HOTEL, GET_SEARCH_HOTEL } from '../constants';

const API = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=IPPEfSrgZ8gPIIvDAvvgeAA429ipXkZl&';

export const getHotel = () => dispatch => {
  let query = 'location=IEV&check_in=2018-06-15&check_out=2018-06-19';
  axios.get(`${API}${query}`)
    .then((response) => {
      dispatch({
        type:  GET_HOTEL,
        payload: response.data.results
      })
    })
    .catch(err => {
      console.log(err)
    })
};

export const getSearchHotel = () => dispatch => {
  let query = 'location=IEV&check_in=2018-06-15&check_out=2018-06-19';
  axios.get(`${API}${query}`)
    .then((response) => {
      dispatch({
        type:  GET_SEARCH_HOTEL,
        payload: response.data.results
      })
    })
    .catch(err => {
      console.log(err)
    })
};