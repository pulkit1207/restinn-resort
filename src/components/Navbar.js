import "../assets/css/Navbar.css";
import "../assets/css/App.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiPalmTree } from "react-icons/gi";
import { DropDown } from "./DropDown";
import Searchbox from "./Searchbox";

export const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          REST-INN
          <GiPalmTree />
        </Link>

        <Searchbox />

        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/vacationProperties">Vacation Properties</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register">Register</Link>
          </li>
          
          {/* <li className="nav-item">
            <button
              className="btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Login | Register
            </button>
            {showDropdown && <DropDown />}
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
