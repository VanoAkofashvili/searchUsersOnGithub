import React, { useState, useEffect } from "react";

const Profile = ({ user }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(user.repos_url)
      .then((response) => response.json())
      .then((data) => {
        setRepos(() =>
          // only three first repo names
          data.slice(0, 3).map((rep, i) => (
            <span key={i} className="span">
              {rep.name}
            </span>
          ))
        );
      });
  }, [user.repos_url]);

  return (
    <>
      <img src={user.avatar_url} alt="avatar" />
      <div className="Profile_info">
        <p>
          <strong>Name:</strong>{" "}
          <a href={user.html_url} target="_blank" rel="noreferrer">
            {user.name || "Not specified"}
          </a>
        </p>
        <p>
          <strong>Type:</strong> {user.type}
        </p>
        <p>
          <strong>Username:</strong>{" "}
          <a href={user.html_url} target="_blank" rel="noreferrer">
            {user.login}
          </a>
        </p>
        <p>
          <strong>Following:</strong> {user.following}
        </p>
        <p>
          <strong>Followers:</strong> {user.followers}
        </p>

        <p>
          <strong>Location:</strong> {user.location || "Not specified"}
        </p>

        <p>
          <strong>Company:</strong> {user.company || "Not specified"}
        </p>

        <p>
          <strong>Repositories:</strong>
          {repos.length === 0 ? "No repositories found" : repos}
        </p>
      </div>
    </>
  );
};

export default Profile;
