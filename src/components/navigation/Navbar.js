import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Digital Journal
        </Link>
        <LoggedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
