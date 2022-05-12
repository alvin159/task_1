import React from "react";
import '../App.css';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function exercise6() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  const listItems = animals.map((animal) =>
    <ListItem key={animal.toString()} value={animal} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default exercise6;
