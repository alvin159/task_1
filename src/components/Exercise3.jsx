import React from "react";
import '../App.css';

function exercise3() {
  function button1() {
    alert("You clicked on Button1 !");
  }

  function button2() {
    alert("You clicked on Button2 !");
  }

  function button3() {
    alert("You clicked on Button3 !");
  }

  return (
    <div className="exercise3" >
      <button className="btn" onClick={() => button1()}>Button 1</button>  
      <button className="btn" onClick={() => button2()}>Button 2</button>  
      <button className="btn" onClick={() => button3()}>Button 3</button>  
    </div>
    
  );
}

export default exercise3;
