import React from "react";
import "./style.css";
import ShowMore from "react-show-more";

const BookResult = props => {
  return (
    <div className="border-bottom border-dark p-4">
      <div className="row">
        <div className="col-sm-6 bookTitleDiv">
          <h4>
            <strong>{props.book.title}</strong>
          </h4>
        </div>
        <div className="col-sm-6 d-flex justify-content-end align-items-center buttonDiv">
          <button
            className="viewButton btn btn-danger mr-2"
            onClick={() => {
              window.open(props.book.link);
            }}
          >
            View
          </button>

          <button
            className={`${props.buttonType.toLowerCase()}Button btn ${
              props.isBookSaved(props.book.link, props.savedBooks)
                ? "btn-success"
                : "btn-danger"
            } ml-1`}
            onClick={() => {
              props.buttonType === "Save"
                ? props.secondButtonEvent(props.book)
                : props.secondButtonEvent(props.book._id);
            }}
          >
            {props.isBookSaved(props.book.link, props.savedBooks)
              ? "Saved!"
              : props.buttonType}
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 authorStringDiv">
          <h5 className="mb-0">{`Written by ${props.makeAuthorString(
            props.book.authors
          )}`}</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 d-flex align-items-center coverImageDiv">
          <img src={props.book.image} alt="book-cover" />
        </div>

        <div className="col-lg-10 col-md-9 col-sm-8">
          {/* Use the react-show-more npm package component to truncate text that's too long with the option of clicking on the `show more` link in order to see all of it. */}
          <ShowMore lines={8} more="show more" less="show less" anchorClass="">
            {props.book.description}
          </ShowMore>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
