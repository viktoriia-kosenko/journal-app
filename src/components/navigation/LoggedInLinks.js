import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating orange lighten-1">
          VK
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInLinks;
