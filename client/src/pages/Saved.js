import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BootstrapContainer from "../components/BootstrapContainer";
import BookList from "../components/BookList";

class Saved extends Component {
  state = {
    query: "",
    results: []
  };

  render() {
    return (
      <div>
        <Jumbotron message="Browse books saved from previous searches." />

        <BootstrapContainer>
          <BookList />
        </BootstrapContainer>
      </div>
    );
  }
}

export default Saved;
