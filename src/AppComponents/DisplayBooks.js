import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

class Display extends Component {
  render() {
    const books = this.props.bookList;
    return (
      <ol className="books-grid">
        {books.length === 0 && <p>Nothing to Display</p>}
        {books && books.map((book) => <BookList key={book.id} book={book} />)}
      </ol>
    );
  }
}

Display.propTypes = {
  bookList: PropTypes.array.isRequired,
};

export default Display;
