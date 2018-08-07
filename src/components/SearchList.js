import React, { Component } from 'react';
import App from '../App.css';
import Castles from '../data/castles.json';


class SearchList extends Component{

// https://www.youtube.com/watch?v=HqQ-kOchqHM&feature=youtu.be


render() {
  return (
    <div className="castles-list">

      <div className="filter-castles">


        <input
          aria-label="Filter the list of Transylvanian castles"
          role="search"
          type="text"
          placeholder="Search a castle"
          value={this.props.query}
          onChange={e => this.props.filterCastles(e.target.value)}
        />

        <ul aria-label="Filtered list of castles">
        {
          this.props.listOfCastles.map(castle => {
            return (
                <li key={castle.place_id}>
                  <button onClick={this.props.onButtonClick}>
                      {castle.name}
                  </button>
                </li>);
          })
        }
        </ul>

      </div>

      <img className="pb" alt="" src={ require('../img/dracula-castles.png') } />

    </div>

    );

  }
}

export default SearchList;
