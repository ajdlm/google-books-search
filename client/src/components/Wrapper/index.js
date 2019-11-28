import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper bg-light">{props.children}</div>;
}

export default Wrapper;