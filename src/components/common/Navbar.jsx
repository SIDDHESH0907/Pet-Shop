import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <img className="navbar-logo" src="./logo.png" alt="logo" />
        </div>
        <div className="navbar-right">
          <div className="navbar-up-menu">
            <div className="navbar-up-list">Login</div>
            <div className="navbar-up-list">Register</div>
          </div>
          <div className="navbar-down-menu">
            <div className="navbar-down-list">HOME</div>
            <div className="navbar-down-list">SHOP</div>
            <div className="navbar-down-list">BLOG</div>
            <div className="navbar-down-list">ABOUT US</div>
            <div className="navbar-down-list">CONTACT US</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
