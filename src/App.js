import React, { Component } from 'react';
// import logo from './logo.svg';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import Footer from './components/Footer.js'


// import Castles from './data/castles.json';
// import CastlesApi from './CastlesApi.js';
// import Castle from './components/Castle.js';



// import './App.css';



class App extends Component {

  state = {
    // center: {
    //   lat: 45.7983,
    //   lng: 24.0255
    // },
    //   zoom: 8,
    listOfCastles: [],
    // activeMarker: 0,

    // showingInfoWindow: false,
    // activeMarker: {},
    // selectedPlace: {},
    // jest w mapcontainer

  }

  //   getAllCastles() {
  //
  //   alert(
  //       Castles.map(function(castle){
  //         return <li>{castle.place_id} - {castle.name}</li>;
  //       })
  //   );
  //
  //   }
  //
  // componentDidMount() {
  //   this.getAllCastles();
  // }

  whenMarkerIsClicked = (event, index) => {
    this.setState ({ activeMarkerIndex: index })
  }















  render() {
    console.log(this.state.listOfCastles);
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
