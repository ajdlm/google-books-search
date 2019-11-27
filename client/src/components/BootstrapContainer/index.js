import React from "react";
import "./style.css";

const BootstrapContainer = props => {
  return <div className="container-fluid my-3">{props.children}</div>;
}

export default BootstrapContainer;