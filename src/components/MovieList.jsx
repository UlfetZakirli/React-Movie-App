import React from "react";

const MovieList = (props) => {
  const { movies, MovieIcon,handleClickIcon } = props;
  return (
    <>
      {movies?.map((movie,index) => {
        return (
          <div key={index} className="image-container d-flex justifiy-content-start m-3">
            <img style={{ width: "200px" }} src={movie.Poster} alt="movie" />
            <div onClick={()=>handleClickIcon(movie)} className="overlay d-flex align-items-center justify-content-center">
              <MovieIcon/>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
