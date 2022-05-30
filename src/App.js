import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

// API Key
// 9e1aa0a

// API URL variable
const API_URL = 'http://www.omdbapi.com?apikey=9e1aa0a'

const App = () => {

  // function to fetch movies
  const searchMovies = async (title) => {
    // call API
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data)
  }

  useEffect (() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <h1>This is an app :)</h1>
  );
}

export default App;
