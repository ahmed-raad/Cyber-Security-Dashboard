import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    localStorage.setItem("page", "login");
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const loginOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div id="login-container">
      <h1 id="login-heading">Make a new account</h1>
      <div id="login-wrapper">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="form-item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", loginOptions.email)}
            />
            <small className="text-danger">
              {errors?.email && errors.email.message}
            </small>
          </div>

          <div className="form-item">
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", loginOptions.password)}
            />
            <small className="text-danger">
              {errors?.password && errors.password.message}
            </small>
          </div>

          <button className="box-1">
            <div className="btn btn-one">
              <span>LOGIN</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
