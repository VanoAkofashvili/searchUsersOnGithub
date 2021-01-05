import React from "react";
import "./Header.css";

const Header = ({ clickHandler, push }) => {
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      push(`/${e.target.value}`);
      const localItems = (
        JSON.parse(localStorage.getItem("searched")) || []
      ).slice(0, 2);
      localItems.unshift(e.target.value);
      localStorage.setItem("searched", JSON.stringify(localItems));
    }
  };

  let placeHolder = "Search for user...";

  // get "searched"'s value from localStorage if it exists
  if (localStorage.getItem("searched")) {
    placeHolder = "";
    let keywords = JSON.parse(localStorage.getItem("searched"));
    keywords.forEach((name) => {
      placeHolder += name + " ";
    });
  }

  return (
    <header className="Header">
      <div className="Title">
        <h1>
          the most popular users on <span className="colored">git</span>hub
        </h1>
        <h2>omedia</h2>
      </div>
      <div className="SearchAndView">
        <div className="SearchContainer">
          <span className="material-icons SearchIcon">search</span>
          <input
            type="text"
            placeholder={placeHolder}
            className="SearchBox"
            name="search"
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="SwitchView">
          <p>View:</p>
          <button id="switchview" onClick={clickHandler}>
            <span className="material-icons"> view_list </span>
            <span className="material-icons"> view_comfy </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
