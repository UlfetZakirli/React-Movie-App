import React from "react";

const SearchBox = (props) => {
  const {setSearchValue}=props
  
  return (
    <div className="col col-sm-4">
      <input type="text" className="form-control" onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search to Type..." />
    </div>
  );
};

export default SearchBox;
