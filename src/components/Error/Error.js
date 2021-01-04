import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import Back from "../Back/Back";

const Error = ({ message, goBack }) => {
  return (
    <>
      {goBack ? <Back /> : null}

      <div className="Error">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="github"
        />
        <span>Oops!</span>
        <p>{message}</p>
        {goBack ? (
          <Link to="/">
            <button>
              <i className="material-icons">keyboard_backspace</i>Go Back
            </button>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Error;
