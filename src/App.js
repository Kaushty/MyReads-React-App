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
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
  }

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
                    <ReadNow books={this.state.books} />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <ReadNext books={this.state.books} />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <ReadComplete books={this.state.books} />
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
