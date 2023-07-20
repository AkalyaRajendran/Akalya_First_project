import React from 'react';
import '../css/Signup.css';

function Signup() {
  return (
    <div className ="Signup_ak">
      <div className="signup">
        <div className="signupform">
          <label htmlFor="">
            <i className="fa-solid fa-user"></i> Username
          </label>
          <input type="text" placeholder="Enter username" id="name" />
        </div>
        <div className="signupform">
          <label htmlFor="">
            <i className="fa-solid fa-lock"></i> Password
          </label>
          <input type="text" placeholder="Enter password" />
        </div>
        <div className="signupform">
          <label htmlFor="">
            <i className="fa-solid fa-unlock"></i> Confirm Password
          </label>
          <input type="text" placeholder="Re-enter password" />
        </div>
        <div className="signupform btn">
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
