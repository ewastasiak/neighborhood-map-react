import React, { Component } from 'react';
import logo from './logo.svg';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import MapContainer from './MapContainer.js'
import SearchList from './SearchList.js'

import Castles from './data/castles.json';
import CastlesApi from './CastlesApi.js';
import Castle from './Castle.js';


import Footer from './Footer.js'
// import './App.css';



class App extends Component {

  state = {

    listOfCastles: [],

    // showingInfoWindow: false,
    // activeMarker: {},
    // selectedPlace: {},
    // jest w mapcontainer

  }

getAllCastles() {

alert(
    Castles.map(function(castle){
      return <li>{castle.id} - {castle.name}</li>;
    })
);

}


  componentDidMount() {

    this.getAllCastles();


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
