import React from 'react';
import '../css/Login';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    // data.preventDefault();
    console.log(data);
  };
  return (
    <div className="Login_ak">
      <form className="loginform" onSubmit={handleSubmit(onsubmit)}>
        <div className="formcontent">
          <label>Username</label>
          <input
            type="text"
            {...register('Username', {
              required: {
                value: true,
                message: 'Username is required',
              },
              minLength: {
                value: 3,
                message: 'Username should have atleast 3 Character',
              },
              maxLength: {
                value: 10,
                message: 'Username should not exceed 10 Character',
              },
            })}
            placeholder="Enter Username here"
            id="value"
          />
          <div>
            {errors.Username && <small>{errors.Username.message}</small>}
          </div>
        </div>
        <div className="formcontent">
          <label>Password</label>
          <input
            type="text"
            {...register('Password', {
              required: {
                value: true,
                message: 'Password is required',
              },
              minLength: {
                value: 4,
                message: 'Password is too short',
              },
              maxLength: {
                value: 8,
                message: 'Password is too length',
              },
            })}
            placeholder="Enter password here"
            id="value"
          />
          <div>
            {errors.Password && <small>{errors.Password.message}</small>}
          </div>
        </div>
        {/* <div className="formcontentC">
          <label>Xze4iR</label>
        </div> */}
        {/* <div className="formcontent">
          <label>Captcha</label>
          <input type="text" placeholder="Enter captcha here" id="value" />
        </div> */}
        <div className="formcontent">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
