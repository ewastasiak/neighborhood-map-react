import React, { Component } from 'react';
// import Map from './Map.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Map.js


// class MapContainer extends React.Component {}
//   render() {
//     <div>
// <Map />
// </div>
// }

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}
// <div>
//   <h1>{this.state.selectedPlace.name}</h1>
// </div>
export default GoogleApiWrapper({

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'

})(MapContainer)
