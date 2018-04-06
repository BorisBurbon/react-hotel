import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/header.js';
import Filter from './filter/filter.js'
import Container from './container/container.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      hotelList: []
    })
  }
  componentDidMount() {
    const API = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=IPPEfSrgZ8gPIIvDAvvgeAA429ipXkZl&location=BOS&';
    let query = 'check_in=2018-06-15&check_out=2018-06-16';
    fetch(`${API}${query}`)
      .then(res =>res.json())
      .then(data =>  this.setState({hotelList : data.results}))
      // .then(data =>  console.log(data.results))
      .catch( error =>  console.log(error));
  }


  render() {
    const hotelArr = this.state.hotelList.map(function(data, idx) {
      return <p key={idx}>{data.property_name} {data.total_price.amount}</p>;
    })
    return (
      <div className="App">
        <Header />
        <Filter />
        <Container />
        {hotelArr}
      </div>
    );
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;