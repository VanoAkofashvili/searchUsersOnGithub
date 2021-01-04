import React, { useState, useEffect } from "react";

import "./Userpage.css";

import Profile from "../../components/Profile/Profile";
import Organizations from "../../components/Organizations/Organizations";
import Spinner from "../../components/Spinner/Spinner";
import Back from "../../components/Back/Back";
import Error from "../../components/Error/Error";

const Userpage = ({ match }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + "Failed Fetch");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [match.params.username]);

  if (isError) {
    return <Error message="User not found" goBack={true} />;
  }
  return (
    <>
      <Back />
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
