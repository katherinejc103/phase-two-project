import React, {useState, useEffect} from 'react';
import Home from './Components/Home';
import NavBar from './Components/Navigation/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListMovies from './Components/Movies/ListMovies';
import NewMovie from './Components/Movies/NewMovie';
import { baseUrl } from "./Globals";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch(baseUrl + '/movies')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))

    const fetchMovies = async () => {
      const response = await fetch(baseUrl + '/movies');
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  }, [])

  function handleAddNewMovie(movie) {
    setMovies([...movies, movie])
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<ListMovies movies={movies}/>} />
        <Route path="/movies/new" element={<NewMovie addMovie={handleAddNewMovie}/>} />
      </Routes>
    </Router>
  );
}

export default App;
