import React, { Component } from 'react';
import Header from './header/header.js';
import Filter from './filter/filter.js'
import Container from './container/container.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Container />
      </div>
    );
  }
}

export default App;
