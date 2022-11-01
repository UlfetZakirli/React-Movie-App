import React from "react";

const MovieListHeading = (props) => {
  const {title}=props
  return (
    <div className="col">
     <h1>{title}</h1>
    </div>
  );
};

export default MovieListHeading;
