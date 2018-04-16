import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import ListHotel from './Components/Listhotel/ListHotel';


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