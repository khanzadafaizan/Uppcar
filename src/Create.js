import { Link } from "react-router-dom";
import React from 'react'
import carLeft from "./images/left_side_car (1).png";

function Create() {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-12 login d-flex flex-column  align-items-center">
            <h2 className="text-dark mt-5 login-heading-text">
              Get connected with the worldwide automobile dealers and compare millons of deals
            </h2>
            <img src={carLeft} className="w-50"></img>
          </div>
          <div className="col-md-3 col-12 d-none d-md-block login download"></div>
        </div>
        {/* Form section start */}

        <div className="col-md-4 col-12 login_main_div">
          <div className="card login_card_div border-0">
            <div className="card-body login_card_body_div">
              <h5 className="card-title text-center d-none d-md-block">
                Create Account to Uppcar
              </h5>
              <p className="card-text text-center d-none d-md-block">
                Log to access millons of car deals worldwide
              </p>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label login_label"
              >
                Name
              </label>

              <input type="text" class="form-control login-card-input" placeholder="Enter Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label login_label"
              >
                Country
              </label>

              <input type="text" class="form-control login-card-input" placeholder="Enter Your Country" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                Do have account?{" "}
                <Link to={"/login"} className="text-warning login-create">
                  Login Account
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Form section end */}
      </div>
  )
}

export default Create
