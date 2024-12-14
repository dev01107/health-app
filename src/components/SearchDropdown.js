import React from 'react';
import ReactDOM from 'react-dom';

const SearchDropdown = ({ suggestions, query, onSelect }) => {
  return ReactDOM.createPortal(
    <div className="suggestions-portal">
      {suggestions
        .filter(s => s.toLowerCase().includes(query.toLowerCase()))
        .map((suggestion, index) => (
          <div
            key={index}
            className="suggestion-item"
            onClick={() => onSelect(suggestion)}
          >
            <span className="suggestion-icon">🔍</span>
            <span className="suggestion-text">{suggestion}</span>
          </div>
        ))}
    </div>,
    document.body
  );
};

export default SearchDropdown; 