import React, {Component} from 'react';
import Header from './header/header.js';
import Filter from './filter/filter.js';
import ListHotel from './listhotel/ListHotel';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Filter/>
        <ListHotel/>
      </div>
    );
  }
}


export default App;