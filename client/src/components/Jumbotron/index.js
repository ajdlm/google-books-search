import React from "react";
import "./style.css";

const Jumbotron = props => {
  return (
    <div
      className="jumbotron d-flex align-items-center justify-content-center"
      style={{ backgroundImage: "url(bookshelf.jpg)" }}
    >
      <div className="text-center text-white">
        <h1 className="mb-0">Google Books Search</h1>

        <h4 className="mt-5 mb-0">{props.message}</h4>
      </div>
    </div>
  );
};

export default Jumbotron;
