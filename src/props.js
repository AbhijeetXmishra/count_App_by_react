import React, { useState } from "react";

let count = 0;
const Propss = (props) => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((count += 1));
  };

  const decrement = () => {
    if (count > 0) setNum((count -= 1));
  };

  return (
    <>
      <h1>Count</h1>

      <h3>{num}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Propss;
