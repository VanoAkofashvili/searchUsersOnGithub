import React from "react";
import "./Header.css";

const Header = ({ clickHandler }) => {
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
            placeholder="Search for user..."
            className="SearchBox"
            name="search"
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
