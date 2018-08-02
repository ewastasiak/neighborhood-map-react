import React, { Component } from 'react';
import App from '../App.css';
// import MarkerList from './MarkerList.js'
// import Castles from './castles.json';
import CastlesList from './CastlesList.js';



class SearchList extends Component{





render() {
  return (
    <div className="castles-list">

<ol>
                {

                      <CastlesList />

                }
                </ol>




<img className="pb" src={ require('../img/dracula-castles.png') } />
    </div>

  );

}
}

export default SearchList;

// props.castles
// //bookshelf
//     <li key={castle.id}>
//       <Castle
//       castle={castle}
//       />
//     </li>
//   ))







// <div className="search-books-input-wrapper">
//             <input
//               type="text"
//               placeholder="Search by title or author"
//               value={this.state.query}
//               onChange={(event) => this.updateQuery(event.target.value)}
//             />
//           </div>
//
//
// <h2>10 most known castles</h2>
//
// <ol className="castles-list">
// {
//
// <li>Castle</li>
//
// }
// </ol>
