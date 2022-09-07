import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import { Movie } from "./interfaces/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map(
        (movieData: {
          episode_id: string;
          title: string;
          opening_crawl: string;
          release_date: string;
        }) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        }
      );
      setMovies(transformedMovies);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie: Movie) => {
    const response = await fetch("https://dsd", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    const loadedMovies = [];

    //Since it is nested documents
    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
      });
    }
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
