import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  console.log(auth);
  return (
    <nav className="nav-wrapper blue-grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Digital Journal
        </Link>
        {auth.uid ? <LoggedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
