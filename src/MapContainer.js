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

// Map styling: https://snazzymaps.com/style/30/cobalt
export class MapContainer extends Component {
  render() {
    return (

      <Map
      className="item item-2"
        google={this.props.google}
        initialCenter={{
          lat: 45.798327,
          lng: 24.125583
          }}
        zoom={14}
        styles={[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 10
            },
            {
                "lightness": 30
            },
            {
                "gamma": 0.5
            },
            {
                "hue": "#435158"
            }
        ]
    }
]
}









        >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
<img className="pb" src={ require('./img/dracula-castles.png') } />
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
