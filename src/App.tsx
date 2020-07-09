import React, { useState } from "react";
import "./App.css";
import StateListener from "./components/state-listener";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const incrementOnClick = () => {
    setInputValue(inputValue + 1);
  };
  const decrementOnClick = () => {
    setInputValue(inputValue - 1);
  };
  const multipleByTwo = () => {
    setInputValue(inputValue * 2);
  };
  return (
    <div className="App">
      <StateListener value={inputValue} setMultipleByTwo={multipleByTwo} />

      <button className="button-class" onClick={incrementOnClick}>
        Increment +
      </button>

      <button className="button-class" onClick={decrementOnClick}>
        Decrement -
      </button>
    </div>
  );
}

export default App;
