import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './Map.js'
import Info from './Info.js'
import SearchList from './SearchList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <h1>I forgot everything again</h1>
      </div>

      <Map />

      <SearchList />

      <Info />


      </div>
    );
  }
}

export default App;
