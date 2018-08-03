import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapStyling from '../data/MapStyling.json';
import Castles from '../data/castles.json';

//  Działa https://www.npmjs.com/package/google-maps-react/v/2.0.2
// https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54
// Map style: https://snazzymaps.com/style/30/cobalt

class MapContainer extends Component {

  // state = {
  //     // showingInfoWindow: true,
  //     // activeMarker: {},
  //     // selectedPlace: {}
  //   };

    // onMarkerClick = (props, marker, e, position) =>
    //       this.setState({
    //
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true
    //       } );

    // onMapClicked = (props) => {
    //   if (this.state.showingInfoWindow) {
    //     this.setState({
    //       showingInfoWindow: false,
    //       activeMarker: null,
    //       // locationsArray: castle.latlng
    //       // position: this.state.castle.latlng
    //     })
    //   }
    // };






  render() {
    return (




      <Map
        google={this.props.google}
        onMapClicked={this.onMapClicked}
        initialCenter={{lat: 45.5149, lng: 24.3672}}
        zoom={8}
        styles={require('../data/MapStyling.json')}
        >


{// Create markers from JSON locations
}
        {Castles.map(castle =>

                  <Marker
                    onClick={this.props.onMarkerClick}
                    key={castle.place_id}
                    position={castle.latlng}
                    title={castle.name}
                    animation={4}
                    icon={require('../img/pointer.png')}
                    />


                )}



          <InfoWindow onClose={this.onInfoWindowClose}

marker={this.activeMarker}

visible={this.showingInfoWindow}>
          >
                      <div>
                        <h2>{this.listOfCastles}</h2>
                        <p>test</p>
                      </div>
                  </InfoWindow>




      </Map>

    );
  }


}

export default GoogleApiWrapper({

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'

})(MapContainer)

//
// <Marker onClick={this.onMarkerClick}
//         name={'Current location'} />





// <Marker onClick={this.onMarkerClick}
// animation={4}
//
//
//     title={castle.name}
//     name={castle.name}
//     position={{lat: 45.5149, lng: 25.3672}} />
    // <InfoWindow onClose={this.onInfoWindowClose}
    // position={{lat: 45.7149, lng: 25.3672}}
    // wiki = {this.state.wikiEntry}
    //
    //           marker={this.state.activeMarkerIndex}
    //           visible={this.showingInfoWindow}>
    //             <div>
    //               <h2>{this.state.selectedPlace}</h2>
    //             </div>
    //         </InfoWindow>
//
//
//     <Marker onClick={this.onMarkerClick}
//         title={this.props.place_id}
//         name={this.props.place_id}
//         position={{lat: 45.3600, lng: 25.5426}} />
//
//
//         <Marker onClick={this.onMarkerClick}
//             title={'Corvin Castle'}
//             name={'Corvin Castle'}
//             position={{lat: 45.7493, lng: 22.8883}} />
//
//             <Marker onClick={this.onMarkerClick}
//                 title={'Râșnov Citadel'}
//                 name={'Râșnov Citadel'}
//                 position={{lat: 45.5906, lng: 25.4694}} />
//
//                     <Marker onClick={this.onMarkerClick}
//                         title={'Fagaras Citadel'}
//                         name={'Fagaras Citadel'}
//                         position={{lat: 45.8453, lng: 24.9738}} />
//
//                         <Marker onClick={this.onMarkerClick}
//                             title={'The Citadel Alba-Carolina'}
//                             name={'The Citadel Alba-Carolina'}
//                             position={{lat: 46.0686, lng: 23.5717}} />
//
//                             <Marker onClick={this.onMarkerClick}
//                                 title={'Rupea Fortress'}
//                                 name={'Rupea Fortress'}
//                                 position={{lat: 46.0378, lng: 25.2129}} />
//
//                                 <Marker onClick={this.onMarkerClick}
//                                     title={'Sighișoara Citadel'}
//                                     name={'Sighișoara Citadel'}
//                                     position={{lat: 46.2198, lng: 24.7920}} />
//
//                                     <Marker onClick={this.onMarkerClick}
//                                         title={'Deva Fortress'}
//                                         name={'Deva Fortress'}
//                                         position={{lat: 45.8887, lng: 22.8970}} />
//
//                                         <Marker onClick={this.onMarkerClick}
//                                             title={'Poenari Castle'}
//                                             name={'Poenari Castle'}
//                                             position={{lat: 45.3536, lng: 24.6351}} />
