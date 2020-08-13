//import everything
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/nav.css";
// Create A NAvbar Element

const Navbar = () => {
  return (
    <nav>
      <div className="Navbar">
        <Link to="/" className="logo">
          <h2>
            <span className="blue">@</span>RATUL/
            <span className="red">Codes</span>
          </h2>
        </Link>
        <div className="Navlinks">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/About"> About </NavLink>
          <NavLink to="/Contact">Contact </NavLink>
          <NavLink to="/Projects">Projects </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
