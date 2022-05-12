import React from "react";
import '../App.css';

function exercise5() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  const listItems = animals.map((animal) =>
  <li>{animal}</li>
);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default exercise5;
