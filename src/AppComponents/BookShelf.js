import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";

class BookShelf extends Component {
  // filterBooks = (bookList) => {
  //   const books = bookList.filter((book) => book.shelf === "currentlyReading");
  //   return Array.from(books);
  // };

  render() {
    const { bookList, updateShelf } = this.props;
    // const bookArr = this.filterBooks(books);
    return (
      <div className="bookshelf-books">
        {bookList.length !== 0 ? (
          <DisplayBooks bookList={bookList} updateShelf={updateShelf} />
        ) : (
          // <DisplayBooks bookList={this.mockBookData} />
          <p>No Books to display</p>
        )}
      </div>
    );
  }
}

export default BookShelf;
