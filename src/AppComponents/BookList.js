import React from "react";

class BookList extends React.Component {
  checkValue = (bookId, availableBooks) => {
    for (let i = 0; i < availableBooks.length; i++) {
      if (availableBooks[i].id === bookId) {
        return availableBooks[i].shelf;
      }
    }
    return "none";
  };

  render() {
    const { book, updateShelf, availableBooks } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url("${
                  book.imageLinks ? book.imageLinks.smallThumbnail : ""
                }")`,
              }}
            />
            {availableBooks ? (
              <div className="book-shelf-changer">
                <select
                  value={this.checkValue(book.id, availableBooks)}
                  onChange={(event) => {
                    updateShelf(book, event.target.value);
                  }}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            ) : (
              <div className="book-shelf-changer">
                <select
                  value={book.shelf}
                  onChange={(event) => {
                    updateShelf(book, event.target.value);
                  }}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            )}
          </div>
          <div className="book-title">{`${book.title}`}</div>
          <div className="book-authors">{`${book.authors}`}</div>
        </div>
      </li>
    );
  }
}

export default BookList;
