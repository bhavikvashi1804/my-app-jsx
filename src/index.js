import React from "react";
import ReactDOM from "react-dom";

import './App.css';


const styleForH1={
  color:"yellow",
  fontSize:"20px",
  border:"1px solid green"
};

styleForH1.color="cyan";

ReactDOM.render(
  <h1 style={styleForH1}>Hello World</h1>,
  document.getElementById("root")
);


//here style will be written as JS object {color:'red'}
//to indicate that this is JS we have to specify that by using {} 
//here key must be camle case