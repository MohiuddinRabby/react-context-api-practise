import React from 'react';
import { useMovieContex } from './Context';

const Movie = () => {
    const[movies,setMovies] = useMovieContex();
    return (
        <div>
            {
                movies.map(movie=><li>{movie.movie}</li>)
            }
        </div>
    );
};

export default Movie;