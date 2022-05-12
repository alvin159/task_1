import React from "react";
import '../App.css';

function exercise8() {
  const data = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit."
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#."
    }
  ]

  return (
    <div className="exercise8">
      {data.map((data, key) => {
          return (
            <div className="box" key={key}>
              <h4>{data.setup}</h4> 
              <p>{data.punchline}</p>
            </div>
          );
        })}
    </div>
  );
}


export default exercise8;
