import React from "react";
import Carousel from "../components/Carousel";
import BootstrapContainer from "../components/BootstrapContainer"
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <div>
      <Carousel />

      <BootstrapContainer>
        <SearchBar />
      </BootstrapContainer>
    </div>
  );
};

export default Search;
