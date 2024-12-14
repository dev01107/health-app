import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { translations, healthConditions } from "../data/translations";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [language, setLanguage] = useState("en");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query.trim()}&lang=${language}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-header">
        <select 
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={translations[language].searchPlaceholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          {translations[language].searchButton}
        </button>
      </div>
      {showSuggestions && query && (
        <div className="suggestions-dropdown">
          {healthConditions[language]
            .filter(s => s.toLowerCase().includes(query.toLowerCase()))
            .map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => {
                  setQuery(suggestion);
                  setShowSuggestions(false);
                  navigate(`/search?query=${suggestion}&lang=${language}`);
                }}
              >
                <span className="suggestion-icon">🔍</span>
                <span className="suggestion-text">{suggestion}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
