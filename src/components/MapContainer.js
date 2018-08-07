import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// Map style: https://snazzymaps.com/style/30/cobalt
// import MapStyling from '../data/MapStyling.json';
import Castles from '../data/castles.json';
// import ErrorBoundary from './ErrorBoundary'

// Ref https://www.npmjs.com/package/google-maps-react/v/2.0.2
// https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54


class MapContainer extends Component {


// //Set error boundaries - https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
//   componentDidCatch(error, info) {
//       // Display fallback UI
//       this.setState({ hasError: true });
//       // You can also log the error to an error reporting service
//       logErrorToMyService(error, info);
//     }



  render() {
    return (


      <Map

        title="Castle map"
        role="application"
        aria-label="Map with nine Transylvanian castles locations"
        google={this.props.google}
        onMapClick={this.onMapClick}
        initialCenter={{lat: 45.5149, lng: 24.3672}}
        zoom={8}
        styles={require('../data/MapStyling.json')}
        >

{// Create markers from JSON locations
}
      {Castles.map((index) => {

        return (
          <Marker
            tabIndex="0"
            onClick={this.props.onMarkerClick}
            key={index.place_id}
            position={index.latlng}
            title={index.name}
            icon={this.props.selectedPlace.title === index.name ? require('../img/pointer-select.png') : require('../img/pointer.png')}
          />
        );
      })
      }



          <InfoWindow
            tabIndex="0"
            onClose={this.onInfoWindowClose}
            style={require('../App.css')}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}
            
          >

          {
            Castles.filter((index) => {
              return (
              this.props.selectedPlace.title === index.name
              )
            })
            .map((index) => {
              return (

                <div className={"info"}  aria-label="Location information window">

                {this.props.fetchedPics[index.name]}
                <h2 tabIndex="0" className={"info"}>{this.props.selectedPlace.title}</h2>
                <a href={index.wikiLink} target="_blank">Read Wikipedia Entry</a>
                <p tabIndex="0">Flickr owner number: <em>{this.props.flickrOwner[index.name]}</em></p>

                </div>

              );
            })
          }
          </InfoWindow>


      </Map>

)}
}


export default GoogleApiWrapper({

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'

})(MapContainer)
