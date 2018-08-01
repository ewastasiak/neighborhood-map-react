import React, { Component } from 'react';
// import logo from './logo.svg';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Castles from './data/castles.json';

import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import Footer from './components/Footer.js'
import CastlesList from './components/CastlesList.js'

// import Castles from './data/castles.json';
// import CastlesApi from './CastlesApi.js';
// import Castle from './components/Castle.js';



// import './App.css';



class App extends Component {
//temporary hardcoded locations
  state = {
    listOfCastles: [require('./data/castles.json')],

    wikiEntry: []

    // showingInfoWindow: false,
    // activeMarker: {},
    // selectedPlace: {},

    // jest w mapcontainer

  }





//
// getWiki = (listOfCastles) => {
//
// let wikiEntry = [];
//
// fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=${listOfCastles.name}&exintro=1`)
// .then(response => {return response.json()})
// .then(responseEntry => {
//   let entry = response.query.pages[Object.keys(responseEntry.query.pages)[0]].extract;
//   wikiEntry.push(entry)
// })
// //catch errors?
// this.setState({WikiWindow: wikiEntry})
//
// }










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




























  // <ul>
  // {Castles.keys(castle).map(i => (
  //   <li key={i}>{i}:{castle[i].name}</li>
  // ))}
  // </ul>
  //
  // <input
  //       type="text"
  //       placeholder="Search a castle"
  //     />




  //
  //   getAllCastles() {
  //
  //   alert(
  //
  //         <li>{CastlesList.place_id} - {CastlesList.name}</li>;
  //
  //   );
  //
  //   }
  //
  // componentDidMount() {
  //   this.getAllCastles();
  // }
  //
  // whenMarkerIsClicked = (event, index) => {
  //   this.setState ({ activeMarkerIndex: index })
  // }
