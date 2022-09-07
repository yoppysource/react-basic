import React from "react";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";
import classes from "./MoviesList.module.css";

const MovieList: React.FC<{ movies: Movie[] }> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <MovieComponent
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
