import React, { useState, useEffect, useRef } from "react";

import "./Home.css";

import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import Error from "../../components/Error/Error";

import Spinner from "../../components/Spinner/Spinner";

const url =
  "https://api.github.com/search/users?q=followers%3A%3E%3D1000&fbclid=IwAR0ryyY0EhTy4m3clroDyFceu4S3QDoZUDZt811xsqXOAPZaMAWZamJiz90&per_page=20";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const viewRef = useRef();

  const getUsers = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.status + "Failed Fetch");
      } else {
        const usersData = await response.json();
        setUsers(usersData.items);
        setIsLoading(false);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  // get users after component did mount
  useEffect(() => {
    getUsers();
  }, []);

  // Switch view
  const clickHandler = () => {
    if (viewRef.current.classList.contains("grid")) {
      viewRef.current.classList.remove("grid");
      viewRef.current.classList.add("list");
    } else {
      viewRef.current.classList.remove("list");
      viewRef.current.classList.add("grid");
    }
  };

  // if there is an error
  if (isError) {
    return <Error message="Something went wrong" goBack={false} />;
  }

  return (
    <>
      <Header clickHandler={clickHandler} push={props.history.push} />
      <main className={`Main ${isLoading ? "flex-row-center" : ""}`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <section className="Users list" ref={viewRef}>
            {users.map((user) => {
              return <User key={user.id} {...user} />;
            })}
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
