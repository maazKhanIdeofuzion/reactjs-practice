import React, { useState } from 'react';
import './App.css';
import IncrementComponent from './components/IncrementComponent';
import DatabindingComponent from './components/DatabindingComponent';

function App() {

  const [count, setCount] = useState(0);

  const incrementClicked = () => {
    setCount(count + 1)
  }

  const decrementClicked = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <button className="button-class" onClick={incrementClicked}>Increment</button>
      <button className="button-class" onClick={decrementClicked}>Decrement</button>
      <IncrementComponent value={count} />
      <DatabindingComponent />
    </div>
  );
}

export default App;
