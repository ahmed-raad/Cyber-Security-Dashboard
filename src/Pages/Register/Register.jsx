import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  useEffect(() => {
    localStorage.setItem("page", "register");
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    job: { required: "Job is required" },
    email: { required: "Email is required" },
    phonenumber: { required: "Phone Number is required" },

    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    confirmpassword: {
      required: "Please Re-write your password",
    },
  };

  return (
    <div id="register-container">
      <h1 id="register-heading">Make a new account</h1>
      <div id="register-wrapper">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="form-item">
            <label>Name</label>
            <input
              name="name"
              type="text"
              {...register("name", registerOptions.name)}
            />
            <small className="text-danger">
              {errors?.name && errors.name.message}
            </small>
          </div>
          <div className="form-item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", registerOptions.email)}
            />
            <small className="text-danger">
              {errors?.email && errors.email.message}
            </small>
          </div>
          <div className="form-item">
            <label>Phone Number</label>
            <input
              name="phonenumber"
              type="text"
              {...register("phonenumber", registerOptions.phonenumber)}
            />
            <small className="text-danger">
              {errors?.phonenumber && errors.phonenumber.message}
            </small>
          </div>
          <div className="form-item">
            <label>Job</label>
            <input
              name="job"
              type="text"
              {...register("job", registerOptions.job)}
            />
            <small className="text-danger">
              {errors?.job && errors.job.message}
            </small>
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", registerOptions.password)}
            />
            <small className="text-danger">
              {errors?.password && errors.password.message}
            </small>
          </div>
          <div className="form-item">
            <label>Confirm Password </label>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmpassword", registerOptions.confirmpassword)}
            />
            <small className="text-danger">
              {errors?.confirmpassword && errors.confirmpassword.message}
            </small>
          </div>
          <button className="box-1">
            <div className="btn btn-one">
              <span>SIGN UP</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
