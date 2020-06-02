import React, { useState, createContext, useContext } from "react";
import data from "./Data";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const movieData = data;
  const [movies, setMovies] = useState(movieData);
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};

export const useMovieContex = () => {
  return useContext(MovieContext);
};
