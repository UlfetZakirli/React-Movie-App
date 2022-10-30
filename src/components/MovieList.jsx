import React from "react";

const MovieList = ( props) => {
  const ComponentFavourites=props.componentFavourites
  return (
    <>
      {props.movies?.map((movie,index) => (
        <div key={index} className="image-container d-flex justifiy-content-start m-3">
          <img style={{ width: "200px" }} src={movie.Poster} alt="movie" />
          <div onClick={()=>props.myFavourites(movie)} className="overlay d-flex align-items-center justify-content-center">
            <ComponentFavourites/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
