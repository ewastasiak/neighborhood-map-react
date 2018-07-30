import React, { Component } from 'react';
// import Map from './Map.js'
import App from './App.css';

class Castle extends Component{



render() {

  const castle = React.createElement(
  'li',
  {className: 'castle-li-el'},
  'Hello, I am a castle, srsly'
  );

return castle;
}
}
export default Castle;
