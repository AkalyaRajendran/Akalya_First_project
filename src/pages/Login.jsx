import React from 'react';
import '../css/Login';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Login_ak">
      <form className="loginform">
        <div className="formcontent">
          <label>Username</label>
          <input type="text" placeholder="Enter Username here" id="value" />
        </div>
        <div className="formcontent">
          <label>Password</label>
          <input type="text" placeholder="Enter password here" id="value" />
        </div>
        {/* <div className="formcontentC">
          <label>Xze4iR</label>
        </div> */}
        {/* <div className="formcontent">
          <label>Captcha</label>
          <input type="text" placeholder="Enter captcha here" id="value" />
        </div> */}
        <div className="formcontent">
          <input type="submit" valur="Login" />
          {/* <button>Reset</button> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
