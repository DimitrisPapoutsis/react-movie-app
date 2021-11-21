import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const API = 
"https://api.themoviedb.org/3/movie/popular?api_key=9198fa6d9a9713bc6b03ee9582525917&language=en-US&page=1&region=US";

const SEARCH_API = 
"https://api.themoviedb.org/3/search/movie?&api_key=9198fa6d9a9713bc6b03ee9582525917&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setMovies(data.results);
        
    })
    .catch(function() {
      console.log("API response Error");
    });
  }

  const handleOnSubmit = (e) => {
      e.preventDefault();

      if (searchTerm) {
        getMovies(SEARCH_API + searchTerm);
        setSearchTerm("");
      }
  };

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
};

  return (
    <>
      <header className="header_style">
      <h2 >The Movie Viewer</h2>
        <div className="logo_style"> 
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search Movie..."
              value={searchTerm}
              onChange={handleOnChange}
            /> 
          </form> 
        </div>
      </header>

      <div className="movie-container">
        {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
