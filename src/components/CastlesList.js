import React, { Component } from 'react';
// import Map from './Map.js'
import App from '../App.css';
import Castles from '../data/castles.json';

class CastlesList extends Component{





  //
  // .then((listOfCastles) => {
  // this.setState({ listOfCastles: listOfCastles });

  // <input
  //       type="text"
  //       placeholder="Search a castle"
  //       value={this.state.query}
  //       onChange={(event) => this.updateQuery(event.target.value)}
  //     />
  render() {
      return (

        <div className="castles-list">



          <ul>
          {
            Castles.map(castle => {
              return <li>{castle.name}</li>;
            })
          }
          </ul>
          <input
                type="text"
                placeholder="Search a castle"
              />
          </div>
      );
    }
}

export default CastlesList;
