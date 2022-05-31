import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

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

  // function to fetch movies
  const searchMovies = async (title) => {
    // call API
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
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

      <div className="container">
        <div className="movie">

          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
   );
}

export default App;
