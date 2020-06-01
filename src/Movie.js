import React from 'react';
import { useCusCon } from './useCustomContex';
import MovieList from './MovieList';

const Movie = () => {
    const [movie] = useCusCon();
    return (
        <div>
            {
                movie.map(movie=><MovieList movies={movie}></MovieList>)
            }
            
        </div>
    );
};

export default Movie;