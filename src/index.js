import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function Heading() {
  return <h1>Mobile</h1>;
}

function List() {
  return (
    <ul>
      <li>Samsung Galaxy Note 10 lite</li>
      <li>Samsung Galaxy S10 lite</li>
      <li>OnePlus 7t</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
