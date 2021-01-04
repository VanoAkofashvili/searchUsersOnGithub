import React, { useState, useEffect, useRef } from "react";

import "./Home.css";

import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";

import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewRef = useRef();

  const getUsers = async () => {
    const data = await fetch(
      "https://api.github.com/search/users?q=repos:%3E50+followers:%3E1000&per_page=20"
    );
    const usersData = await data.json();
    setUsers(usersData.items);
    setIsLoading(false);
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

  return (
    <>
      <Header clickHandler={clickHandler} />
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
