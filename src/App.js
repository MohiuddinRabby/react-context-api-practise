import React from "react";
import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import BookForm from "./components/BookForm/BookForm";
import BookContextProvider from "./contexts/BookContext";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm/>
      </BookContextProvider>
    </div>
  );
};

export default App;
