// useEffect to fetch data from API as soon as component loads
// useState to get data from console.log to component
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from './MovieCard';

// API Key
// 9e1aa0a

// API URL variable
const API_URL = 'http://www.omdbapi.com?apikey=9e1aa0a'

const movie1 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  "Title": "Italian Spiderman",
  "Type": "movie",
  "Year": "2007",
  "imdbID": "tt2705436"
}

const App = () => {

  // to get movies from console.log to component - setMovie setter function
  const [ movies, setMovies] = useState([]);

  // function to fetch movies
  const searchMovies = async (title) => {
    // call API
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect (() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search movies..."
          value="Superman"
          onChange={() => {}}>
        </input>
        <img
          src={SearchIcon}
          alt="search"
          onCLick={() => {}}>
        </img>
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              <MovieCard movie1={movie1} />
             </div>
          ) : (
            <div className="empty">
              <h1>No movies found</h1>
            </div>
          )

      }
    </div>
  );
}

export default App;
