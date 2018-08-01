import React, { Component } from 'react';
import App from './App.css';
// import MarkerList from './MarkerList.js'
// import Castles from './castles.json';
import Castle from './Castle.js';
import CastlesApi from './CastlesApi.js';


class SearchList extends Component{


// test from myBooks reader
  state = {
    query: '',
    results: []
  }


  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateResults(query);
  }


  updateResults = (query) => {

    if (query) {
      Castle.then((results) => {
        //error handling ternary for search
        results.error ? this.setState({ results: [] }) : this.setState({ results: results })
      })
    } else {
      this.setState({ results: '[]' });
    }
  }



  //
  // if (query) {
  //   CastlesAPI.search(query).then((results) => {
  //     //error handling ternary for search
  //     results.error ? this.setState({ results: [] }) : this.setState({ results: results })
  //   })
  // } else {
  //   this.setState({ results: [] });
  // }
  // }


render() {
  return (






    <div className="castles-list">
    <input
      type="text"
      placeholder="Search a castle"
      value={this.state.query}
      onChange={(event) => this.updateQuery(event.target.value)}
    />


    <ol>
                {
                   this.state.results.map(result => {
                     let shelfName = "none";

                     this.props.list.map(castle => (
                       castle.id === result.id ?
                       'listName = castle.list' :
                       ''
                     ));

                     return (
                     <li key={result.id}>
                     <Castle
                     castle={result}
                     />

                     </li>
                   );
                   })
                 }
</ol>


<img className="pb" src={ require('./img/dracula-castles.png') } />
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
