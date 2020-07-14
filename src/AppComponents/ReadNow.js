import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";
// import { fetchBooks } from "../Models/ApiHandler";

class ReadNow extends Component {
  state = {
    books: [],
  };

  filterBooks = (bookList) => {
    const books = bookList.filter((book) => book.shelf === "currentlyReading");
    return Array.from(books);
  };

  render() {
    const { books } = this.props;
    const bookArr = this.filterBooks(books);
    return (
      <div className="bookshelf-books">
        {bookArr.length !== 0 ? (
          <DisplayBooks bookList={bookArr} />
        ) : (
          // <DisplayBooks bookList={this.mockBookData} />
          <p>No Books to display</p>
        )}
      </div>
    );
  }
}

export default ReadNow;
