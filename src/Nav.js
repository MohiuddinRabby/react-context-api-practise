import React from "react";
import "./Nav.css";
import { useMovieContex } from "./Context";
const Nav = () => {
  const [moives, setMovies] = useMovieContex();
  return (
    <div>
      <div className="header">
        <nav>
          <span>MRabby</span>
          <span>{moives.length}</span>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
