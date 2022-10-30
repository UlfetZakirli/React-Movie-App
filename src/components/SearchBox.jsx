import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        placeholder="Search to Type..."
        className="form-control"
        onChange={(e)=>props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
