export default function SearchResults({ results, setSelectedUser, visible }) {
  if (!results || results.length === 0) return null;

  if (!results || results.length === 0) return null;

  return (
    <div className={`searchResults ${visible ? "show" : "hide"}`}>
      <ul>
        {results.map((item) => (
          <li
            key={item.id}
            className="results"
            onClick={() => setSelectedUser(item.login)}
          >
            <img src={item.avatar_url} alt="" />

            <h1 className="textStyle">
              {item.login} {item.bio}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

import "../styles/SearchResults.css";
