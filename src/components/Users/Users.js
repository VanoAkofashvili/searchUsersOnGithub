import React from "react";

import User from "../User/User";

import "./Users.css";

const Users = ({ users }) => {
  return users.map((user) => {
    return <User key={user.id} {...user} />;
  });
};

export default Users;
