import React, { useState, useEffect, useRef } from "react";

import "./Home.css";

import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import Error from "../../components/Error/Error";

import Spinner from "../../components/Spinner/Spinner";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const viewRef = useRef();

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=repos:%3E50+followers:%3E1000&per_page=20"
      );

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

  useEffect(() => {
    getUsers();
  }, []);

  const clickHandler = () => {
    if (viewRef.current.classList.contains("grid")) {
      viewRef.current.classList.remove("grid");
      viewRef.current.classList.add("list");
    } else {
      viewRef.current.classList.remove("list");
      viewRef.current.classList.add("grid");
    }
  };

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
            <Users users={users} />
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
