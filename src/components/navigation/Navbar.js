import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  return (
    <nav className="nav-wrapper blue-grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Digital Journal
        </Link>
        {auth.uid ? <LoggedInLinks profile={profile} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
