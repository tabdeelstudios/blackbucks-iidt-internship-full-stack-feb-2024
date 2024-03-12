import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const addInputValue = () => {
    setCounter(counter + Number(inputValue));
    setInputValue(0);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
      <br />
      <input
        type="number"
        onChange={(e) => handleInputChange(e.target.value)}
        value={inputValue}
      />
      <button onClick={addInputValue}>Add</button>
    </div>
  );
}

export default App;
