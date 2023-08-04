import React from 'react';
import '../css/Signup.css';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Signup_ak">
      <div className="signup">
        <div className="signupform">
          <label htmlFor="">
            <i className="fa-solid fa-user"></i> Username
          </label>
          <input
            type="text"
            {...register('Username', {
              required: {
                value: true,
                message: 'Username is required',
              },
              // minLength: {
              //   value: 4,
              //   message: 'Password is too short',
              // },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
                message:
                  'Minimum eight characters, at least one letter, one number and one special character',
              },
              maxLength: {
                value: 8,
                message: 'Username is too length',
              },
            })}
            placeholder="Enter username"
            id="name"
          />
          <div>
            {errors.Password && <small>{errors.Password.message}</small>}
          </div>
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
