import React, { Component } from 'react';
// import Map from './Map.js'
import App from './App.css';
import Castles from './data/castles.json';
class Castle extends Component{



render() {

  const castle = React.createElement(
  'li',
  {className: 'castle-li-el'},
  // `${this.castle.id}`
  'I am a castle'
  );

return castle;
}
}
export default Castle;
