import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => (
        <div className="movie">  
            <div className="movie-info" >
                <h4>
                    {title}       
                </h4>
            </div>
        
            <div className="movie-over floater">
                <img src={IMG_API + poster_path} alt = {title} />
                <h3>Movie Summary:</h3>
                <p>{overview}</p>
                <span>Movie Rating: {vote_average}</span>
            </div>
        </div>
    );

export default Movie;