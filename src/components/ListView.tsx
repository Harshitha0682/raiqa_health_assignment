'use client';

import React, { useState } from 'react';

interface ListViewProps {
  numbers: number[];
  onReset: () => void;
  onRemove: (index: number) => void;
}

const ListView: React.FC<ListViewProps> = ({ numbers, onReset, onRemove }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const sortedNumbers = [...numbers].sort((a, b) => {
    return sortOrder === 'asc' ? a - b : b - a;
  });

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <h3 className="list-title">Numbers List</h3>
        <div className="list-controls">
          <button 
            className="reset-btn"
            onClick={onReset}
          >
            Reset
          </button>
          <button 
            className="sort-btn"
            onClick={toggleSort}
          >
            Sort {sortOrder === 'asc' ? '↓' : '↑'}
          </button>
        </div>
      </div>
      
      <div className="list-items">
        {sortedNumbers.length === 0 ? (
          <div className="empty-list">No numbers added yet</div>
        ) : (
          sortedNumbers.map((number, index) => {
            const originalIndex = numbers.indexOf(number);
            return (
              <div key={`${number}-${originalIndex}`} className="list-item">
                <span className="item-number">{number}</span>
                <span className="item-position">#{index + 1}</span>
                <button 
                  className="remove-btn"
                  onClick={() => onRemove(originalIndex)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            );
          })
        )}
      </div>
      
      {sortedNumbers.length > 0 && (
        <div className="list-summary">
          Total numbers: {sortedNumbers.length}
        </div>
      )}
    </div>
  );
};

export default ListView;
