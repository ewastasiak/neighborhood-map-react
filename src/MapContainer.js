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

// Map style: https://snazzymaps.com/style/30/cobalt
export class MapContainer extends Component {
  render() {
    return (

      <Map

        google={this.props.google}
        initialCenter={{
          lat: 45.7983,
          lng: 24.0255
          }}
        zoom={8}





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

        <Marker
            title={'Bran Castle'}
            name={'Bran Castle'}
            position={{lat: 45.5149, lng: 25.3672}} />

            <Marker
                title={'Peles Castle'}
                name={'Peles Castle'}
                position={{lat: 45.3600, lng: 25.5426}} />

                <Marker
                    title={'Corvin Castle'}
                    name={'Corvin Castle'}
                    position={{lat: 45.7493, lng: 22.8883}} />

                    <Marker
                        title={'Râșnov Citadel'}
                        name={'Râșnov Citadel'}
                        position={{lat: 45.5906, lng: 25.4694}} />

                            <Marker
                                title={'Fagaras Citadel'}
                                name={'Fagaras Citadel'}
                                position={{lat: 45.8453, lng: 24.9738}} />

                                <Marker
                                    title={'The Citadel Alba-Carolina'}
                                    name={'The Citadel Alba-Carolina'}
                                    position={{lat: 46.0686, lng: 23.5717}} />

                                    <Marker
                                        title={'Rupea Fortress'}
                                        name={'Rupea Fortress'}
                                        position={{lat: 46.0378, lng: 25.2129}} />

                                        <Marker
                                            title={'Sighișoara Citadel'}
                                            name={'Sighișoara Citadel'}
                                            position={{lat: 46.2198, lng: 24.7920}} />

                                            <Marker
                                                title={'Deva Fortress'}
                                                name={'Deva Fortress'}
                                                position={{lat: 45.8887, lng: 22.8970}} />

                                                <Marker
                                                    title={'Poenari Castle'}
                                                    name={'Poenari Castle'}
                                                    position={{lat: 45.3536, lng: 24.6351}} />







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

//
// <Marker onClick={this.onMarkerClick}
//         name={'Current location'} />
