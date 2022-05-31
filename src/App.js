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

  // To get movies from console.log to component - setMovie setter function
  const [ movies, setMovies] = useState([]);

  // Add search functionality
  const [ searchTerm, setSearchTerm ] = useState('');

  // Function to fetch movies
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
          // Dynamically search for movies  instead of having a hardcoded inoput
          value={searchTerm}
          // Can now change input field search term
          onChange={(e) => setSearchTerm(e.target.value)}>
        </input>
        <img
          src={SearchIcon}
          alt="search"
          // Use searchTerm to re-render array of movies via img onClick listener
          onClick={() => searchMovies(searchTerm)}>
        </img>
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No movies found</h1>
          </div>
        )}
    </div>
  );
}

export default App;
