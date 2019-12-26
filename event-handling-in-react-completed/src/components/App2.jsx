import React, { useState } from "react";

function App2() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChangeName(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App2;
