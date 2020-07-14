import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";

class BookShelf extends Component {
  state = {
    books: [],
  };

  filterBooks = (bookList) => {
    const books = bookList.filter((book) => book.shelf === "currentlyReading");
    return Array.from(books);
  };

  render() {
    const bookArr = this.props.books;
    console.log(bookArr);
    // const bookArr = this.filterBooks(books);
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

export default BookShelf;
