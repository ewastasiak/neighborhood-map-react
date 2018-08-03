import React, { Component } from 'react';
import App from '../App.css';
import Castles from '../data/castles.json';

//
// queryHandler = (query) => {
//   this.setState({ query: query })
//   this.props.filterLocations(query)
// }

  // handleQuery = (query) => {
  //   this.setState({
  //     query: query
  //   })
  //   this.updateResults(query);
  // }
  //
  //
  // updateResults = (query) => {
  //
  //     if (query) {
  //       BooksAPI.search(query).then((results) => {
  //         //error handling ternary for search
  //         results.error ? this.setState({ results: [] }) : this.setState({ results: results })
  //       })
  //     } else {
  //       this.setState({ results: [] });
  //     }
  //   }




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
                      
                       onChange={(event) => this.updateSearch(event.target.value)}
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



//
// class SearchPage extends Component {
//
//
//   state = {
//     query: '',
//     results: []
//   }
//
//
//   updateQuery = (query) => {
//     this.setState({
//       query: query
//     })
//     this.updateResults(query);
//   }
//
//
//   updateResults = (query) => {
//
//     if (query) {
//       BooksAPI.search(query).then((results) => {
//         //error handling ternary for search
//         results.error ? this.setState({ results: [] }) : this.setState({ results: results })
//       })
//     } else {
//       this.setState({ results: [] });
//     }
//   }
//
//
//   render() {
//
//     return (
//       <div className="search-books">
//
//         <div className="search-books-bar">
//
//           <Link to="/" className="close-search">
//             Close
//           </Link>
//
//           <div className="search-books-input-wrapper">
//             <input
//               type="text"
//               placeholder="Search by title or author"
//               value={this.state.query}
//               onChange={(event) => this.updateQuery(event.target.value)}
//             />
//           </div>
//
//         </div>
//
//
//         <div className="search-books-results">
//           <ol className="books-grid">
//             {
//               this.state.results.map(result => {
//                 let shelfName = "none";
//
//                 this.props.books.map(book => (
//                   book.id === result.id ?
//                   shelfName = book.shelf :
//                   ''
//                 ));
//
//                 return (
//                 <li key={result.id}>
//                 <Book
//                 book={result}
//                 changeShelves={this.props.changeShelves}
//                 currentShelf={shelfName}
//                 />
//
//                 </li>
//               );
//               })
//             }
//           </ol>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default SearchPage;
