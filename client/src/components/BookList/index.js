import React from "react";
import "./style.css";
import BookResult from "../BookResult";

const BookList = (props) => {
  return (
    <div className="bookListContainer border border-dark my-4">
      <h4 className="text-center m-2">{props.listName}</h4>

      <div
        className="bookListBox border border-dark mx-3 mb-4"
        style={{ minHeight: "100px" }}
      >
        {props.bookArray.length > 0 ? (
          props.bookArray.map((book) => (
            <BookResult
              book={book}
              buttonType={props.buttonType}
              makeAuthorString={props.makeAuthorString}
              savedBooks={props.savedBooks}
              isBookSaved={props.isBookSaved}
              secondButtonEvent={props.secondButtonEvent}
            />
          ))
        ) : (
          <h5 className="noResultsText text-center py-4 my-3">{props.emptyListText}</h5>
        )}
      </div>
    </div>
  );
};

export default BookList;
