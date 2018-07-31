import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer.js'
import SearchList from './SearchList.js'
import Footer from './Footer.js'
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class App extends Component {

  state = {

    list: [],

    // showingInfoWindow: false,
    // activeMarker: {},
    // selectedPlace: {},
    // jest w mapcontainer

  }

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
      <div className="grid">
      <div className="item item-1">
      <h1>Famous Transylvanian Castles</h1>

      </div>
<div class="item item-2"><SearchList /></div>
<div className="item item-3"><MapContainer /></div>
<Footer />
      </div>




  {  //  <Info />
  }


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
