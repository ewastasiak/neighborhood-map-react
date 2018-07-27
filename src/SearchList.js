import React, { Component } from 'react';
import App from './App.css';

class SearchList extends Component{


render() {
  return (
    <div className="item item-1">




<h2 className=>10 most known castles</h2>

<ol className="castles-list">
{
props.books
//bookshelf
  .filter(book => book.shelf === 'read')
  .map(book => (
    <li key={book.id}>
      <Book
      book={book}
      changeShelves={props.changeShelves}
      currentShelf="read"
      />
    </li>
  ))
}
</ol>





    </div>
  );

}
}

export default SearchList;



function MainPage(props) {


    return (

      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

          <div>




          </div>

        </div>

        <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
        </div>
      </div>
    )
  }

export default MainPage;
