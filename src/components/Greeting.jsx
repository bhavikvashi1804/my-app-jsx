import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "yellow";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "cyan";
} else {
  greeting = "Good Night";
  customStyle.color = "green";
}

function Greeting() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Greeting;