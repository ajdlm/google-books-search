import React from "react";
import "./style.css";

// SWITCH BETWEEN DELETE AND SAVE BUTTON BASED ON URL
// (LIKE WHAT YOU DID IN NAVBAR TO SET .active CLASS)
// OR PROPERTY OF props PASSED INTO BookList VIA
// THE PAGE BEING RENDERED
const BookResult = props => {
  return (
    <div className="border-bottom border-dark p-4">
      <div className="row">
        <div className="col-6">
          <h4>
            <strong>{props.book.title}</strong>
          </h4>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <button
            className="viewButton btn btn-danger mr-2"
            href={props.book.link}
          >
            View
          </button>

          <button
            className={`${props.buttonType.toLowerCase()}Button btn btn-danger ml-1`}
          >
            {props.buttonType}
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <h5 className="mb-0">{`Written by ${props.makeAuthorString(props.book.authors)}`}</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-2 d-flex align-items-center">
          <img src={props.book.image} alt="book-image" />
        </div>

        <div className="col-10">
          <p className="mb-0">{props.book.description}</p>
        </div>
      </div>
    </div>
  );
};
//{`Written by ${props.book.authors[0]}`}
export default BookResult;
