import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./User.css";

const User = ({ login, avatar_url, repos_url }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const repos = await fetch(`${repos_url}?page=1`);
      const reposData = await repos.json();
      setRepos(reposData.slice(0, 3));
    };
    getRepositories();
  }, [repos_url]);

  return (
    <div className="User">
      <div className="User-image">
        <Link to={login}>
          <img src={avatar_url} alt={login} />
        </Link>
      </div>
      <div className="User-info">
        <p>
          <span className="material-icons icon"> account_circle </span>
          <Link to={login}>{login}</Link>
        </p>
        <p>
          <span className="material-icons icon"> military_tech </span> User
        </p>
        <p>
          <span className="material-icons icon"> folder_open </span>
          {repos.length
            ? repos.map((rep) => {
                return <span key={rep.id}>{rep.name}</span>;
              })
            : "No Repositories Found"}
        </p>
      </div>
    </div>
  );
};

export default User;
