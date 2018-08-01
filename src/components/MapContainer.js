import React, { Component } from 'react';
// import Map from './Map.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapStyling from '../data/MapStyling.json';
// import App from './App.js'
// import DetailsWindow from './DetailsWindow.js';
//Map.js
import CastlesList from './CastlesList.js'

// class MapContainer extends React.Component {}
//   render() {
//     <div>
// <Map />
// </div>
// }


// https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54
// Map style: https://snazzymaps.com/style/30/cobalt
class MapContainer extends Component {







  state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    };

    onMarkerClick = (props, marker, e, position) =>
      this.setState({

        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        // position: castle.latlng
      }

// this.getWiki(castle.name)





    );

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

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };



// animation = google.map.animations.BOUNCE






  render() {
    return (

//       var markerIcon = {
//           url: './img/kappa.png',
//           //state your size parameters in terms of pixels
//           size: new google.maps.Size(70, 60),
//           scaledSize: new google.maps.Size(70, 60),
//           origin: new google.maps.Point(0,0)
//       }
//
//       var markerPerSe = new google.maps.Marker({
//           position:latLng,
//           map: map,
//           // set the icon as catIcon declared above
//           icon: markerIcon,
//           // must use optimized false for CSS
//           optimized: false
//       });
//
//       var myoverlay = new google.maps.OverlayView();
//     myoverlay.draw = function () {
//         this.getPanes().markerLayer.className='markerLayer';
//     };
// myoverlay.setMap(map);

// <Map google={this.props.google} zoom={14}>
//
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
//
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>

//  Działa https://www.npmjs.com/package/google-maps-react/v/2.0.2



      <Map
        google={this.props.google}
        initialCenter={{
          lat: 45.7983,
          lng: 24.0255
          }}
        zoom={8}
        styles={require('../data/MapStyling.json')}
        >








        <Marker onClick={this.onMarkerClick}
        animation={4}
            title={'Bran Castle'}
            name={'Bran Castle'}
            position={{lat: 45.5149, lng: 25.3672}} />
            <InfoWindow onClose={this.onInfoWindowClose}
            position={{lat: 45.7149, lng: 25.3672}}
            wiki = {this.state.wikiEntry}

                      marker={this.state.activeMarkerIndex}
                      visible={this.state.showingInfoWindow}>
                        <div>
                          <h2>{this.state.selectedPlace.name}</h2>
                        </div>
                    </InfoWindow>


            <Marker onClick={this.onMarkerClick}
                title={'Peles Castle'}
                name={'Peles Castle'}
                position={{lat: 45.3600, lng: 25.5426}} />


                <Marker onClick={this.onMarkerClick}
                    title={'Corvin Castle'}
                    name={'Corvin Castle'}
                    position={{lat: 45.7493, lng: 22.8883}} />

                    <Marker onClick={this.onMarkerClick}
                        title={'Râșnov Citadel'}
                        name={'Râșnov Citadel'}
                        position={{lat: 45.5906, lng: 25.4694}} />

                            <Marker onClick={this.onMarkerClick}
                                title={'Fagaras Citadel'}
                                name={'Fagaras Citadel'}
                                position={{lat: 45.8453, lng: 24.9738}} />

                                <Marker onClick={this.onMarkerClick}
                                    title={'The Citadel Alba-Carolina'}
                                    name={'The Citadel Alba-Carolina'}
                                    position={{lat: 46.0686, lng: 23.5717}} />

                                    <Marker onClick={this.onMarkerClick}
                                        title={'Rupea Fortress'}
                                        name={'Rupea Fortress'}
                                        position={{lat: 46.0378, lng: 25.2129}} />

                                        <Marker onClick={this.onMarkerClick}
                                            title={'Sighișoara Citadel'}
                                            name={'Sighișoara Citadel'}
                                            position={{lat: 46.2198, lng: 24.7920}} />

                                            <Marker onClick={this.onMarkerClick}
                                                title={'Deva Fortress'}
                                                name={'Deva Fortress'}
                                                position={{lat: 45.8887, lng: 22.8970}} />

                                                <Marker onClick={this.onMarkerClick}
                                                    title={'Poenari Castle'}
                                                    name={'Poenari Castle'}
                                                    position={{lat: 45.3536, lng: 24.6351}} />








      </Map>

    );
  }
}
// <InfoWindow onClose={this.onInfoWindowClose}>
//
// </InfoWindow>




// <div>
//   <h1>{this.state.selectedPlace.name}</h1>
// </div>
export default GoogleApiWrapper({

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'

})(MapContainer)

//
// <Marker onClick={this.onMarkerClick}
//         name={'Current location'} />
