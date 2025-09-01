import { useState, useEffect } from "react";
import UserRepos from "./UserRepos";

export default function UserDetails({ username }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        setError("");
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setUserData(null);
        setError(err.message);
      }
    };

    fetchUserData();
  }, [username]);

  if (error) {
    return (
      <p style={{ color: "red" }} className="error">
        {error}
      </p>
    );
  }

  if (!userData) {
    return <p className="error">Loading...</p>;
  }

  return (
    <div className="profileContainer">
      <div>
        <img
          src={userData.avatar_url}
          alt={userData.login}
          className="avatar"
        />
      </div>
      <div className="cardStats">
        <span className="label">Followers</span>
        <div className="divider"></div>
        <span className="value">{userData.followers}</span>

        <span className="label">Following</span>
        <div className="divider"></div>
        <span className="value">{userData.following}</span>

        <span className="label">Location</span>
        <div className="divider"></div>
        <span className="value">
          {userData.location ? userData.location : "No location found"}
        </span>
      </div>
      <div>
        {" "}
        <div className="mainInfo">
          <h1 className="name">{userData.name || userData.login}</h1>
          <p className="bio">{userData.bio}</p>
        </div>
        <UserRepos username={username} />
      </div>{" "}
    </div>
  );
}
import "../styles/UserDetails.css";
