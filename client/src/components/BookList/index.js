import React from "react";
import "./style.css";
import BookResult from "../BookResult";

// SWITCH BETWEEN DELETE AND SAVE BUTTON BASED ON URL
// (LIKE WHAT YOU DID IN NAVBAR TO SET .active CLASS)
// OR PROPERTY OF props PASSED INTO BookList VIA
// THE PAGE BEING RENDERED
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
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
