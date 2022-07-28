import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Katherine's Movies
            </Typography>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">Add New Movie</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;