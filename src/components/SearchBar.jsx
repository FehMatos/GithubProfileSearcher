import { useState } from "react";
import Search from "../imgs/Search.svg";

export default function SearchBar({ onSearch, showResults }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="search-container">
      {" "}
      <form onSubmit={handleSubmit}>
        <img src={Search} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search profile"
          onFocus={showResults}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

import "../styles/SearchBar.css";
