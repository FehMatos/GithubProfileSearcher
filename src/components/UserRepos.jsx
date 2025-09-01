import starImg from "../imgs/Star.svg";
import Nesting from "../imgs/Nesting.svg";
import Chield from "../imgs/Chield_alt.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { useState, useEffect } from "react";
export default function UserRepos({ username }) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message || "Couldnt load Repos.");
      }
    };

    if (username) fetchRepos();
  }, [username]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  const reposToShow = showAll ? repos : repos.slice(0, 4);
  return (
    <div>
      <ul className="ul1">
        {reposToShow.map((repo) => (
          <li
            key={repo.id}
            className="reposCard"
            onClick={() => window.open(repo.html_url, "_blank")}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-stats">
              <div className="stat-item">
                <img src={starImg} alt="star icon" className="icon" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="stat-item">
                <img src={Nesting} alt="fork icon" className="icon" />
                <span>{repo.forks}</span>
              </div>
              <div className="stat-item">
                {repo.license?.name ? (
                  <img src={Chield} alt="chield icon" className="icon" />
                ) : null}
                <span>{repo.license?.name || null}</span>
                updated{" "}
                {formatDistanceToNow(new Date(repo.updated_at), {
                  addSuffix: true,
                })}
              </div>
            </div>
          </li>
        ))}
        {!showAll && repos.length > 4 && (
          <button className="reposBtn" onClick={() => setShowAll(true)}>
            Show all repositories
          </button>
        )}
      </ul>
    </div>
  );
}

import "../styles/UserRepos.css";
