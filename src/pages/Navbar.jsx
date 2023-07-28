import React from 'react';
import '../css/Navbar';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar_ak">
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/idcard">Idcard</NavLink>
            <NavLink to="/dummy">Dummy</NavLink>
            <NavLink to="/error">Error</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
