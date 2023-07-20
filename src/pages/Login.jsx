import React from 'react';
import '../css/Login';

function Login() {
  return (
    <div className="Login_ak">
      <div className="loginform">
        <div className="formcontent">
          <label>Username</label>
          <input type="text" placeholder="Enter Username here" id="value" />
        </div>
        <div className="formcontent">
          <label>Password</label>
          <input type="text" placeholder="Enter password here" id="value" />
        </div>
        <div className="formcontentC">
          <label>Xze4iR</label>
        </div>
        <div className="formcontent">
          <label>Captcha</label>
          <input type="text" placeholder="Enter captcha here" id="value" />
        </div>
        <div className="formcontent">
          <button>Sign in</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
