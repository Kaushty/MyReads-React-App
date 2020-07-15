import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

class Display extends Component {
  render() {
    const { bookList, updateShelf, availableBooks } = this.props;
    return (
      <ol className="books-grid">
        {bookList.map((book) => (
          <BookList
            key={book.id}
            book={book}
            updateShelf={updateShelf}
            availableBooks={availableBooks}
          />
        ))}
      </ol>
    );
  }
}

Display.propTypes = {
  bookList: PropTypes.array.isRequired,
};

export default Display;
