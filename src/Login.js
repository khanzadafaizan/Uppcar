import React from "react";
import carLeft from "./images/left_side_car (1).png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-12 login d-flex flex-column  align-items-center">
            <h3 className="text-dark mt-5 login-heading-text">
              Login to get access & compare millons of automobile deals
              worldwide
            </h3>
            <img src={carLeft} className="w-50"></img>
          </div>
          <div className="col-md-3 col-12 d-none d-md-block login download"></div>
        </div>
        {/* Form section start */}

        <div className="col-md-4 col-12 login_main_div">
          <div className="card login_card_div border-0">
            <div className="card-body login_card_body_div">
              <h5 className="card-title text-center d-none d-md-block">
                Login to Uppcar
              </h5>
              <p className="card-text text-center d-none d-md-block">
                Log to access millons of car deals worldwide
              </p>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label login_label"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control login-card-input"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email"
              />
              <label
                htmlFor="inputPassword"
                className=" col-form-label login_label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control login-card-input"
                id="inputPassword"
                placeholder="Enter Your Password"
              />
              <div className="input-btn">
                <div className="pt-2">
              <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                /><span className="">Remember this</span>  
                </div>
                <div>
                <a
                  href="#"
                  className="btn border-0"
                  role="button"
                  data-bs-toggle="button"
                >
                  Forgot Password?{" "}
                </a>
                </div>
              </div>
              <Link to={"/"} className="btn login_card_btn">
                Login
              </Link>
              <p className="mt-5 ms-5 text-secondary">
                Don't have account?{" "}
                <Link to={"/create"} className="text-warning login-create">
                  Create Account
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Form section end */}
      </div>
    </>
  );
}

export default Login;
