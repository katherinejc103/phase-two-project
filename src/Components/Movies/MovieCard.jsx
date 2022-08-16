import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function MovieCard({movie}) {
  const classes = useStyles();

//   function handleCardDisplay(){
//     {movie.Description}
//   }

  return (
    <NavLink to='/' style={() => ({textDecoration: "none"})}>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie Image"
          height="250"
          image={movie.Image}
          title={movie.Title}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {/* <MovieDisplay component={ Link } to="/movies/display"/> */}
    </NavLink>
  );
}

export default MovieCard