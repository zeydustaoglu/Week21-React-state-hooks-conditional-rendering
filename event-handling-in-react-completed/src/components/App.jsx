import React , {useState} from 'react';

function App() {

  const [headindText, setHeadingText] = useState('Welcome');

  const [isMouseOver, setMouseOver] = useState(false);
  const [isMouseOverClear, setMouseOverClear] = useState(false);

  function handleClick(){
    setHeadingText('Submitted! Thank You!')
  }

  function handleMouseOver(){
    setMouseOver(true)
  }

  function handleMouseOut(){
    setMouseOver(false)
  }

  function handleClickClear(){
    setHeadingText('Welcome')
  }

  function handleMouseOverClear(){
    setMouseOverClear(true)
  }

  function handleMouseOutClear(){
    setMouseOverClear(false)
  }



  return (
    <div className="container">
      <h1>{headindText}</h1><br/>
      <input type="text" placeholder="What's your name?" />
      <button
      style = {{backgroundColor:isMouseOver?'yellow':'white'}}
      onClick = {handleClick}
      onMouseOver = {handleMouseOver}
      onMouseOut = {handleMouseOut}
      >
      Submit
      </button><br/><br/>
      <button
      style = {{backgroundColor:isMouseOverClear?'red':'white',width:'5%'}}
      onClick = {handleClickClear}
      onMouseOver = {handleMouseOverClear}
      onMouseOut = {handleMouseOutClear}
      >
      Clear
      </button>
    </div>
  );
}

export default App;
