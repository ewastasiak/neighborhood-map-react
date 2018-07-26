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

export class MapContainer extends React.Component {
    render() {
      return (
      <div>
  <Map />
  </div>
);
  }

}

export default GoogleApiWrapper({

  // apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'
})(MapContainer)
