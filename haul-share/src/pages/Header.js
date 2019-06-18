import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import "../App.css";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 10,
    color: "black"
  };

  return (
    <div>
      <div>
        <h4 style={style}>
          <Link to="/home-page">Home</Link>
        </h4>
        <h4 style={style}>
          <Link to="/dummy">Contact-Us</Link>
        </h4>
        <h4 style={style}>
          <Link to="/dummy">Profile</Link>
        </h4>
        <h4 style={style}>
          <Link to="/">Sign-out</Link>
        </h4>
      </div>
      {children}
    </div>
  );
};

export default Header;
