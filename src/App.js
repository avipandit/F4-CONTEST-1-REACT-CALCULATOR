import { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  const handleOperation = (operation) => {
    if (number1 === "" || number2 === "") {
      setError("Error: Please enter both numbers");
    } else {
      try {
        const resultNumber = eval(`${number1} ${operation} ${number2}`);
        setResult(resultNumber);
        setError("");
        setSuccess("Success: Your result is shown above!")
      } catch (e) {
        setError("Error: Invalid operation");
      }
    }
  };
  return (
    <div className='app'>
    <div className='container'>
      <h1 className='center'>React Calculator</h1>
      <div>
      <input
        type="text"
        placeholder="Number 1"
        value={number1}
        onChange={handleNumber1Change}
      />
      <br />
      <input
        type="text"
        placeholder="Number 2"
        value={number2}
        onChange={handleNumber2Change}
      />
      <br />
      <button onClick={() => handleOperation("+")}>+</button>
      <button onClick={() => handleOperation("-")}>-</button>
      <button onClick={() => handleOperation("*")}>*</button>
      <button onClick={() => handleOperation("/")}>/</button>
      <br />
      <h3>Result: {result}</h3>
      <div className='red'>{error}</div>
      <div className='green'>{success}</div>
    </div>
    </div>
  </div>
  );
}
export default Calculator;


