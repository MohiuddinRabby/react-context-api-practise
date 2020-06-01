import React from 'react';

const MovieList = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.movies.name}</h1>
        </div>
    );
};

export default MovieList;