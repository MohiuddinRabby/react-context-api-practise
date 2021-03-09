import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import BookDetails from "../BookDetails/BookDetails";

const BookList = () => {
  const { bookList } = useContext(BookContext);
  return (
    <div className="book-list">
      {bookList?.length ? (
        bookList.map((book) => (
          <ul key={book.id}>
            <BookDetails book={book} />
          </ul>
        ))
      ) : (
        <div>
          <p>No Books to Read</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
