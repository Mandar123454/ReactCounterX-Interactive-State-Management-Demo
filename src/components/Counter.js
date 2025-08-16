import React, { useState } from 'react';

// Simple Counter component that demonstrates both state and props
function Counter(props) {
  // Using useState hook to manage state
  const [count, setCount] = useState(0);

  // Function to increment counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{props.title}</h2>
      <p>Welcome, {props.name}!</p>
      <p>Current count: {count}</p>
      <button onClick={increment} style={{ marginRight: '10px', padding: '5px 10px' }}>Increment</button>
      <button onClick={decrement} style={{ padding: '5px 10px' }}>Decrement</button>
    </div>
  );
}

export default Counter;
