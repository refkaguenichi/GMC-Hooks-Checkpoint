import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const handleName = (name) => {
  alert("The movie is called: " + name);
};

const MovieList = ({ items, text, newRating }) => {
  return (
    <div>
      <div className="moviesData">
        {items
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating &&
              el.rating >= newRating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} handleName={handleName} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
