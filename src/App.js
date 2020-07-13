import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ReadNow from "./AppComponents/ReadNow";
import ReadNext from "./AppComponents/ReadNext";
import ReadComplete from "./AppComponents/ReadComplete";
import Search from "./AppComponents/SearchComponent";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  searchBook = (e) => {
    BooksAPI.search("ART").then((res) => console.log(res));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <ReadNow />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <ReadNext />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <ReadComplete />
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link className="open-search-button" to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
