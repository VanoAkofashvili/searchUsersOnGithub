import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

// Pages
import Home from "../Home/Home";
import Userpage from "../Userpage/Userpage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />

        <Route path="/:username" component={Userpage} />
      </div>
    </Router>
  );
};

export default App;
