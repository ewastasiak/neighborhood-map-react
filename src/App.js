import React, { Component } from 'react';
// import logo from './logo.svg';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Castles from './data/castles.json';

import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import Footer from './components/Footer.js'
// import CastlesList from './components/CastlesList.js'
import Castles from './data/castles.json';



class App extends Component {


  state = {
    listOfCastles: Castles,
    wikiEntry: []
  }



//Render the page with all components in grid
  render() {


    //Temporary
    console.log(  `Yo this is an array with ${this.state.listOfCastles.length} castles`);
    console.log(
      Castles.map(castle => {
        return <li key={castle.place_id}>{castle.name}</li>;
      })

    );


    return (
      <div className="App">

        <div className="grid">

          <div className="item item-1">
            <h1>Famous Transylvanian Castles</h1>
          </div>
          <div className="item item-2"><SearchList /></div>
          <div className="item item-3"><MapContainer /></div>
          <Footer />

        </div>

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
