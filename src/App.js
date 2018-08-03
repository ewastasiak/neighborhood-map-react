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
    showingInfoWindow: true,
    // wikiEntry: [],

  }


filterCastles = (query) => {
  // filtering the array map/filter
}

getWiki

openInfoWindow

closeInfoWindow


onMarkerClick = (props, marker, e, position) =>
      this.setState({

        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true

      } );


      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null,
            // locationsArray: castle.latlng
            // position: this.state.castle.latlng
          })
        }
      };

      // TODO: There are two ways how to control a position of the <InfoWindow /> component.
      // You can use a position prop or
      // connect the <InfoWindow /> component
      // directly to an existing <Marker /> component by using a marker prop.

      onInfoWindowClose = () =>
        this.setState({
          selectedPlace: {},
          activeMarker: null,
          showingInfoWindow: false
        });



componentDidMount() {
// update the locations here

}


//Render the page with all components in grid
  render() {


    console.log(  `This is an array with ${this.state.listOfCastles.length} castles`);
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
              onMarkerClick={this.onMarkerClick}
              onMapClicked={this.onMapClicked}

              selectedPlace={this.state.selectedPlace}
              listOfCastles={this.state.listOfCastles}
              activeMarker={this.state.activeMarker}
              showingInfoWindow={this.state.showingInfoWindow}
            />
          </div>


          <Footer />



        </div>

      </div>
    );


  }
}

export default App


// activeMarker: {this.state.activeMarker}
// selectedPlace: {this.state.selectedPlace}
// showingInfoWindow: {this.state.showingInfoWindow}
// wikiEntry: {this.state.wikiEntry}
