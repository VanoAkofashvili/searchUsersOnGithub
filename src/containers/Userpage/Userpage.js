import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Userpage.css";

import Profile from "../../components/Profile/Profile";
import Organizations from "../../components/Organizations/Organizations";
import Spinner from "../../components/Spinner/Spinner";

const Userpage = ({ match }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      });
  }, [match.params.username]);

  console.log(user);
  return (
    <>
      <div className="Back">
        <Link to="/">
          <button>
            <span className="material-icons"> arrow_back </span>
          </button>
        </Link>
      </div>
      <div className={isLoading ? "flex-row-center" : ""}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="UserProfile">
              <Profile user={user} />
            </div>

            <div className="Organizations">
              <h2>Organizations</h2>
              <Organizations orgs_url={user.organizations_url} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Userpage;
