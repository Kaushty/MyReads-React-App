import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import DisplayBooks from "./DisplayBooks";

class SearchComponent extends Component {
  state = {
    queryList: [],
  };

  searchBook = (e) => {
    const book_query = e.target.value;
    try {
      if (book_query.length > 0) {
        BooksAPI.search(book_query).then((res) => {
          if (res) {
            this.updateQueryList(Array.from(res));
          }
        });
      } else {
        this.setState({
          queryList: [],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  updateQueryList = (list) => {
    try {
      this.setState({
        queryList: list,
      });
    } catch (err) {
      console.log(err);
    }
  };

  updateShelf = (book, shelf_name) => {
    BooksAPI.update(book, shelf_name).then((res) => console.log(res));
  };

  render() {
    const searchResults = Array.from(this.state.queryList);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={(e) => {
                this.searchBook(e);
              }}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* Display the results of the search here */}
          {searchResults.length === 0 ? (
            <p>No results to Display</p>
          ) : (
            <DisplayBooks
              bookList={this.state.queryList}
              updateShelf={this.updateShelf}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
