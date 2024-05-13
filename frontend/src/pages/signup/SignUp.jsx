import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="divider divider-horizontal m-1 lg:m-10"></div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full h-10 input input-bordered"
                required
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="w-full h-10 input input-bordered"
                required
                value={inputs.userName}
                onChange={(e) =>
                  setInputs({ ...inputs, userName: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter password"
                className="w-full h-10 input input-bordered"
                required
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="w-full h-10 input input-bordered"
                required
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
            >
              Already have an account?
            </Link>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
