'use client';

import React, { useState } from 'react';

interface CounterProps {
  onAddToList: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onAddToList }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev > 0 ? prev - 1 : 0);
  };

  const addToList = () => {
    if (count > 0) {
      onAddToList(count);
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <h3 className="counter-title">Counter</h3>
      <div className="counter-controls">
        <button 
          className="counter-btn decrement-btn" 
          onClick={decrement}
          aria-label="Decrement"
        >
          -
        </button>
        <span className="counter-display">{count}</span>
        <button 
          className="counter-btn increment-btn" 
          onClick={increment}
          aria-label="Increment"
        >
          +
        </button>
      </div>
      <button 
        className="add-to-list-btn"
        onClick={addToList}
        disabled={count === 0}
      >
        Add to List
      </button>
    </div>
  );
};

export default Counter;
