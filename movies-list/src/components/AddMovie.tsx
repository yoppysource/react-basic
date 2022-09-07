import React from "react";
import { Movie } from "../interfaces/Movie";
import classes from "./AddMovie.module.css";

const AddMovie: React.FC<{ onAddMovie: (movie: Movie) => void }> = (props) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const openingTextRef = React.useRef<HTMLTextAreaElement | null>(null);
  const releaseDateRef = React.useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      titleRef.current?.value === null ||
      openingTextRef.current?.value === null ||
      releaseDateRef.current?.value === null
    )
      return;

    const movie = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };
    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
