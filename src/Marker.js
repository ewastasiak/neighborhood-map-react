//child of the <Map />
import React, { Component } from 'react';
// import Map from './Map.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


<Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'Bran Castle'}
    position={{lat: 45.5149, lng: 25.3672}} />



export default Marker;

  // <Marker
  //   name={'Dolores park'}
  //   position={{lat: 37.759703, lng: -122.428093}} />
  // <Marker />

  // <Marker
  //   name={'Your position'}
  //   position={{lat: 37.762391, lng: -122.439192}}
  //   icon={{
  //     url: "/path/to/custom_icon.png",
  //     anchor: new google.maps.Point(32,32),
  //     scaledSize: new google.maps.Size(64,64)
  //   }} />


  //         <Marker onClick={this.onMarkerClick}
  //                 name={'Current location'} />
  // <img className="pb" src={ require('./img/dracula-castles.png') } />
  //         <InfoWindow onClose={this.onInfoWindowClose}>
  //
  //         </InfoWindow>
  //       </Map>
