import React from "react";
import ReactDOM from "react-dom";

import './App.css';


const date=new Date();
const currentTime=date.getHours();

let greeting;

const customStyle={
  color:"",
}

if(currentTime<12){
  greeting="Good Morning";
  customStyle.color="yellow";
}
else if(currentTime<18){
  greeting="Good Afternoon";
  customStyle.color="cyan";
}
else{
  greeting="Good Night";
  customStyle.color="green";
}

ReactDOM.render(
<h1 className="heading" style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);


//here style will be written as JS object {color:'red'}
//to indicate that this is JS we have to specify that by using {} 
//here key must be camle case