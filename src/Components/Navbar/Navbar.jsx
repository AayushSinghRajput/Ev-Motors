import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        EV-MOTORS
        <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
