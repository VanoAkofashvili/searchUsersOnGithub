import React from "react";
import { Link } from "react-router-dom";
import "./Back.css";
const Back = () => {
  return (
    <div className="Back">
      <Link to="/">
        <button>
          <span className="material-icons"> arrow_back </span>
        </button>
      </Link>
    </div>
  );
};

export default Back;
