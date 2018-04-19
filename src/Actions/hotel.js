import axios from 'axios';
//Import Config (Api, Api key)
import config from '../config';

import {GET_HOTEL, GET_SEARCH_HOTEL} from '../Constants';


export const getHotel = (data) => dispatch => {
  let query = `location=${data.city}&check_in=${data.checkIn}&check_out=${data.checkOut}`;
  axios.get(`${config.api.clientUrl}${config.api.clientKey}${query}`)
    .then((response) => {
      dispatch({
        type: GET_HOTEL,
        payload: response.data.results
      })
    })
    .catch(err => {
      console.log(err)
    })
};

export const getSearchHotel = (data) => dispatch => {
  let city = data.city || 'BOM';
  let checkIn = data.checkIn;
  let checkOut = data.checkOut;
  let currency = data.currency || 'USD';
  let radius = data.radius || '10';
  let query = `location=${city}&check_in=${checkIn}&check_out=${checkOut}&radius=${radius}&currency_code=${currency}`;
  axios.get(`${config.api.clientUrl}${config.api.clientKey}${query}`)
    .then((response) => {
      dispatch({
        type: GET_SEARCH_HOTEL,
        payload: response.data.results
      })
    })
    .catch((err) => {
      alert(JSON.parse(err.request.response).message)
    })
};