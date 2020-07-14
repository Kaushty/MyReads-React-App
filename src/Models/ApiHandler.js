import * as BooksAPI from "../BooksAPI";

export const fetchBooks = async (bookIDs) => {
  const books = Array.from(bookIDs);
  console.log(`Fetching Books`);
  let fetchedBooks = [];
  books.forEach((cur) => {
    try {
      BooksAPI.get(cur.id).then((res) => {
        if (res) {
          fetchedBooks = [...fetchedBooks, res];
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
  return fetchedBooks;
};
