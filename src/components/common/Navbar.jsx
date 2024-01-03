import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" className="navbar-down-list" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="/shop" className="navbar-down-list" activeClassName="active">
              SHOP
            </NavLink>
            <NavLink to="/blog" className="navbar-down-list" activeClassName="active">
              BLOG
            </NavLink>
            <NavLink to="/about" className="navbar-down-list" activeClassName="active">
              ABOUT US
            </NavLink>
            <NavLink to="/contact" className="navbar-down-list" activeClassName="active">
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
