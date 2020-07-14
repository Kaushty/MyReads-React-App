import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

class Display extends Component {
  render() {
    const books = this.props.bookList;
    console.log(books);
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <BookList key={book.id} book={book} />
        ))}
      </ol>
    );
  }
}

Display.propTypes = {
  bookList: PropTypes.array.isRequired,
};

export default Display;
