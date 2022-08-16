import React from 'react'
import MovieCard from './MovieCard'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ListMovies = ({movies}) => {
    const classes = useStyles();

    const movieCards = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <div>
        <h1>Movies List</h1>
        <List component="nav" aria-label="secondary mailbox folders">
        {movieCards}
        </List>
    </div>
  )
}

export default ListMovies