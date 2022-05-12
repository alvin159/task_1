import React, { useState } from 'react';
import '../App.css';

function Exercise4() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise4">
      <p>The button has been clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Exercise4;
