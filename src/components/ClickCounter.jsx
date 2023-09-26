import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique Aqui</button>
      <p>Total de Cliques: {count}</p>
    </div>
  );
};

export default ClickCounter;
