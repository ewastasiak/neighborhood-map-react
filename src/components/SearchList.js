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















// TODO
// https://codepen.io/pjmtokyo/pen/ZGVjVV

  //
  // var FilteredList = React.createClass({
  //   filterList: function(event){
  //     var updatedList = this.state.initialItems;
  //     updatedList = updatedList.filter(function(item){
  //       return item.toLowerCase().search(
  //         event.target.value.toLowerCase()) !== -1;
  //     });
  //     this.setState({items: updatedList});
  //   },
  //   getInitialState: function(){
  //      return {
  //        initialItems: [
  //          "Apples",
  //          "Broccoli",
  //          "Chicken",
  //          "Bacon",
  //          "Eggs",
  //          "Salmon",
  //          "Granola",
  //          "Bananas",
  //          "Beer",
  //          "Wine",
  //          "Yogurt"
  //        ],
  //        items: []
  //      }
  //   },
  //   componentWillMount: function(){
  //     this.setState({items: this.state.initialItems})
  //   },
  //   render: function(){
  //     return (
  //       <div className="filter-list">
  //         <input type="text" placeholder="Search" onChange={this.filterList}/>
  //       <List items={this.state.items}/>
  //       </div>
  //     );
  //   }
  // });
  //
  // var List = React.createClass({
  //   render: function(){
  //     return (
  //       <ul>
  //       {
  //         this.props.items.map(function(item) {
  //           return <li key={item}>{item}</li>
  //         })
  //        }
  //       </ul>
  //     )
  //   }
  // });
  //
  // React.render(<FilteredList/>, document.getElementById('mount-point'));

















  // TODO
    // https://www.youtube.com/watch?v=HqQ-kOchqHM&feature=youtu.be


    // Castles.filter(castle => {
    //       return castle.castle.toLowerCase().indexOf(filterCastles.toLowerCase()) >= 0
    //     })
    //     .map(castle => {
    //       return (
    //         <div className="castles-list">
    //         <li key={castle.place_id}>{castle.castle}</li>
    //         </div>
    //       )
    //     })
    // }

class SearchList extends Component{






  // {
  //   Castles.filter((castle) => {
  //     return (
  //     this.props.selectedPlace.title === castle.name
  //     )
  //   })
  //     .map((castle) => {
  //
  //
  //     return (
  //
  //             <div className={"info"}>
  //             {this.props.fetchedPics[castle.name]}
  //
  //               <h2 className={"info"}>{this.props.selectedPlace.title}</h2>
  //               <a href={castle.wikiLink} target="_blank">Read more</a>
  //               <p className={"info"}>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
  //               </p>
  //             </div>
  // );
  // })
  // }



  state = {
    query: '',
    results: Castles,
  }

  filterCastles(query) {
    this.setState ({
      query: query
    })
    this.updateResults(this.query);
  }


// https://www.youtube.com/watch?v=HqQ-kOchqHM&feature=youtu.be
  updateResults = (query) => {
//shorten to ternary
      if (query) {
        console.log('Seems to do something');

        // Castles.filter((castle) => {
        //   return (
        //   // TODO// query === castle.name
        //   )
        // })

        // Castles.filter(castle => {
        //       // return (castle.castle.toLowerCase().indexOf(this.filterCastles.toLowerCase()) >= 0)
        //        return (castle.castle.toLowerCase())
        //     })

        //UNCOMMENT
            // .map(castle => {
            //   return (
            //     <div className="castles-list">
            //     <li key={castle.place_id}>{castle.castle}</li>
            //     </div>
            //   )
            // })
        }

       else {
        this.setState({ results: Castles });
      }
    }






render() {
  return (
    <div className="castles-list">

    <search aria-label="Filter the list of Transylvanian castles" role="search" >
    <input

          className="search-page"
          type="text"
          placeholder="Search a castle"
          value={this.state.query}
           onChange={(event) => this.updateResults(event.target.value)}
        />
    </search>




                <ul aria-label="Filtered list of castles">
                {
                  Castles.map(castle => {
                    return <li key={castle.place_id}>{castle.name}</li>;
                  })
                }
                </ul>







<img className="pb" alt="" src={ require('../img/dracula-castles.png') } />
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
