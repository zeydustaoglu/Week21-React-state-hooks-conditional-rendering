import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');

  function increase() {
    setCount(count + 1);
    setColor('yellow')
  }

  function decrease() {
    setCount(count - 1);
    setColor('red')
  }

  return (
    <div className="container">
      <h1 style={{'fontSize': '100px', 'fontWeight': '800','color':color}}>{count}</h1>
      <button onClick = {decrease}> - </button>
      <button onClick = {increase}> + </button>
    </div>
  );
}

export default Count;