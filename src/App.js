import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import Castles from './data/castles.json';
import Footer from './components/Footer.js'



class App extends Component {


  state = {
    listOfCastles: Castles,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,


    wikiEntry: [],
  }


//Get the castles from ./data/castles.json
// Probably not necessary
// getAllCastles() {
// const initialCastles = Castles;
//
// alert(
//
//       <li>{Castles.place_id} - {Castles.name}</li>

// );
// }

componentDidMount() {
  //Don't need this.
// this.getAllCastles();
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



          <header className="item item-1">
            <h1>Famous Transylvanian Castles</h1>
          </header>


          <div className="item item-2">
            <SearchList

             />
          </div>


          <div className="item item-3">
            <MapContainer

            />
          </div>


          <Footer />



        </div>

      </div>
    );


  }
}

export default App
