import React from 'react';
import '../css/Navbar';

function Navbar() {
  return (
    <div className="Navbar_ak">
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
            <NavLink to="Login">Login</NavLink>
            <NavLink to="Signup">Signup</NavLink>
            <NavLink to="Calculator">Calculator</NavLink>
            <NavLink to="Idcard">Idcard</NavLink>
            <NavLink to="Dummy">Dummy</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
