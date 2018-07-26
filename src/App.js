import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer.js'
import Info from './Info.js'
import SearchList from './SearchList.js'
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="grid">
      <div className="item item-1">
      <h1>My favourite places in Romania</h1>
      </div>

      <MapContainer />
      </div>



      <SearchList />

      <Info />


      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'
})(App)


// <div class="item item-1">1</div>
// <div class="item item-2">2</div>
// <div class="item item-3">3</div>
// <div class="item item-4">4</div>
