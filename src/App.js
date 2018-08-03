import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import Castles from './data/castles.json';
import Footer from './components/Footer.js'
import escapeRegExp from 'escape-string-regexp'


class App extends Component {


  state = {
    listOfCastles: Castles,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,

//Query/results will be used
// both by searchlist and MapContainer markers

    query: '',
    results: Castles


    // animation: Marker.animation
    // animation: google.maps.Animation.DROP

    // wikiEntry: [],

  }


filterCastles = (query) => {
  // filtering the array map/filter
  // this.setState({
  //    query: query
  //  })
  //  this.updateSearch(query);
}

// updateResults = (query) => {
//
//     if (query) {
//       BooksAPI.search(query).then((results) => {
//         //error handling ternary for search
//         results.error ? this.setState({ results: [] }) : this.setState({ results: results })
//       })
//     } else {
//       this.setState({ results: [] });
//     }
//   }


getWiki

openInfoWindow

closeInfoWindow




onMarkerClick = (props, marker, e) =>
      this.setState({
        // listOfCastles: Castles,
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        animation: '4'
        // animation: google.maps.Animation.BOUNCE
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

      // onInfoWindowClose = () =>
      //   this.setState({
      //     selectedPlace: {},
      //     activeMarker: null,
      //     showingInfoWindow: false
      //   });



componentDidMount() {
// update the locations here
// this.setState({ castles: listOfCastles})
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
              listOfCastles={this.state.listOfCastles}

              query={this.state.query}
              search={ this.state.results }
             />
          </div>


          <div className="item item-3">
            <MapContainer
              listOfCastles={this.state.listOfCastles}


              query={this.state.query}
              search={this.state.results}


              onMarkerClick={this.onMarkerClick}
              onMapClicked={this.onMapClicked}
              onInfoWindowClose={this.onInfoWindowClose}
              animation={this.state.animation}
              selectedPlace={this.state.selectedPlace}
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
