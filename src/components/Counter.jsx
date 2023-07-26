import React from 'react';

const Counter = () => {
  const [count, setcount] = React.useState(0);

  const increment = () => {
    ++count;
    setcount(count + 1);
  };

  const decrement = () => {
    --count;
    setcount(count - 1);
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
