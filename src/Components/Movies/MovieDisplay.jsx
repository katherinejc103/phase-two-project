import React from 'react'
import ListMovies from './ListMovies';

const MovieDisplay = ({movie}) => {
  return (
    <div>
        {movie.Title}
        {movie.Rating}
        {movie.Image}
        {movie.Year}
        {movie.Description}
    </div>
  )
}

export default MovieDisplay