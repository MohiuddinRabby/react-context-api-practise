import React, { useState, createContext, useContext } from "react";

const MovieContex = createContext();

export const MovieProvider = (props) => {
  const data = [
    { name: "movie1" },
    { name: "movie1" },
    { name: "movie1" },
    { name: "movie1" },
    { name: "movie1" },
  ];
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <MovieContex.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContex.Provider>
    </div>
  );
};
export const useCusCon = () => {
  return useContext(MovieContex);
};
