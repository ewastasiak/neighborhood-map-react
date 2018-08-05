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



{Castles.map((castle) => {

  return ( <Marker
    onClick={this.props.onMarkerClick}
    key={castle.place_id}
    position={castle.latlng}
    title={castle.name}
    icon={this.props.selectedPlace.title === castle.name ? require('../img/pointer-select.png') : require('../img/pointer.png')}
    />
  )
}
)

}



          <InfoWindow onClose={this.onInfoWindowClose}

                      marker={this.props.activeMarker}

                      visible={this.props.showingInfoWindow}>

          {Castles.map((castle) => {
            return (
                      <div>
{this.props.fetchedPics}
                        <h2>{this.props.selectedPlace.title}</h2>

                        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.

</p>
                      </div>



)
})}
</InfoWindow>

      </Map>




)
}

export default GoogleApiWrapper({

  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'

})(MapContainer)
