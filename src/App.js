import React from "react";
import "./App.css";
import Nav from "./Nav";
import { MovieProvider } from "./useCustomContex";
import Movie from "./Movie";
function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <Movie/>
      </MovieProvider>
    </div>
  );
}

export default App;
