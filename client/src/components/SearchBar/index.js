import React from "react";
import "./style.css";

const SearchBar = props => {
  return (
    <form action="">
        <div className="p1 bg-light border border-dark">
            <h4 className="text-center mb-0 mt-2">Book Search</h4>

            <div className="input-group d-flex py-2 mb-2">
                <input value={props.query} onChange={props.changeSearchInput} type="text" placeholder="Enter a book you'd like to search for." className="bookSearch flex-fill px-2 mx-3" />

                <button type="submit" onClick={props.searchForBook} className="btn btn-danger mr-3">Search</button>
            </div>
        </div>
    </form>
  );
};

export default SearchBar;