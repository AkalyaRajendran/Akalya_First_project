import React from 'react';

const Counter = () => {
  const [count, setcount] = React.useState(0);

  const increment = () => {
    setcount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setcount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

export default Counter;
