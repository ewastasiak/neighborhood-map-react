import React, { Component } from 'react';
import App from '../App.css';
import Castles from '../data/castles.json';


class SearchList extends Component{





render() {
  return (
    <div className="castles-list">


                <ul>
                {
                  Castles.map(castle => {
                    return <li key={castle.place_id}>{castle.name}</li>;
                  })
                }
                </ul>
                <input
                      type="text"
                      placeholder="Search a castle"
                      
                    />


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
