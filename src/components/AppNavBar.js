import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png";
const AppNavBar = () => {
  return (
    <div>
      <Navbar className="fixed-top" bg="white">
        <Navbar.Brand href="!#">
          <img
            alt="hero"
            src={logo}
            height="50"
            className="d-inline-block align-top ml-3"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
