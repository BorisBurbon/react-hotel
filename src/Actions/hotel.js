import axios from 'axios';
import config from '../config';

import { GET_HOTEL, GET_SEARCH_HOTEL } from '../Constants';


export const getHotel = (data) => dispatch => {
  let city = 'BOM';
  let query = `location=${city}&check_in=2018-05-15&check_out=2018-05-25`;
   axios.get(`${config.api.clientUrl}${config.api.clientKey}${query}`)
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

export const getSearchHotel = (data) => dispatch => {
  let city = data.city;
  let checkIn = data.checkIn;
  let checkOut = data.checkOut;
  let currency = data.currency;
  console.log(config.api);
  let query = `location=${city}&check_in=${checkIn}&check_out=${checkOut}&currency_code=${currency}`;
  axios.get(`${config.api.clientUrl}${config.api.clientKey}${query}`)
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