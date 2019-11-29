import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BootstrapContainer from "../components/BootstrapContainer";
import BookList from "../components/BookList";
import axios from "axios";

class Saved extends Component {
  state = {
    saved: []
  };

  getSavedBooks = () => {
    axios
      .get("/api/books")
      .then(response => {
        console.log(response.data);

        this.setState({ savedBooks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  makeAuthorString = authorArray => {
    let authorString = "";

    for (let i = 0; i < authorArray.length; i++) {
      if (i === 0) {
        authorString = authorArray[i];
      } else if (i < authorArray.length - 1) {
        authorString = authorString + ", " + authorArray[i];
      } else {
        authorString = authorString + " and " + authorArray[i];
      }
    }

    return authorString;
  };

  deleteBook = bookId => {
    axios
      .delete("/api/books/" + bookId)
      .then(response => {
        console.log(response);

        this.getSavedBooks();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron message="Browse books saved from previous searches." />

        <BootstrapContainer>
          <BookList
            listName="Saved Books"
            bookArray={this.state.saved}
            buttonType="Delete"
            makeAuthorString={this.makeAuthorString}
            secondButtonEvent={this.deleteBook}
          />
        </BootstrapContainer>
      </div>
    );
  }
}

export default Saved;
