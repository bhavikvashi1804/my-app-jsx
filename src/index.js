import React from 'react';
import ReactDOM from 'react-dom';

const name="Bhavik Vashi";

ReactDOM.render(
  <div>
     <h1>Programming Languages</h1>
     <ul>
       <li>C</li>
       <li>C++</li>
       <li>JAVA</li>
     </ul> 
     <p>by {name}</p>
  </div>,
  document.getElementById('root')
);