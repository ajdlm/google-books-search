import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BootstrapContainer from "../components/BootstrapContainer";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  render() {
    return (
      <div>
        <Jumbotron message="Search for and save books you're interested in." />

        <BootstrapContainer>
          <SearchBar />

          <BookList />
        </BootstrapContainer>
      </div>
    );
  }
}

export default Search;
