import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer.js'
import Info from './Info.js'
import SearchList from './SearchList.js'
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <h1>I forgot everything again</h1>
      </div>


      <MapContainer />
      <SearchList />

      <Info />


      </div>
    );
  }
}




//       <Map google={this.props.google} zoom={14}>
//
//   <Marker onClick={this.onMarkerClick}
//           name={'Current location'} />
//
//   <InfoWindow onClose={this.onInfoWindowClose}>
//   <div>
//     <h1>{this.state.selectedPlace.name}</h1>
//   </div>
//
//
//
//   </InfoWindow>
// </Map>







// export default App;
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
// })(MapContainer)
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB801YN2M2Gi-1YS0BFpSuiMzwgBka2KC4'
})(App)
