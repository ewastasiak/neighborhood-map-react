import React, { Component } from 'react';
// import Map from './Map.js'
import App from '../App.css';
import Castles from '../data/castles.json';

class CastlesList extends Component{


  // <input
  //       type="text"
  //       placeholder="Search a castle"
  //       value={this.state.query}
  //       onChange={(event) => this.updateQuery(event.target.value)}
  //     />
render() {
    return (

      <div className="castles-list">

      <input
            type="text"
            placeholder="Search a castle"
          />

        <ul>
        {
          Castles.map(function(castle){
            return <li>{castle.name}</li>;
          })
        }
        </ul>

        </div>
    );
  }
}

export default CastlesList;
