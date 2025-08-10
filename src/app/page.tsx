'use client';

import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import ListView from '../components/ListView';

export default function Home() {
  const [numbers, setNumbers] = useState<number[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNumbers = localStorage.getItem('counterNumbers');
    if (savedNumbers) {
      setNumbers(JSON.parse(savedNumbers));
    }
  }, []);

  // Save to localStorage whenever numbers change
  useEffect(() => {
    localStorage.setItem('counterNumbers', JSON.stringify(numbers));
  }, [numbers]);

  const addToList = (value: number) => {
    // Prevent duplicates (optional requirement)
    if (!numbers.includes(value)) {
      setNumbers(prev => [...prev, value]);
    }
  };

  const resetList = () => {
    setNumbers([]);
  };

  const removeItem = (index: number) => {
    setNumbers(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Counter & List App</h1>
      </div>
      
      <div className="app-content">
        <Counter onAddToList={addToList} />
        <ListView numbers={numbers} onReset={resetList} onRemove={removeItem} />
      </div>
    </div>
  );
}
