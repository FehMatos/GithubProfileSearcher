import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import UserDetails from "./components/UserDetails";
import "./styles/App.css";

export default function App() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const searchRef = useRef(null);

  const handleSearch = async (query) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Error fetching data...");
      }
      const data = await response.json();
      setResults(data.items.slice(0, 4));
    } catch (err) {
      setResults(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    setSelectedUser("GitHub");
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div ref={searchRef}>
        <SearchBar
          onSearch={handleSearch}
          showResults={() => setIsResultsVisible(true)}
        />

        {error && <p className="error">{error}</p>}
        <SearchResults
          results={results}
          setSelectedUser={setSelectedUser}
          visible={isResultsVisible}
        />
      </div>

      {selectedUser && <UserDetails username={selectedUser} />}
    </div>
  );
}
