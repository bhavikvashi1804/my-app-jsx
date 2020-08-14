import React from "react";
import ReactDOM from "react-dom";

const fName="Bhavik";
const lName="Vashi";

ReactDOM.render(
  <div>
    <p>Created by {fName+" "+lName}</p>
    <p>Copyright @{(new Date().getFullYear())}</p>
  </div>,
  document.getElementById("root")
);

//if else does not allow in JSX {}