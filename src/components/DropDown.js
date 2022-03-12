import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/DropDown.css";

export const DropDown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={dropdown ? "submenu clicked" : "submenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      <ul>
        <li>
          <Link to="/login" onClick={() => setDropdown(!dropdown)}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setDropdown(!dropdown)}>
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
