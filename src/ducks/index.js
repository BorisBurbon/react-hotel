
// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}


export const componentDidMount = () => {
  const API = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=IPPEfSrgZ8gPIIvDAvvgeAA429ipXkZl&location=BOS&';
  let query = 'check_in=2018-06-15&check_out=2018-06-16';
  fetch(`${API}${query}`)
    .then(res =>res.json())
    .then(data =>  this.setState({hotelList : data.results}))
    .catch( error =>  console.log(error));
}


