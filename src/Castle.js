import React, { Component } from 'react';
// import Map from './Map.js'
import App from './App.css';
import Castles from './data/castles.json';
class Castle extends Component{



render() {
    return (
        <ul>
        {
          Castles.map(function(castle){
            return <li>{castle.id} - {castle.name}</li>;
          })
        }
        </ul>
    );
  }
}

export default Castle;
