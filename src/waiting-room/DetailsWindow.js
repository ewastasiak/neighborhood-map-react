import React, { Component } from 'react';
import App from './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer.js';

class DetailsWindow extends Component{



  // state = {
  //     showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {},
  //   };

//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
//
//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };
//
//
//
//
//
// render() {
//   return (
//
//     <InfoWindow
//               marker={this.state.activeMarker}
//               visible={this.state.showingInfoWindow}>
//                 <div>
//                   <h2>{this.state.selectedPlace.name}</h2>
//                 </div>
//             </InfoWindow>
//           );
// }
// }

export default DetailsWindow;
