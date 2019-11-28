import React from "react";
import Carousel from "../components/Carousel";
import BootstrapContainer from "../components/BootstrapContainer";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Search = () => {
  return (
    <div>
      <Carousel />

      <BootstrapContainer>
        <SearchBar />

        <BookList />
      </BootstrapContainer>
    </div>
  );
};

export default Search;
