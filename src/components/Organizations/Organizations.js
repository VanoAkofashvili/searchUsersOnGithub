import React, { useState, useEffect } from "react";

import "./Organizations.css";

const Organizations = ({ orgs_url }) => {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const getOrgs = async () => {
      const data = await fetch(orgs_url);
      const orgsJson = await data.json();

      setOrgs(orgsJson);
    };

    getOrgs();
  }, [orgs_url]);

  let orgsJSX = (
    <div className="flex-row-center">
      <h3
        className="span mv-20"
        style={{
          letterSpacing: "1.3px",
          fontWeight: "300",
          padding: ".5rem 1rem",
        }}
      >
        No Organizations Found
      </h3>
    </div>
  );

  if (orgs.length) {
    orgsJSX = orgs.map((org) => {
      const { avatar_url, id, login } = org;
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {login}
          </a>
        </li>
      );
    });
  }

  return <ul>{orgsJSX}</ul>;
};

export default Organizations;
