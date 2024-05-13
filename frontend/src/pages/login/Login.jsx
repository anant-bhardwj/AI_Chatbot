import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero flex flex-1 items-center justify-center bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="divider divider-horizontal m-1 lg:m-10"></div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="w-full h-10 input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full h-10 input input-bordered"
                required
              />
            </div>
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-600 inline-block"
            >
              {"Don't"} have an account?
            </Link>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
