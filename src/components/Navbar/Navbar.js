import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

const Navbar = () => {
  const { bookList } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book List App</h1>
      <p>{bookList.length} books avaiable in the List</p>
    </div>
  );
};

export default Navbar;
