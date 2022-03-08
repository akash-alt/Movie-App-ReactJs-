import React, { useEffect, useState } from 'react';
import "./movieapp.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

/// key :  7c51a00d
const movie1 = 
  {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}


const API_URL = "http://www.omdbapi.com?apikey=7c51a00d";

const MovieApp = () => {

  const [movies,setMovies] = useState([])
  const [searchItem,setSearchItem] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(()=>{
    searchMovies('Spiderman')
  },[])
 

  return (
    <div className='app'>
      <h1> MovieApp </h1>
          <div className='search'>
            <input 
              placeholder='Search for movie'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              
            />
            <img 
              src={SearchIcon} 
              alt="search"
              onClick={() => searchMovies(searchItem)}
            />
          </div>

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
   
    </div>
  )
}

export default MovieApp