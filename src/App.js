import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e, incValue) => {
    setCount((prev)=>prev + incValue)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <button onClick={(e)=>{handleClick(e,1)}}>Increment</button>
      <button  onClick={(e)=>{handleClick(e,-1)}}>Decrement</button>
    </div>
  );
}

export default App;
