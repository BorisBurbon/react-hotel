import React, {Component} from 'react';
import Header from './header/Header';
import Filter from './filter/Filter';
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