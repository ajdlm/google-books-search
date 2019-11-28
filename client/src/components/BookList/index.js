import React from "react";
import "./style.css";

// SWITCH BETWEEN DELETE AND SAVE BUTTON BASED ON URL
// (LIKE WHAT YOU DID IN NAVBAR TO SET .active CLASS)
// OR PROPERTY OF props PASSED INTO BookList VIA
// THE PAGE BEING RENDERED
const BookList = props => {
  return (
    <div className="border border-dark my-4">
      <h4 className="text-center m-2">Results</h4>

      <div className="border border-dark mx-3 mb-4" style={{minHeight: "100px"}}></div>
    </div>
  );
};

export default BookList;
