import React from "react";
import "./style.css";
import BookResult from "../BookResult";

const BookList = props => {
  return (
    <div className="bookListContainer border border-dark my-4">
      <h4 className="text-center m-2">{props.listName}</h4>

      <div
        className="border border-dark mx-3 mb-4"
        style={{ minHeight: "100px" }}
      >
        {props.bookArray.map(book => (
          <BookResult
            book={book}
            buttonType={props.buttonType}
            makeAuthorString={props.makeAuthorString}
            secondButtonEvent={props.secondButtonEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
