import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBookFromList } = useContext(BookContext);
  return (
    <li onClick={() => removeBookFromList(book.id)}>
      <div>{book.title}</div>
      <div>{book.author}</div>
    </li>
  );
};

export default BookDetails;
