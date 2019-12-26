import React from "react";
// import Login from "./Login";
import Form from "./Form";
import Count from "./Count";

var isLoggedIn = false;
var userIsRegistered = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={userIsRegistered} />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
      <Count />
    </div>
  );
}

export default App;
