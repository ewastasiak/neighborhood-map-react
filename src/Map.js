import React, { Component } from 'react';
import App from './App.css';

  import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Map extends React.Component {

  render() {
      return (
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>


      );
    }
  }

  export default GoogleApiWrapper({

  })(Map)


// render() {
//   return (
//     <div>
//     <h2>How often will that happen</h2>
//     <p>This is the map component, by the way</p>
//     </div>
//   );
//
// }
// }
//
// export default Map;
