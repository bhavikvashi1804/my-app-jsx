import React from "react";
import ReactDOM from "react-dom";

const name = "Bhavik Vashi";
const fName="Bhavik";
const lName="Vashi";

ReactDOM.render(
  <div>
    <h1>Programming Languages</h1>
    <ul>
      <li>C</li>
      <li>C++</li>
      <li>JAVA</li>
    </ul>
    <p>by {name}</p>
    <p>My name is {fName} {lName}</p>
    <p>ES6 Template Literal</p>
    <p>Hello {`${fName} ${lName}`}</p>
    <p>My roll no is {2 + 5}</p>
    <p>Your lucky number is {Math.floor(Math.random()*10)} </p>
  </div>,
  document.getElementById("root")
);

//if else does not allow in JSX {}