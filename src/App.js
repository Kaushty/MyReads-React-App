import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./AppComponents/SearchComponent";
import { Link, Route } from "react-router-dom";
import BookShelf from "./AppComponents/BookShelf";

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
    const shelves = ["currentlyReading", "wantToRead", "read"];
    const books = Array.from(this.state.books);
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
                    {shelves.map((status) => {
                      return (
                        <div key={status}>
                          <h2 className="bookshelf-title">
                            {status === "currentlyReading"
                              ? "Currently Reading"
                              : status === "wantToRead"
                              ? "Want to Read"
                              : "Read"}
                          </h2>
                          {/* {console.log()} */}
                          <BookShelf
                            books={books.filter(
                              (book) => book.shelf === status
                            )}
                          />
                        </div>
                      );
                    })}
                    ;
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
