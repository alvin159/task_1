import React from "react";
import '../App.css';

function exercise2() {
  function myFunction() {
    alert("You clicked me!");
  }
  return (
    <div className="exercise2" >
      <button className="btn" onClick={() => myFunction()}>Click Me</button>    
    </div>
  );
}

export default exercise2;
