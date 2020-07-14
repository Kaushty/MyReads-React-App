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
    if (book_query.length > 0) {
      BooksAPI.search(book_query).then((res) => {
        if (res) {
          this.updateQueryList(Array.from(res));
          // console.log(res);
          BooksAPI.getAll().then((res) => {
            console.log(res);
          });
        }
      });
    } else {
      this.setState({
        queryList: [],
      });
    }
  };

  updateQueryList = (list) => {
    // console.log("updating Query list");
    this.setState((state, props) => ({
      queryList: list,
    }));
    // console.log(this.state.queryList);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
          <DisplayBooks bookList={this.state.queryList} />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
