import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BootstrapContainer from "../components/BootstrapContainer";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import axios from "axios";

class Search extends Component {
  state = {
    query: "",
    results: [],
    savedBooks: [],
    noResultsText: "Click on the Search button to generate results.",
  };

  getSavedBooks = () => {
    axios
      .get("/api/books")
      .then((response) => {
        this.setState({ savedBooks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  changeSearchInput = (event) => {
    this.setState({ query: event.target.value });
  };

  searchForBook = (event) => {
    event.preventDefault();

    const newResultsArray = [];

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.query)
      .then((results) => {
        results.data.items
          ? results.data.items.map((book) => {
              console.log(book);

              const newResult = {
                title: book.volumeInfo.title,

                authors: book.volumeInfo.authors,

                description: book.volumeInfo.description,

                image: book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "no-image-available.png",

                link: book.volumeInfo.infoLink,
              };

              newResultsArray.push(newResult);
            })
          : this.setState({ noResultsText: "No results found." });

        this.setState({ results: newResultsArray });
      })
      .catch((error) => console.log(error));
  };

  makeAuthorString = (authorArray) => {
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

  isBookSaved = (bookLink, savedBooks) => {
    let alreadySaved = false;

    for (let j = 0; j < savedBooks.length; j++) {
      if (savedBooks[j].link === bookLink) {
        alreadySaved = true;

        break;
      }
    }

    return alreadySaved;
  };

  addNewBook = (newBook) => {
    axios
      .post("/api/books", newBook)
      .then((response) => {
        console.log(response);

        this.getSavedBooks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron message="Search for and save books you're interested in." />

        <BootstrapContainer>
          <SearchBar
            query={this.state.query}
            changeSearchInput={this.changeSearchInput}
            searchForBook={this.searchForBook}
          />

          <BookList
            listName="Results"
            bookArray={this.state.results}
            savedBooks={this.state.savedBooks}
            buttonType="Save"
            makeAuthorString={this.makeAuthorString}
            isBookSaved={this.isBookSaved}
            secondButtonEvent={this.addNewBook}
            emptyListText={this.state.noResultsText}
          />
        </BootstrapContainer>
      </div>
    );
  }
}

export default Search;
